document.addEventListener('DOMContentLoaded', () => {
  const domain = window.location.hostname;
  const artist = domain.includes('angershade') ? 'Angershade' : domain.includes('thecorruptive') ? 'The Corruptive' : 'Yegge';
  // Filter catalog by artist
  // Add logic to query catalog database and display relevant albums
});