/**
 * Test function from the THREE.js documentation
 */
function main() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, document.getElementById('scene').clientWidth / document.getElementById('scene').clientHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( document.getElementById('scene').clientWidth, document.getElementById('scene').clientHeight );
    document.getElementById('scene').appendChild( renderer.domElement );

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    const animate = function () {
        requestAnimationFrame( animate );

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render( scene, camera );
    };

    animate();
}