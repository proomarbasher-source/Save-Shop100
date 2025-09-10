// بيانات السوبرماركت
const supermarkets = [
  {name: "التميمي", lat: 24.713552, lon: 46.675297},
  {name: "LuLu Hypermarket - Al Khobar", lat: 26.26762, lon: 50.21358},
  {name: "Othaim", lat: 26.29862, lon: 50.19123},
  {name: "Hyper Panda", lat: 26.26700, lon: 50.19900},
  {name: "كارفور", lat: 26.40000, lon: 50.05000},
  {name: "Danube", lat: 26.40327, lon: 50.05652}
];

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function findNearest() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const userLat = position.coords.latitude;
      const userLon = position.coords.longitude;

      let nearest = null;
      let minDistance = Infinity;

      supermarkets.forEach(market => {
        const distance = getDistance(userLat, userLon, market.lat, market.lon);
        if (distance < minDistance) {
          minDistance = distance;
          nearest = market;
        }
      });

      document.getElementById("result").innerText =
        `أقرب سوبرماركت ليك هو: ${nearest.name} (يبعد تقريباً ${minDistance.toFixed(2)} كم)`;

    }, () => {
      alert("مش قادر أحدد موقعك!");
    });
  } else {
    alert("المتصفح بتاعك مش بيدعم تحديد الموقع!");
  }
}




const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
    acc.addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});

