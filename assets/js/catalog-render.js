async function renderCatalog() {
  const response = await fetch('/music/catalog/catalog.json');
  const data = await response.json();
  const domain = window.location.hostname;
  const artist = domain.includes('angershade') ? 'Angershade' : domain.includes('thecorruptive') ? 'The Corruptive' : 'Yegge';
  const albums = data.albums.filter(album => album.artist === artist && album.visibility === 'PUBLIC');
  // Render albums and tracks to DOM
}
document.addEventListener('DOMContentLoaded', renderCatalog);