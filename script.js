const iconoEstacion = L.icon({
    iconUrl: 'img/metrovia.png',
    iconSize: [32, 32], // tamaño del ícono
    iconAnchor: [16, 32], // punto del ícono que estará en la coordenada
    popupAnchor: [0, -32] // dónde aparecerá el popup respecto al ícono
  });
const iconoUnidad = L.icon({
  iconUrl: 'img/bus.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});
  let unidadesMarkers = [];
const estaciones = [
      { nombre: "Terminal MetroBastion", lat: -2.091617, lon: -79.942195 },
      { nombre: "Parque california", lat: -2.096153, lon: -79.936247 },
      { nombre: "Inmaconsa", lat: -2.104120361181248, lon:-79.93501554386026 },
      { nombre: "Luz del guayas", lat: -2.112456, lon: -79.933319 },
      { nombre: "Fuerte Huancavilca", lat: -2.117494, lon: -79.932254},
      { nombre: "Florida", lat: -2.12631, lon: -79.9316972 },
      { nombre: "Gallegos Lara", lat: -2.1356969, lon: -79.9337551 },
      { nombre: "Juan Tanca Marengo", lat: -2.1396232, lon:-79.9340118 },
      { nombre: "Prosperina", lat: -2.1433007, lon: -79.9343396 },
      { nombre: "Colegio Dolores Sucre", lat: -2.1484251, lon: -79.9330418 },
      { nombre: "Cerros De Mapasingue", lat: -2.1531501, lon: -79.9312479 },
      { nombre: "Mapasingue", lat: -2.155632, lon: -79.9301624 },
      { nombre: "Centro De Arte", lat: -2.1587561, lon: -79.9288335 },
      { nombre: "Federación Deportiva del Guayas", lat: -2.1648032, lon: -79.923607 },
      { nombre: "Parada Colegio 28 de Mayo", lat: -2.1700231, lon: -79.9188109 },
      { nombre: "Las Monjas", lat: -2.1761219, lon: -79.9123315 },
      { nombre: "Bellavista", lat: -2.178413, lon: -79.9088075 },
      { nombre: "Universidad Catolica", lat:-2.1804274, lon: -79.9037913 },
      { nombre: "Ferroviaria", lat: -2.1846548, lon: -79.9007839 },
      { nombre: "Universidad de guayaquil", lat: -2.186869, lon:-79.894901},
      { nombre: "Colegio Vicente Rocafuerte", lat: -2.1904151, lon: -79.8956051 },
      { nombre: "Calle Esmeraldas", lat: -2.1931992, lon: -79.8956271 },
      { nombre: "Plaza Victoria", lat: -2.1943155, lon: -79.8909449 },
      { nombre: "Mercado Central", lat: -2.194963, lon: -79.8880367 },
      { nombre: "IESS Caja del Seguro", lat: -2.197726, lon: -79.885103 },
      { nombre: "Biblioteca Municipal", lat: -2.1965202, lon: -79.8824468 },
      { nombre: "Garcia Aviles", lat: -2.1954969, lon: -79.8855598 },
    ];

// Función para agregar las estaciones de la Troncal 3
function agregarEstacionesTroncal3(map) { //todas las estaciones de la ruta de la metrovia "Troncal 3"

    const coordenadasApoyo =[ //Estaciones + coordenadas de apoyo para que el mapa tenga coherencia en su ruta
      { nombre: "Terminal MetroBastion", lat: -2.091617, lon: -79.942195 },
      {lat: -2.091413, lon: -79.936911 },
      { nombre: "Parque california", lat: -2.096153, lon: -79.936247 },
      { nombre: "Inmaconsa", lat: -2.104120361181248, lon:-79.93501554386026 },
      { nombre: "Luz del guayas", lat: -2.112456, lon: -79.933319 },
      { nombre: "Fuerte Huancavilca", lat: -2.117494, lon: -79.932254},
      {lat:-2.123850, lon: -79.931010},
      { nombre: "Florida", lat: -2.12631, lon: -79.9316972 },
      {lat:-2.130752, lon: -79.933208},
      { nombre: "Gallegos Lara", lat: -2.1356969, lon: -79.9337551 },
      { nombre: "Juan Tanca Marengo", lat: -2.1396232, lon:-79.9340118 },
      { nombre: "Prosperina", lat: -2.1433007, lon: -79.9343396 },
      { nombre: "Colegio Dolores Sucre", lat: -2.1484251, lon: -79.9330418 },
      { nombre: "Cerros De Mapasingue", lat: -2.1531501, lon: -79.9312479 },
      { nombre: "Mapasingue", lat: -2.155632, lon: -79.9301624 },
      { nombre: "Centro De Arte", lat: -2.1587561, lon: -79.9288335 },
      {lat: -2.162894, lon: -79.926737},
      { nombre: "Federación Deportiva del Guayas", lat: -2.1648032, lon: -79.923607 },
      { nombre: "Parada Colegio 28 de Mayo", lat: -2.1700231, lon: -79.9188109 },
      { nombre: "Las Monjas", lat: -2.1761219, lon: -79.9123315 },
      { nombre: "Bellavista", lat: -2.178413, lon: -79.9088075 },
      { nombre: "Universidad Catolica", lat:-2.1804274, lon: -79.9037913 },
      {lat:-2.182225, lon:  -79.901675},
      { nombre: "Ferroviaria", lat: -2.1846548, lon: -79.9007839 },
      {lat: -2.185875, lon: -79.899811},
      {lat: -2.187322, lon: -79.8967492},
      {lat: -2.186681, lon: -79.895293},
      { nombre: "Universidad de guayaquil", lat: -2.186869, lon:-79.894901},
      {lat:-2.186986, lon:-79.894434},
      { nombre: "Colegio Vicente Rocafuerte", lat: -2.1904151, lon: -79.8956051 },
      {lat: -2.193057, lon: -79.896334},
      { nombre: "Calle Esmeraldas", lat: -2.1931992, lon: -79.8956271 },
      { nombre: "Plaza Victoria", lat: -2.1943155, lon: -79.8909449 },
      { nombre: "Mercado Central", lat: -2.194963, lon: -79.8880367 },
      {lat: -2.195347, lon:-79.886037},
      {lat: -2.196431, lon: -79.886247},
      { nombre: "IESS Caja del Seguro", lat: -2.197726, lon: -79.885103 },
      {lat: -2.200082, lon: -79.882979},
      {lat: -2.198002, lon: -79.882376},
      {lat: -2.197432, lon: -79.882499},
      { nombre: "Biblioteca Municipal", lat: -2.1965202, lon: -79.8824468 },
      {lat: -2.196150, lon: -79.882281},
      { nombre: "Garcia Aviles", lat: -2.1954969, lon: -79.8855598 },
    ]
  
    estaciones.forEach(est => {
      L.marker([est.lat, est.lon], {icon: iconoEstacion})
        .addTo(map)
        .bindPopup(`Estación: ${est.nombre}`);
    });
      const ruta = L.polyline(coordenadasApoyo, {
        color: 'blue',
        weight: 4,
        opacity: 0.7,
        smoothFactor: 1
      }).addTo(map);
    
      // Ajustar el mapa para que muestre toda la línea
      map.fitBounds(ruta.getBounds());
  }
  // Función para cargar y mostrar ubicaciones de unidades dinámicamente
function calcularDistanciaKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radio de la Tierra en km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
document.getElementById("cerrar-detalle").addEventListener("click", () => {
  document.getElementById("detalle-estacion").style.display = "none";
});
document.getElementById("estacion").addEventListener("change", async (e) => {
  const id = parseInt(e.target.value);
  const estacion = estaciones[id];  // <- accede por índice
  console.log("Estación seleccionada:", estacion);

  if (!estacion) return;

  document.getElementById("lat-estacion").innerText = estacion.lat;
  document.getElementById("lon-estacion").innerText = estacion.lon;
  document.getElementById("detalle-estacion").style.display = "block";

  try {
    const res = await fetch(`https://metrovia-backend.onrender.com/api/estacion/${id}/unidades`);
    if (!res.ok) throw new Error("Error en la solicitud");

    const unidades = await res.json();
    const ul = document.getElementById("unidades-cercanas");
    ul.innerHTML = "";

    if (unidades.length === 0) {
      ul.innerHTML = "<li>No hay unidades cercanas.</li>";
      return;
    }

    unidades.forEach(unidad => {
  const li = document.createElement("li");
  li.innerText = `Unidad: ${unidad.idUnidad}`;
  ul.appendChild(li);
  });
  } catch (error) {
    console.error("Error al obtener unidades cercanas:", error);
    document.getElementById("unidades-cercanas").innerHTML = "<li>Error al obtener unidades.</li>";
  }
});
function estimarTiempo(distanciaKm) {
  const velocidadPromedioKmH = 25; // Aproximado para Metrovía
  const tiempoHoras = distanciaKm / velocidadPromedioKmH;
  return Math.round(tiempoHoras * 60); // En minutos
}
function actualizarTiempoEstimado() {
  const select = document.getElementById("estacion");
  const index = select.selectedIndex; // índice de la estación seleccionada
  const coordsEstacion = estaciones[index];

  if (!coordsEstacion) return;
  fetch('https://metrovia-backend.onrender.com/ubicacion')
    .then(response => response.json())
    .then(unidades => {
      if (!unidades || unidades.length === 0) {
        document.getElementById("tiempo").textContent = "-";
        return;
      }

      const tiempos = unidades.map(unidad => {
        const latUnidad = unidad.lat;
        const lonUnidad = unidad.lon;

        const distancia = calcularDistanciaKm(coordsEstacion.lat, coordsEstacion.lon, latUnidad, lonUnidad);
        return estimarTiempo(distancia);
      });

      const tiempoMinimo = Math.min(...tiempos);
      document.getElementById("tiempo").textContent = tiempoMinimo;
    })
    .catch(error => {
      console.error("Error al obtener unidades:", error);
      document.getElementById("tiempo").textContent = "-";
    });
}
// Agrega listener para actualizar cuando cambie la estación
document.getElementById("estacion").addEventListener("change", actualizarTiempoEstimado);

// Actualiza cada 10 segundos automáticamente
setInterval(actualizarTiempoEstimado, 10000);

// Actualización inicial al cargar la página
actualizarTiempoEstimado();
function cargarUnidadesDesdeBackend(map) {
  fetch('https://metrovia-backend.onrender.com/ubicacion')
    .then(response => {
      if (!response.ok) {
        throw new Error('Respuesta de red no OK');
      }
      return response.json();
    })
    .then(data => {
      console.log('Unidades recibidas:', data); // para depurar
      actualizarUnidades(map, data);
    })
    .catch(error => {
      console.error('Error al obtener unidades:', error);
    });
}
  function actualizarUnidades(map, unidades) {
  if (!unidades || !Array.isArray(unidades)) {
    console.warn('actualizarUnidades recibió un valor inválido:', unidades);
    return;
  }

  // Eliminar marcadores viejos del mapa
  unidadesMarkers.forEach(marker => map.removeLayer(marker));
  unidadesMarkers = [];

  // Agregar nuevos marcadores
  unidades.forEach(unidad => {
    if (unidad.lat != null && unidad.lon != null) { // validación simple
      const marker = L.marker([unidad.lat, unidad.lon], { icon: iconoUnidad })
        .addTo(map)
        .bindPopup(`${unidad.idUnidad}`);
      unidadesMarkers.push(marker);
    } else {
      console.warn('Unidad con lat/lon inválidos:', unidad);
    }
  });
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
      // Primera carga de unidades
    cargarUnidadesDesdeBackend(map);
     // Actualizar unidades cada 10 segundos
    setInterval(() => {
    cargarUnidadesDesdeBackend(map);
    }, 10000);
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