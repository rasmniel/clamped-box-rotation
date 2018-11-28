var loader = new THREE.FontLoader();
var font = loader.parse({
    "glyphs": {
        "N": {
            "ha": 1389,
            "x_min": 0,
            "x_max": 1389,
            "o": "m 571 669 l 741 669 l 624 483 l 571 483 l 571 354 l 336 354 l 336 483 l 0 483 l 0 662 l 278 1036 l 571 1036 l 571 853 q 571 669 571 692 m 346 669 l 346 831 l 229 669 l 288 669 q 346 669 339 669 m 1389 1036 l 1002 354 l 728 354 l 1005 817 l 728 817 l 728 1036 l 1059 1036 q 1389 1036 1348 1036 "
        }
    },
    "cssFontWeight": "normal",
    "ascender": 1189,
    "underlinePosition": -100,
    "cssFontStyle": "normal",
    "boundingBox": {"yMin": -334, "xMin": -111, "yMax": 1189, "xMax": 1672},
    "resolution": 1000,
    "descender": -334,
    "familyName": "custom",
    "lineHeight": 1522,
    "underlineThickness": 50
});

var geometry = new THREE.TextGeometry('N', {
    font: font,
    size: 12,
    height: 6,

    // bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.1,
    bevelSegments: 1
});

// Solid text
var materials = [
    new THREE.MeshBasicMaterial({color: 0xFFFFFF}),
    new THREE.MeshBasicMaterial({color: 0x000000})
];
var text = new THREE.Mesh(geometry, materials);

// Wire frame
// var lineMaterial = new THREE.MeshBasicMaterial({color: 0x000000});
// var edges = new THREE.LineSegments(geometry, lineMaterial);
// text.add(edges);

// Approximately fit text to center of content.
text.position.x -= 8;
text.position.y -= 6;

var pivot = rotate(text);

// Center pivot point.
pivot.position.x -= 0;
pivot.position.y -= 2;

render(pivot);