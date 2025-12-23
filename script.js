/* -----------------------------
   Global Navigation
------------------------------ */
function goTo(page) {
  window.location.href = page;
}

/* -----------------------------
   Login (Mock for now)
------------------------------ */
function login() {
  // Simple mock login
  window.location.href = "home.html";
}

/* -----------------------------
   AI Help (Create Page)
------------------------------ */
function aiHelp() {
  alert(
    "AI आपकी मदद करेगा:\n\n" +
    "• काम का सही title\n" +
    "• Location\n" +
    "• Timing\n" +
    "• Clear description\n\n" +
    "बस जानकारी बोलें या भरें 🙂"
  );
}

/* -----------------------------
   Map Initialization
   Runs ONLY if #map exists
------------------------------ */
function initMap() {
  const mapContainer = document.getElementById("map");

  // Safety check: prevents errors on other pages
  if (!mapContainer) return;

  const map = L.map("map").setView([26.9124, 75.7873], 12); // Jaipur

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // 🟢 Job opportunities
  const jobs = [
    { lat: 26.92, lng: 75.78, text: "Construction Work" },
    { lat: 26.91, lng: 75.80, text: "Electrician Needed" },
    { lat: 26.90, lng: 75.76, text: "Farm Work" }
  ];

  jobs.forEach(job => {
    L.circleMarker([job.lat, job.lng], {
      radius: 8,
      color: "green",
      fillColor: "green",
      fillOpacity: 0.8
    }).addTo(map).bindPopup(job.text);
  });

  // 🔵 Workers available
  const workers = [
    { lat: 26.93, lng: 75.79, text: "Mason Available" },
    { lat: 26.89, lng: 75.77, text: "Painter Available" }
  ];

  workers.forEach(worker => {
    L.circleMarker([worker.lat, worker.lng], {
      radius: 8,
      color: "blue",
      fillColor: "blue",
      fillOpacity: 0.8
    }).addTo(map).bindPopup(worker.text);
  });
}

/* -----------------------------
   DOM Ready
------------------------------ */
document.addEventListener("DOMContentLoaded", initMap);




