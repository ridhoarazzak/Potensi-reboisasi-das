window.onload = () => {
  const map = L.map('map').setView([-1.5785, 101.3123], 12);

  // Basemap Esri Satelit
  const esri = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    { attribution: 'Tiles © Esri' }
  ).addTo(map);

  // Tile GEE dari asset konservasi_dascoba (URL terbaru)
  const geeUrl = "https://earthengine.googleapis.com/v1/projects/ee-mrgridhoarazzak/maps/2801e111435f9459921b8b8003db65f3-2a19293da28df995ed63d0ca4f93ff4b/tiles/{z}/{x}/{y}";

  const konservasiLayer = L.tileLayer(geeUrl, {
    attribution: "Google Earth Engine",
    opacity: 0.6
  }).addTo(map);

  // Legenda
  L.control({ position: 'bottomright' }).onAdd = () => {
    const div = L.DomUtil.create('div', 'legend');
    div.innerHTML = `<strong>Legenda</strong><br>
      <i style="background:#1f78b4"></i> Area Konservasi DAS`;
    return div;
  }.addTo(map);
};
