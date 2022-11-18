const apiKey = 'pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA';

const mymap = L.map('map').setView([51.519541882522645, -0.12668012495137598], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(mymap);


const marker = L.marker([51.519541882522645, -0.12668012495137598]).addTo(mymap);

let template = `

<h3>British Museum</h3>
<div style="text-align:center">
    <img width="150" height="150" src="British-museum.jpg"/>
</div>
`
marker.bindPopup(template);


const circle = L.circle([51.519541882522645, -0.12668012495137598], {
    radius:80, 
    color: 'green', 
    fillColor: 'red',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('around the subject')