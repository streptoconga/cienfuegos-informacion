(() => {
  'use strict';
  const data = Array.isArray(window.CIENFUEGOS_CONTENT) ? window.CIENFUEGOS_CONTENT : [];
  const resources = Array.isArray(window.CIENFUEGOS_RECURSOS) ? window.CIENFUEGOS_RECURSOS : [];
  const $ = (sel) => document.querySelector(sel);
  const grid = $('#cardGrid');
  const input = $('#searchInput');
  const count = $('#resultCount');
  const empty = $('#emptyState');
  let selectedGroup = 'todos';
  let resourceGroup = 'todos';
  let selectedService = null;
  const readFavorites = () => { try { const arr = JSON.parse(localStorage.getItem('ci-favoritos') || '[]'); return Array.isArray(arr) ? arr : []; } catch { return []; } };
  let favorites = readFavorites();
  const saveFavorites = () => { try { localStorage.setItem('ci-favoritos', JSON.stringify(favorites)); } catch { /* uso sin almacenamiento */ } };
  const normalized = (value) => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('es-CL');
  const escapeHTML = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const matching = (service) => {
    const query = normalized(input.value.trim());
    const groupMatch = selectedGroup === 'todos' || (selectedGroup === 'favoritos' ? favorites.includes(service.id) : selectedGroup === service.grupo);
    const text = normalized([service.nombre, service.descripcion, service.palabras, service.categoria].join(' '));
    return groupMatch && (!query || text.includes(query));
  };
  function render() {
    const items = data.filter(matching);
    grid.innerHTML = items.map(s => `<article class="service-card">
        <div class="card-top"><span class="service-emoji" aria-hidden="true">${escapeHTML(s.icono)}</span>
        <button type="button" class="favorite-button ${favorites.includes(s.id) ? 'saved' : ''}" data-favorite="${escapeHTML(s.id)}" aria-label="${favorites.includes(s.id) ? 'Quitar de guardados' : 'Guardar'}: ${escapeHTML(s.nombre)}" title="Guardar para consultar después">${favorites.includes(s.id) ? '★' : '☆'}</button></div>
        <div class="card-category">${escapeHTML(s.categoria)}</div><h3>${escapeHTML(s.nombre)}</h3>
        <p>${escapeHTML(s.descripcion)}</p><div class="card-footer"><span class="validation-mini"><span aria-hidden="true">●</span> Por validar</span><button type="button" class="card-link" data-open="${escapeHTML(s.id)}">Ver información <span aria-hidden="true">→</span></button></div>
      </article>`).join('');
    count.textContent = `${items.length} ${items.length === 1 ? 'resultado' : 'resultados'}`;
    empty.hidden = items.length > 0;
    $('#clearSearch').hidden = !input.value.length;
  }
  function selectFilter(group) {
    selectedGroup = group;
    document.querySelectorAll('[data-filter]').forEach(btn => {
      const active = btn.dataset.filter === group;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    render();
  }
  function toggleFavorite(id) {
    favorites = favorites.includes(id) ? favorites.filter(x => x !== id) : [...favorites, id];
    saveFavorites();
    render();
    if (selectedService?.id === id) updateFavoriteLabel();
  }
  function updateFavoriteLabel(){
    const saved = favorites.includes(selectedService.id);
    $('#dialogFavorite').textContent = saved ? '★ Quitar de guardados' : '☆ Guardar prestación';
  }
  function openService(id) {
    const s = data.find(x => x.id === id);
    if(!s) return;
    selectedService = s;
    $('#dialogIcon').textContent = s.icono;
    $('#dialogCategory').textContent = s.categoria;
    $('#dialogTitle').textContent = s.nombre;
    $('#dialogDescription').textContent = s.descripcion;
    const matches = ({
      infantil:['infancia','crece','pni-vigente'],adolescente:['adolescentes','guias-adolescencia'],mujer:['mujer','lactancia'],adultos:['cardiovascular','copago'],
      mayores:['mayores','nutricion'],mental:['mental'],vacunatorio:['pni-pdf','pni-vigente'],procedimientos:[],
      alimentacion:['nutricion'],odontologia:[],some:['inscripcion','afiliacion'],oirs:['oirs','derechos']
    })[s.id] || [];
    $('#dialogResources').innerHTML = matches.length ? '<strong>Información nacional relacionada</strong>' + matches.map(id => {
      const r = resources.find(x => x.id === id);
      return r ? `<a href="${escapeHTML(r.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(r.nombre)} ↗</a>` : '';
    }).join('') : '';
    updateFavoriteLabel();
    const dialog = $('#serviceDialog');
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open','');
  }
  grid.addEventListener('click', ev => {
    const favorite = ev.target.closest('[data-favorite]');
    if (favorite) return toggleFavorite(favorite.dataset.favorite);
    const open = ev.target.closest('[data-open]');
    if (open) return openService(open.dataset.open);
  });
  document.querySelectorAll('[data-filter]').forEach(btn => btn.addEventListener('click', () => selectFilter(btn.dataset.filter)));
  input.addEventListener('input', render);
  $('#clearSearch').addEventListener('click', () => { input.value = ''; render(); input.focus(); });
  $('#resetFilters').addEventListener('click', () => { input.value = ''; selectFilter('todos'); input.focus(); });
  $('#closeDialog').addEventListener('click', () => $('#serviceDialog').close());
  $('#serviceDialog').addEventListener('click', ev => { if(ev.target === $('#serviceDialog')) $('#serviceDialog').close(); });
  $('#dialogFavorite').addEventListener('click', () => { if(selectedService) toggleFavorite(selectedService.id); });
  $('#menuBtn').addEventListener('click', () => {
    const open = $('#mobileNav').hidden;
    $('#mobileNav').hidden = !open;
    $('#menuBtn').setAttribute('aria-expanded', String(open));
  });
  document.querySelectorAll('#mobileNav a').forEach(a => a.addEventListener('click', () => {
    $('#mobileNav').hidden = true;
    $('#menuBtn').setAttribute('aria-expanded','false');
  }));
  function renderResources() {
    const phrase = normalized($('#resourceSearch').value.trim());
    const items = resources.filter(x => (resourceGroup === 'todos' || x.grupo === resourceGroup) && (!phrase || normalized([x.nombre,x.descripcion,x.fuente,x.grupo].join(' ')).includes(phrase)));
    $('#resourceCount').textContent = `${items.length} ${items.length===1?'recurso':'recursos'}`;
    $('#resourceGrid').innerHTML = items.map(x => `
      <article class="resource-card">
        <div class="resource-card-top"><span class="resource-icon" aria-hidden="true">${escapeHTML(x.icono)}</span><span class="resource-type">${escapeHTML(x.tipo)}</span></div>
        <h3>${escapeHTML(x.nombre)}</h3><p>${escapeHTML(x.descripcion)}</p>
        <div class="resource-card-foot"><small>${escapeHTML(x.fuente)}</small><a href="${escapeHTML(x.url)}" target="_blank" rel="noopener noreferrer" aria-label="Abrir ${escapeHTML(x.nombre)} en su fuente original">Abrir recurso ↗</a></div>
      </article>`).join('');
    $('#resourcesEmpty').hidden = items.length>0;
  }
  document.querySelectorAll('[data-resource-filter]').forEach(btn => btn.addEventListener('click',()=>{
    resourceGroup = btn.dataset.resourceFilter;
    document.querySelectorAll('[data-resource-filter]').forEach(item => {
      const current = item===btn; item.classList.toggle('active',current); item.setAttribute('aria-pressed',String(current));
    });
    renderResources();
  }));
  $('#resourceSearch').addEventListener('input',renderResources);
  render();
  renderResources();
  if('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  }
})();
