

// UPDATE THIS WITH A BETTER STARTING LATITUDE AND LONGITUDE AND ZOOM LEVEL
const map = L.map(‘map’).setView([-40.627,174.208], 11);
L.control.scale().addTo(map);


const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox://styles/gdmckenzie/clu1ojuq1022501oih8abb2ktaccess_token=pk.eyJ1IjoiZ2RtY2tlbnppZSIsImEiOiJjbHNtZjZmdXEwb2h4MmltdGJodXd1MmpyIn0.UrHBVKEcCwL1MBqo8k7bmA', {
	maxZoom: 19,
	tileSize: 512,
    zoomOffset: -1,
	attribution: '&copy; OpenStreetMap | MapBox - Projection: WGS84 Spherical Mercator'
}).addTo(map);

// END REPLACE BLOCK



// There are four markers below.  Each has a latitude and longitude.  Edit these to be your unique places of interest.
// Also note that each has its own 'pop-up.'  Edit the text in each of these to say why each location is important to you.
const marker1 = L.marker([-43.604,172.713]).addTo(map)
	.bindPopup(‘This location is important to me as I had a GIS related Internship there for the Lyttelton port company.');

const marker2 = L.marker([-43.640,172.484]).addTo(map)
	.bindPopup(‘This location is important to me as I grew up there.');

const marker3 = L.marker([-45.030,168.674]).addTo(map)
	.bindPopup(‘This location is important to me because I would go on many snowboarding trips here and therefore have many great memories associated with it.’);

const marker4 = L.marker([-37.100,174.946]).addTo(map)
	.bindPopup(‘This location is important to me because I have family who live there.').openPopup();



// These are the Territorial Authority Polygons that are being accessed from a 3rd party server.
// Edit the style of these polygons (see: https://leafletjs.com/reference.html#path)
var geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/gdmckenzie123/GISC403/main/TA.geojson", {
		color: 'grey',
		fillOpacity: 0.25,
	});
geojsonLayer.addTo(map);




// This creates a polygon on your map with provided coordinates.  Edit this polygon to create your own polygon somewhere in New Zealand
// Edit the style of this polygon (see: https://leafletjs.com/reference.html#path)
const polygon = L.polygon([
		[-42.852,171.429],
		[-43.280,170.661],
		[-43.594,171.074],
		[-43.697,171.390],
		[-43.043,171.748]
	],{
		color: 'red',
		fillColor: '#f03',
 	}).addTo(map).bindPopup(‘This area was chosen because The southern alps have always played A important role in my life, from snowboarding trips to hikes with my dad. I am also fairly interested in the natural environment of the southern alps.');




// END OF DOCUMENT