const
    THRESHOLD = 0.25,
    DAMPENER = 0.001;

function dampen(value) {
    return value * DAMPENER;
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

window.addEventListener('mousemove', function (event) {
    var x = dampen(event.movementY);
    var y = dampen(event.movementX);
    box.rotation.x = clamp(box.rotation.x + x, -THRESHOLD, THRESHOLD);
    box.rotation.y = clamp(box.rotation.y + y, -THRESHOLD, THRESHOLD);
    renderer.render(scene, camera);
});