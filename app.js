(() => {
  'use strict';
  const data = Array.isArray(window.CIENFUEGOS_CONTENT) ? window.CIENFUEGOS_CONTENT : [];
  const $ = (sel) => document.querySelector(sel);
  const grid = $('#cardGrid');
  const input = $('#searchInput');
  const count = $('#resultCount');
  const empty = $('#emptyState');
  let selectedGroup = 'todos';
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
  render();
  if('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  }
})();
