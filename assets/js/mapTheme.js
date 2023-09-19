/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function LeftopenNav() {
  document.getElementById("leftSidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function LeftcloseNav() {
  document.getElementById("leftSidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
  document.body.style.backgroundColor = "white";
}

function fnShowOutageLayer() {
  var checkBox = document.getElementById("ShowOutageLayer");
  var KolkataPolygon = document.getElementById("map");
  if (checkBox.checked == true) {
    KolkataPolygon.style.display = "block";
  } else {
    KolkataPolygon.style.display = "none";
  }
}

// Initialize and add the map
function initMap() {
  var map;
  var bounds = new google.maps.LatLngBounds();
  var mapOptions = {
    mapTypeId: "roadmap",
    styles: [
      {
        featureType: "all",
        elementType: "labels",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
    ],
  };
  var southKolkata = [
    { lat: 22.6531, lng: 88.377664 },
    { lat: 22.648777, lng: 88.390534 },
    { lat: 22.628814, lng: 88.39208 },
    { lat: 22.631349, lng: 88.379025 },
  ];
  var southKolkata = new google.maps.Polygon({
    paths: southKolkata,
    strokeColor: "green",
    strokeOpacity: 0.9,
    strokeWeight: 3,
    fillColor: "#00ff00",
    fillOpacity: 0.3,
  });
  var northkolkata = [
    { lat: 22.631824, lng: 88.364596 },

    { lat: 22.648143, lng: 88.358927 },
    { lat: 22.652104, lng: 88.36305 },
    { lat: 22.6531, lng: 88.377664 },
    { lat: 22.648777, lng: 88.390534 },
  ];
  var northkolkata = new google.maps.Polygon({
    paths: northkolkata,
    strokeColor: "yellow",
    strokeOpacity: 0.9,
    strokeWeight: 3,
    fillColor: "yellow",
    fillOpacity: 0.3,
  });

  var kolkataBoundary = [
    { lng: 88.2707, lat: 22.5518 },
    { lng: 88.2836, lat: 22.5481 },
    { lng: 88.3082, lat: 22.5446 },
    { lng: 88.3207, lat: 22.5469 },
    { lng: 88.3289, lat: 22.5521 },
    { lng: 88.3435, lat: 22.5735 },
    { lng: 88.3481, lat: 22.5889 },
    { lng: 88.3523, lat: 22.5967 },
    { lng: 88.3598, lat: 22.606 },
    { lng: 88.3645, lat: 22.6049 },
    { lng: 88.3655, lat: 22.6124 },
    { lng: 88.3641, lat: 22.6207 },
    { lng: 88.3597, lat: 22.6297 },
    { lng: 88.3806, lat: 22.6278 },
    { lng: 88.3906, lat: 22.6247 },
    { lng: 88.3931, lat: 22.5977 },
    { lng: 88.3919, lat: 22.5908 },
    { lng: 88.4073, lat: 22.5565 },
    { lng: 88.4057, lat: 22.5539 },
    { lng: 88.399, lat: 22.5548 },
    { lng: 88.398, lat: 22.5538 },
    { lng: 88.3985, lat: 22.5491 },
    { lng: 88.3917, lat: 22.5405 },
    { lng: 88.3873, lat: 22.539 },
    { lng: 88.3871, lat: 22.5339 },
    { lng: 88.3798, lat: 22.5236 },
    { lng: 88.376, lat: 22.5214 },
    { lng: 88.3716, lat: 22.5229 },
    { lng: 88.3697, lat: 22.5075 },
    { lng: 88.3644, lat: 22.4952 },
    { lng: 88.3467, lat: 22.495 },
    { lng: 88.3362, lat: 22.4978 },
    { lng: 88.3243, lat: 22.5055 },
    { lng: 88.3122, lat: 22.5059 },
    { lng: 88.2881, lat: 22.5141 },
    { lng: 88.2864, lat: 22.5326 },
    { lng: 88.2816, lat: 22.5431 },
    { lng: 88.2747, lat: 22.5436 },
    { lng: 88.2719, lat: 22.546 },
    { lng: 88.2707, lat: 22.5518 },
  ];

  // Construct the polygon.
  var KolkataPolygon = new google.maps.Polygon({
    paths: kolkataBoundary,
    strokeColor: "#800080",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#00ff00",
    fillOpacity: 0,
  });

  // Display a map on the web page
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  map.setTilt(50);
  // Draw the polygon on the desired map instance
  KolkataPolygon.setMap(map);
  southKolkata.setMap(map);
  northkolkata.setMap(map);
  // Multiple markers location, latitude, and longitude
  var markers = [
    ["Kolkata", 22.572645, 88.363892],
    ["Central Avenue", 22.574754, 88.359286],
    ["Bow Bazar", 22.570455, 88.36154],
    ["Chadni Chowk", 22.566243, 88.35403],
  ];
  var markers1 = [
    ["Kolkata", 22.579954, 88.352655],
    ["Central Avenue", 22.584629, 88.352355],
    ["Bow Bazar", 22.585105, 88.362622],
  ];
  var markers2 = [
    ["Kolkata", 22.589622, 88.35107],
    ["Central Avenue", 22.592237, 88.356395],
    ["Bow Bazar", 22.588513, 88.361806],
    ["Chadni Chowk", 22.594258, 88.373186],
  ];
  var markers3 = [
    ["Kolkata", 22.551683, 88.370263],
    ["Ballygunge Park", 22.532248, 88.366346],
    ["Bow Bazar", 22.576348, 88.347198],
  ];

  // Info window content
  var infoWindowContent = [
    [
      '<div class="info_content">' +
        '<img class="img-fluid" src="./assets/strom.jpg"/>' +
        "<h2>Total active outages : 19</h2>" +
        "<h3>Customers out of service : 140</h3>" +
        "<p>Estimated restoration time : 19 Jul 2022 11:41 AM</p>" +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img class="img-fluid" src="./assets/strom.jpg"/>' +
        "<h2>Total active outages : 19</h2>" +
        "<h3>Customers out of service : 140</h3>" +
        "<p>Estimated restoration time : 19 Jul 2022 11:41 AM</p>" +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img class="img-fluid" src="./assets/strom.jpg"/>' +
        "<h2>Total active outages : 19</h2>" +
        "<h3>Customers out of service : 140</h3>" +
        "<p>Estimated restoration time : 19 Jul 2022 11:41 AM</p>" +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img class="img-fluid" src="./assets/strom.jpg"/>' +
        "<h2>Total active outages : 19</h2>" +
        "<h3>Customers out of service : 140</h3>" +
        "<p>Estimated restoration time : 19 Jul 2022 11:41 AM</p>" +
        "</div>",
    ],
  ];

  //Adding icon
  var icon = {
    url: "./assets/img/cust_out.png",
    scaledSize: new google.maps.Size(50, 50),
  };
  var icon1 = {
    url: "./assets/img/cust_maintanence.png",
    scaledSize: new google.maps.Size(50, 50),
  };
  var icon2 = {
    url: "./assets/img/crew_work.png",
    scaledSize: new google.maps.Size(50, 50),
  };
  var icon3 = {
    url: "./assets/img/cust_call.png",
    scaledSize: new google.maps.Size(50, 50),
  };
  // Add multiple markers to map
  var infoWindow = new google.maps.InfoWindow(),
    marker,
    i;
  // var infoWindow1 = new google.maps.InfoWindow(), marker1, i;
  // var infoWindow2 = new google.maps.InfoWindow(), marker2, i;
  // var infoWindow3 = new google.maps.InfoWindow(), marker3, i;

  // Place each marker on the map
  for (i = 0; i < markers.length; i++) {
    var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
    bounds.extend(position);
    marker = new google.maps.Marker({
      position: position,
      icon: icon,
      map: map,
      title: markers[i][0],
    });

    // Add info window to marker
    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          infoWindow.setContent(infoWindowContent[i][0]);
          infoWindow.open(map, marker);
        };
      })(marker, i)
    );

    // Center the map to fit all markers on the screen
    map.fitBounds(bounds);
  }

  // Place each marker on the map
  for (i = 0; i < markers1.length; i++) {
    var position1 = new google.maps.LatLng(markers1[i][1], markers1[i][2]);
    bounds.extend(position1);
    marker = new google.maps.Marker({
      position: position1,
      icon: icon1,
      map: map,
      title: markers1[i][0],
    });

    // Add info window to marker
    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          infoWindow.setContent(infoWindowContent[i][0]);
          infoWindow.open(map, marker);
        };
      })(marker, i)
    );

    // Center the map to fit all markers on the screen
    map.fitBounds(bounds);
  }

  // Place each marker on the map
  for (i = 0; i < markers2.length; i++) {
    var position2 = new google.maps.LatLng(markers2[i][1], markers2[i][2]);
    bounds.extend(position2);
    marker = new google.maps.Marker({
      position: position2,
      icon: icon2,
      map: map,
      title: markers2[i][0],
    });

    // Add info window to marker
    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          infoWindow.setContent(infoWindowContent[i][0]);
          infoWindow.open(map, marker);
        };
      })(marker, i)
    );

    // Center the map to fit all markers on the screen
    map.fitBounds(bounds);
  }

  // Place each marker on the map
  for (i = 0; i < markers3.length; i++) {
    var position3 = new google.maps.LatLng(markers3[i][1], markers3[i][2]);
    bounds.extend(position3);
    marker = new google.maps.Marker({
      position: position3,
      icon: icon3,
      map: map,
      title: markers3[i][0],
    });

    // Add info window to marker
    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          infoWindow.setContent(infoWindowContent[i][0]);
          infoWindow.open(map, marker);
        };
      })(marker, i)
    );

    // Center the map to fit all markers on the screen
    map.fitBounds(bounds);
  }

  // Set zoom level
  var boundsListener = google.maps.event.addListener(
    map,
    "bounds_changed",
    function (event) {
      this.setZoom(12);
      google.maps.event.removeListener(boundsListener);
    }
  );
}

window.initMap = initMap;
const triggerTabList = document.querySelectorAll("#myTab button");
triggerTabList.forEach((triggerEl) => {
  const tabTrigger = new bootstrap.Tab(triggerEl);

  triggerEl.addEventListener("click", (event) => {
    event.preventDefault();
    tabTrigger.show();
  });
});
