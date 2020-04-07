const d3 = window.d3;
const s = 80;
const p = s / 50;
const marginTop = 20;
const color = "#707070";
const icon = "M 4.9985965,0 C 2.2421483,0 0,2.2424602 0,4.9995322 c 0,4.1031719 4.5435549,7.2186008 4.7369242,7.3489688 0.079219,0.05333 0.1706016,0.08015 0.2619842,0.08015 0.089511,0 0.1790225,-0.02557 0.256994,-0.07704 C 5.4495836,12.224059 10,9.1784923 10,4.9998441 9.9996881,2.2430839 7.7562923,0 4.9985965,0 Z m 0.0025,11.385086 C 4.0676169,10.681159 0.93534604,8.0890746 0.93534604,4.9995322 c 0,-2.2412126 1.82266166,-4.06387428 4.06262666,-4.06387428 2.2418364,0 4.0657456,1.82328538 4.0657456,4.06387428 3.119e-4,3.1397561 -3.1282163,5.6928548 -4.0626267,6.3855538 z m -0.00125,-9.9859655 c -1.985778,0 -3.6013474,1.6158812 -3.6013474,3.6013473 0,1.9854661 1.6155694,3.6010355 3.6013474,3.6010355 1.9851542,0 3.6007235,-1.6158812 3.6007235,-3.6013474 0,-1.985778 -1.6155693,-3.6010354 -3.6007235,-3.6010354 z m 0,6.266413 c -1.4699186,0 -2.6656895,-1.1957708 -2.6656895,-2.6660013 0,-1.4696067 1.1957709,-2.6653776 2.6656895,-2.6653776 1.4699186,0 2.6650656,1.1957709 2.6650656,2.6653776 0,1.4702305 -1.1957708,2.6660013 -2.6650656,2.6660013 z M 6.6749836,4.5317032 H 5.467673 V 3.3256401 c 0,-0.2582415 -0.2095874,-0.4678289 -0.4678289,-0.4678289 -0.2588654,0 -0.467829,0.2095874 -0.467829,0.4678289 V 4.5317032 H 3.3247045 c -0.2585535,0 -0.467829,0.2095874 -0.467829,0.467829 0,0.2579297 0.2092755,0.4678289 0.467829,0.4678289 h 1.2073106 v 1.2085582 c 0,0.2582416 0.2089636,0.4678289 0.467829,0.4678289 0.2582415,0 0.4678289,-0.2095873 0.4678289,-0.4678289 V 5.4673611 h 1.2073106 c 0.2582416,0 0.467829,-0.2098992 0.467829,-0.4678289 0,-0.2582416 -0.2095874,-0.467829 -0.467829,-0.467829 z";
const iconFillInner = "M 4.1759819,7.4822693 C 3.2433347,7.1523886 2.6218873,6.4363071 2.4200056,5.4588927 2.0697431,3.7630891 3.7016529,2.0922225 5.3997494,2.4080166 7.6083586,2.8187505 8.3843547,5.4941364 6.7198482,6.9592937 6.2334862,7.3874067 5.774907,7.5707755 5.1244021,7.5972536 4.682623,7.6152358 4.4837368,7.5911233 4.1759819,7.4822693 Z M 5.3826895,6.9831389 C 5.4996629,6.8344313 5.518993,6.7178491 5.518993,6.1610747 V 5.5122923 h 0.6487824 c 0.5567743,0 0.6733566,-0.01933 0.8220642,-0.1363035 C 7.2069655,5.2051975 7.2274174,4.8531717 7.0315912,4.6573455 6.9167632,4.5425175 6.8123741,4.5258152 6.2095269,4.5258152 H 5.518993 L 5.5180235,3.8846051 C 5.5174454,3.5022879 5.4836897,3.1774532 5.4344193,3.0800743 5.3210157,2.8559414 5.0592067,2.7724875 4.8027379,2.8787204 4.5471657,2.9845818 4.4676156,3.2463827 4.4671175,3.9832528 l -3.668e-4,0.5425624 h -0.687972 c -0.6230404,0 -0.7006279,0.013584 -0.8220643,0.1439311 -0.1826649,0.1960677 -0.1711662,0.4826249 0.027331,0.6811225 0.149679,0.1496789 0.2088623,0.1614235 0.8134437,0.1614235 h 0.6520202 l 0.031191,0.7013072 c 0.027991,0.6293687 0.046488,0.7136941 0.1803191,0.8220642 0.2241993,0.1815455 0.5565794,0.1573542 0.7216701,-0.052525 z";
const iconFillOuter = "M 4.5166227,10.939929 C 3.1611738,9.8218918 1.9595045,8.318312 1.4334776,7.0821667 1.0283651,6.1301664 0.88148088,5.0071703 1.0543786,4.1837853 1.2342058,3.3274005 1.8361689,2.3729611 2.5257108,1.8509222 3.3539349,1.2238897 3.9713284,1.0102546 4.9599893,1.0085948 c 0.8351883,-0.0014 1.1772718,0.077926 1.8743065,0.4346446 0.642576,0.3288486 1.100692,0.7365709 1.5023309,1.3370713 0.518251,0.7748495 0.6356629,1.2030819 0.6318439,2.3045082 -0.00286,0.8259705 -0.0215,0.97338 -0.1811126,1.4325477 -0.4611432,1.3265959 -1.2952234,2.5608813 -2.5236089,3.7344734 -0.5388289,0.514794 -1.181798,1.047785 -1.2639868,1.047785 -0.025885,0 -0.2432978,-0.161864 -0.4831396,-0.359696 z M 5.9437336,8.502555 C 6.5377771,8.347826 7.0876378,8.0245983 7.5594682,7.5527676 8.331499,6.7807367 8.6471927,5.9450529 8.5911529,4.8217584 8.553311,4.0632307 8.399364,3.5589214 8.040435,3.0176818 6.7560634,1.0809379 4.0943742,0.80935235 2.4536302,2.447632 1.6636185,3.2364571 1.3317098,4.1053907 1.3960564,5.2163492 c 0.090882,1.5690989 1.1407345,2.8857467 2.6177255,3.2829596 0.4727511,0.1271385 1.447998,0.1287793 1.9299517,0.00325 z";

const poi = [
    {
        "name": "Boston",
        "icon": "",
        "coord": [35, 13],
        "resolution": 8
    },
    {
        "name": "Philadelphia",
        "icon": "",
        "coord": [33, 13],
        "resolution": 8
    },
    {
        "name": "Los Angeles",
        "icon": "",
        "coord": [22, 15],
        "resolution": 8
    },
    {
        "name": "Bergamo",
        "icon": "",
        "coord": [58, 13],
        "resolution": 8
    },
    {
        "name": "Bordeaux",
        "icon": "",
        "coord": [55, 12],
        "resolution": 8
    },
    {
        "name": "Paris",
        "icon": "",
        "coord": [56, 11],
        "resolution": 8
    },
    {
        "name": "Birmingham",
        "icon": "",
        "coord": [30, 15],
        "resolution": 8
    },
    {
        "name": "Ann Arbor",
        "icon": "",
        "coord": [32, 12],
        "resolution": 8
    },
    {
        "name": "Bloomington",
        "icon": "",
        "coord": [31, 13],
        "resolution": 8
    },
    {
        "name": "Gottingen",
        "icon": "",
        "coord": [58, 10],
        "resolution": 8
    },
    {
        "name": "Mannheim",
        "icon": "",
        "coord": [57, 11],
        "resolution": 8
    },
    {
        "name": "San Antonio",
        "icon": "",
        "coord": [27, 15],
        "resolution": 8
    }
];

function inCircle(x0, y0, size) {
    const r = size/2 - 2;
    const x1 = size/2;
    const y1 = size/2;
    return Math.sqrt(Math.pow((x1-x0), 2) + Math.pow((y1-y0), 2)) < r;
}

function offsetWorldMap(poi, offset) {
    const svg = d3.select("#map");
    const mapImage = svg.select("#map-image");
    const verticalLines = svg.selectAll(".vertical-line");

    mapImage
        .attr("x", s/10 - offset*p);

    for(let lineX = 0; lineX < s; lineX += p) {
        verticalLines
            .enter()
          .attr("x1", lineX + (offset % p))
          .attr("x2", lineX + (offset % p));
    }

    const poiIcon = svg.select("#poi-icon");
    
    function convertPoi(d) {
      return {
        ...d,
        coord: [ (d.coord[0]-offset+0.5)*p, (d.coord[1]+0.5)*p + marginTop ]
      };
    }
    
    const convertedPoi = poi.map(convertPoi);
    const filteredPoi = convertedPoi.filter(d => inCircle(d.coord[0], d.coord[1], s));
    const points = filteredPoi.map(d => d.coord).filter(([x, y]) => inCircle(x, y, s));
    const delaunay = d3.Delaunay.from(points);
    
    function hidePoiIcon() {
      poiIcon
        .attr("opacity", 0);
    }
    
    /*svg.on("mousemove", () => {
      const [mouseX, mouseY] = d3.mouse(svg.node());
      
      if(!inCircle(mouseX, mouseY, s)) {
        hidePoiIcon();
        return;
      }
      const i = delaunay.find(mouseX, mouseY);
      if(i === undefined || i === null || i < 0) {
        hidePoiIcon();
        return;
      }
      const place = filteredPoi[i];
      if(!place) {
        hidePoiIcon();
        return;
      }
      
      poiIcon
        .attr("transform", `translate(${place.coord[0]-10},${place.coord[1]-26}) scale(2)`);
      poiIcon
        .attr("opacity", 1);
    });*/
}

function drawWorldMap() {
    
    const svg = d3.select("#map")
        .append("svg")
            .attr("height", s + marginTop)
            .attr("width", s)
            .attr("viewBox", [0, 0, s, s + marginTop]);
            
    const clipPath = svg.append("defs").append("clipPath")
      .attr("id", "globe");
     
    clipPath.append("circle")
        .attr("cx", s/2)
        .attr("cy", s/2 + marginTop)
        .attr("r", s/2);
    
    svg.append("image")
        .attr("id", "map-image")
        .attr("xlink:href", "/assets/worldmap-equirectangular.png")
        .attr("width", s*2)
        .attr("height", s)
        .attr("y", marginTop)
        .attr("x", s/10)
        .attr("clip-path", "url(#globe)");
        
    
    for(let lineX = 0; lineX < s; lineX += p) {
      svg.append("line")
        .attr("class", "vertical-line")
        .attr("x1", lineX)
        .attr("x2", lineX)
        .attr("y1", marginTop)
        .attr("y2", s + marginTop)
        .attr("stroke", "white")
        .attr("stroke-width", p/4)
        .attr("clip-path", "url(#globe)");
    }
    
    for(let lineY = 0; lineY < s; lineY += p) {
      svg.append("line")
        .attr("x1", marginTop)
        .attr("x2", s + marginTop)
        .attr("y1", lineY)
        .attr("y2", lineY)
        .attr("stroke", "white")
        .attr("stroke-width", p/4)
        .attr("clip-path", "url(#globe)");
    }
   
    svg.append("circle")
      .attr("cx", s/2)
      .attr("cy", s/2 + marginTop)
      .attr("r", s/2 - 1)
      .attr("stroke", color)
      .attr("stroke-width", p/4)
      .attr("fill", "transparent");
    
    const iconG = svg.append("g")
        .attr("id", "poi-icon")
        .attr("opacity", 0);
    iconG.append("path")
        .attr("d", icon)
        .attr("x", 0)
        .attr("y", 0)
        .attr("opacity", 1)
        .attr("stroke-width", 0.311886)
        .attr("stroke", "black");
    iconG.append("path")
        .attr("d", iconFillInner)
        .attr("x", 0)
        .attr("y", 0)
        .attr("opacity", 0.8)
        .attr("stroke-width", 0)
        .attr("fill", "white");
    iconG.append("path")
        .attr("d", iconFillOuter)
        .attr("x", 0)
        .attr("y", 0)
        .attr("opacity", 0.8)
        .attr("stroke-width", 0)
        .attr("fill", "white");
    
}

window.onload = () => {
    drawWorldMap();
    let offset = 20;
    offsetWorldMap(poi, offset);
    setInterval(() => {
        offsetWorldMap(poi, offset);
        offset = (offset + 1) % 60;
    }, 1000);
}