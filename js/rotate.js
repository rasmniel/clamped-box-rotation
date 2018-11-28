function rotate(object) {
    const
        THRESHOLD = 0.25,
        DAMPENER = 0.001;

    function dampen(value) {
        return value * DAMPENER;
    }

    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    var pivot = new THREE.Object3D();
    pivot.add(object);

    window.addEventListener('mousemove', function (event) {
        var x = dampen(event.movementY);
        var y = dampen(event.movementX);
        pivot.rotation.x = clamp(pivot.rotation.x + x, -THRESHOLD, THRESHOLD);
        pivot.rotation.y = clamp(pivot.rotation.y + y, -THRESHOLD, THRESHOLD);
        renderer.render(scene, camera);
    });

    return pivot;
}
