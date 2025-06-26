window.onload = () => {
  const map = L.map('map').setView([-1.5, 101.3], 11);

  // Basemap dari Esri
  const esri = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
      attribution: 'Tiles © Esri'
    }
  ).addTo(map);

  // Tile layer dari Google Earth Engine
  const geeTile = L.tileLayer(
    'https://earthengine.googleapis.com/v1/projects/ee-mrgridhoarazzak/maps/142476407c2433866290dce1c3315b86-007844e5bd78416cb3da0c3a9c4a6eb4/tiles/{z}/{x}/{y}',
    {
      attribution: 'Data: Google Earth Engine'
    }
  ).addTo(map);
};
