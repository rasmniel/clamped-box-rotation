var loader = new THREE.SVGLoader();

var url = 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Smiley_head_happy.svg';

loader.load(url, function (paths) {
    var group = new THREE.Group();
    for (var i = 0; i < paths.length; i++) {
        var path = paths[i];

        var material = new THREE.MeshBasicMaterial({
            color: path.color || 0x000000,
            side: THREE.DoubleSide,
            depthWrite: false
        });

        var shapes = path.toShapes(true);
        for (var j = 0; j < shapes.length; j++) {
            var shape = shapes[j];
            var geometry = new THREE.ShapeBufferGeometry(shape);
            var mesh = new THREE.Mesh(geometry, material);
            group.add(mesh);
        }
    }

    // Flip SVG (Radians to Degrees)
    group.rotation.z += 180 * Math.PI / 180;
    group.rotation.y += 180 * Math.PI / 180;

    var pivot = rotate(group);
    render(pivot);
});