window.onload = () => {
  const map = L.map('map').setView([-1.5785, 101.3123], 12);

  // Basemap Esri Satelit
  const esri = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    { attribution: 'Tiles © Esri' }
  ).addTo(map);

  // Tile GEE dari asset konservasi_dascoba
  const geeUrl = "https://earthengine.googleapis.com/v1/projects/ee-mrgridhoarazzak/maps/da7bee5736f62acc3554989be39133c3-ab5b2c53d9f0bfd54abd444341033e6a/tiles/{z}/{x}/{y}";

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
