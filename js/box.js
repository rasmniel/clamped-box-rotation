var geometry = new THREE.BoxGeometry(1, 1, 1);
var planes = 7;
for (var i = 0; i <= planes; i++)
    geometry.faces[i].color.setHex(0x555555);

var material = new THREE.MeshBasicMaterial({color: 0xEEEEEE, vertexColors: THREE.FaceColors});
var box = new THREE.Mesh(geometry, material);
var line = new THREE.MeshBasicMaterial({color: 0x000000});
var edges = new THREE.LineSegments(geometry, line);

box.add(edges);
scene.add(box);