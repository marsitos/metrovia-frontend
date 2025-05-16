// Función para agregar las estaciones de la Troncal 3
const iconoEstacion = L.icon({
    iconUrl: 'img/metrovia.png',
    iconSize: [25, 25], // tamaño del ícono
    iconAnchor: [16, 32], // punto del ícono que estará en la coordenada
    popupAnchor: [0, -32] // dónde aparecerá el popup respecto al ícono
  });
function agregarEstacionesTroncal3(map) {
    const estaciones = [
      { nombre: "Terminal MetroBastion", lat: -2.091617, lng: -79.942195 },
      { nombre: "Parque california", lat: -2.096153, lng: -79.936247 },
      { nombre: "Inmaconsa", lat: -2.104120361181248, lng:-79.93501554386026 },
      { nombre: "Luz del guayas", lat: -2.112456, lng: -79.933319 },
      { nombre: "Fuerte Huancavilca", lat: -2.117494, lng: -79.932254},
      { nombre: "Florida", lat: -2.12631, lng: -79.9316972 },
      { nombre: "Gallegos Lara", lat: -2.1356969, lng: -79.9337551 },
      { nombre: "Juan Tanca Marengo", lat: -2.1396232, lng:-79.9340118 },
      { nombre: "Prosperina", lat: -2.1433007, lng: -79.9343396 },
      { nombre: "Colegio Dolores Sucre", lat: -2.1484251, lng: -79.9330418 },
      { nombre: "Cerros De Mapasingue", lat: -2.1531501, lng: -79.9312479 },
      { nombre: "Mapasingue", lat: -2.155632, lng: -79.9301624 },
      { nombre: "Centro De Arte", lat: -2.1587561, lng: -79.9288335 },
      { nombre: "Federación Deportiva del Guayas", lat: -2.1648032, lng: -79.923607 },
      { nombre: "Parada Colegio 28 de Mayo", lat: -2.1700231, lng: -79.9188109 },
      { nombre: "Las Monjas", lat: -2.1761219, lng: -79.9123315 },
      { nombre: "Bellavista", lat: -2.178413, lng: -79.9088075 },
      { nombre: "Universidad Catolica", lat:-2.1804274, lng: -79.9037913 },
      { nombre: "Ferroviaria", lat: -2.1846548, lng: -79.9007839 },
      { nombre: "Universidad de guayaquil", lat: -2.186869, lng:-79.894901},
      { nombre: "Colegio Vicente Rocafuerte", lat: -2.1904151, lng: -79.8956051 },
      { nombre: "Calle Esmeraldas", lat: -2.1931992, lng: -79.8956271 },
      { nombre: "Plaza Victoria", lat: -2.1943155, lng: -79.8909449 },
      { nombre: "Mercado Central", lat: -2.194963, lng: -79.8880367 },
      { nombre: "IESS Caja del Seguro", lat: -2.197726, lng: -79.885103 },
      { nombre: "Biblioteca Municipal", lat: -2.1965202, lng: -79.8824468 },
      { nombre: "Garcia Aviles", lat: -2.1954969, lng: -79.8855598 },
    ];
    const coordenadasApoyo =[
      { nombre: "Terminal MetroBastion", lat: -2.091617, lng: -79.942195 },
      {lat: -2.091413, lng: -79.936911 },
      { nombre: "Parque california", lat: -2.096153, lng: -79.936247 },
      { nombre: "Inmaconsa", lat: -2.104120361181248, lng:-79.93501554386026 },
      { nombre: "Luz del guayas", lat: -2.112456, lng: -79.933319 },
      { nombre: "Fuerte Huancavilca", lat: -2.117494, lng: -79.932254},
      {lat:-2.123850, lng: -79.931010},
      { nombre: "Florida", lat: -2.12631, lng: -79.9316972 },
      {lat:-2.130752, lng: -79.933208},
      { nombre: "Gallegos Lara", lat: -2.1356969, lng: -79.9337551 },
      { nombre: "Juan Tanca Marengo", lat: -2.1396232, lng:-79.9340118 },
      { nombre: "Prosperina", lat: -2.1433007, lng: -79.9343396 },
      { nombre: "Colegio Dolores Sucre", lat: -2.1484251, lng: -79.9330418 },
      { nombre: "Cerros De Mapasingue", lat: -2.1531501, lng: -79.9312479 },
      { nombre: "Mapasingue", lat: -2.155632, lng: -79.9301624 },
      { nombre: "Centro De Arte", lat: -2.1587561, lng: -79.9288335 },
      {lat: -2.162894, lng: -79.926737},
      { nombre: "Federación Deportiva del Guayas", lat: -2.1648032, lng: -79.923607 },
      { nombre: "Parada Colegio 28 de Mayo", lat: -2.1700231, lng: -79.9188109 },
      { nombre: "Las Monjas", lat: -2.1761219, lng: -79.9123315 },
      { nombre: "Bellavista", lat: -2.178413, lng: -79.9088075 },
      { nombre: "Universidad Catolica", lat:-2.1804274, lng: -79.9037913 },
      {lat:-2.182225, lng:  -79.901675},
      { nombre: "Ferroviaria", lat: -2.1846548, lng: -79.9007839 },
      {lat: -2.185875, lng: -79.899811},
      {lat: -2.187322, lng: -79.8967492},
      {lat: -2.186681, lng: -79.895293},
      { nombre: "Universidad de guayaquil", lat: -2.186869, lng:-79.894901},
      {lat:-2.186986, lng:-79.894434},
      { nombre: "Colegio Vicente Rocafuerte", lat: -2.1904151, lng: -79.8956051 },
      {lat: -2.193057, lng: -79.896334},
      { nombre: "Calle Esmeraldas", lat: -2.1931992, lng: -79.8956271 },
      { nombre: "Plaza Victoria", lat: -2.1943155, lng: -79.8909449 },
      { nombre: "Mercado Central", lat: -2.194963, lng: -79.8880367 },
      {lat: -2.195347, lng:-79.886037},
      {lat: -2.196431, lng: -79.886247},
      { nombre: "IESS Caja del Seguro", lat: -2.197726, lng: -79.885103 },
      {lat: -2.200082, lng: -79.882979},
      {lat: -2.198002, lng: -79.882376},
      {lat: -2.197432, lng: -79.882499},
      { nombre: "Biblioteca Municipal", lat: -2.1965202, lng: -79.8824468 },
      {lat: -2.196150, lng: -79.882281},
      { nombre: "Garcia Aviles", lat: -2.1954969, lng: -79.8855598 },
    ]
  
    estaciones.forEach(est => {
      L.marker([est.lat, est.lng], {icon: iconoEstacion})
        .addTo(map)
        .bindPopup(`Estación: ${est.nombre}`);
    });
    // const coordenadas = estaciones.map(est => [est.lat, est.lng]);
    const ruta = L.polyline(coordenadasApoyo, {
        color: 'blue',
        weight: 4,
        opacity: 0.7,
        smoothFactor: 1
      }).addTo(map);
    
      // Ajustar el mapa para que muestre toda la línea
      map.fitBounds(ruta.getBounds());
  }
  
  // Función para iniciar el mapa en coordenadas dadas
  function initMap(coords) {
    const map = L.map('map').setView(coords, 14); // Nivel de zoom 14 para mejor visibilidad
  
    // Capa base del mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
  
    // Marcador de ubicación del usuario
    L.marker(coords)
      .addTo(map)
      .bindPopup('Estás aquí')
      .openPopup();
  
    // Agregar estaciones de la Troncal 3
    agregarEstacionesTroncal3(map);
  }
  
  // Verificar si el navegador permite geolocalización
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const coords = [position.coords.latitude, position.coords.longitude];
        initMap(coords);
      },
      function (error) {
        alert("No se pudo obtener tu ubicación. Se mostrará Guayaquil por defecto.");
        initMap([-2.165, -79.89]); // zona central de Troncal 3
      }
    );
  } else {
    alert("Tu navegador no soporta geolocalización.");
    initMap([-2.165, -79.89]);
  }
  