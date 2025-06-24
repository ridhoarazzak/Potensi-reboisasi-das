window.onload = () => {
  const map = L.map('map').setView([-1.5785, 101.3123], 12);

  // Basemap OpenStreetMap
  const osm = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    { attribution: '© OpenStreetMap contributors' }
  ).addTo(map);

  // Tile GEE - URL terbaru
  const geeUrl = "https://earthengine.googleapis.com/v1/projects/ee-mrgridhoarazzak/maps/142476407c2433866290dce1c3315b86-3d1cef12768ed2887ee2d58bc490e3f3/tiles/{z}/{x}/{y}";

  const konservasiLayer = L.tileLayer(geeUrl, {
    attribution: "Google Earth Engine",
    opacity: 0.6
  }).addTo(map);

  // Legenda
  L.control({ position: 'bottomright' }).onAdd = () => {
    const div = L.DomUtil.create('div', 'legend');
    div.innerHTML = `<strong>Legenda</strong><br>
      <i style="background: green; width: 10px; height: 10px; display: inline-block;"></i> Area Konservasi DAS`;
    return div;
  }.addTo(map);
};
