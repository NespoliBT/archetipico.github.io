function draw() {
    const bgColor = document.querySelector(":root").style.getPropertyValue("--content-link");
    const color = document.querySelector(":root").style.getPropertyValue("--content-text-color");
    const height = document.getElementById("scene").clientHeight;
    const width = document.getElementById("scene").clientWidth;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 25, width / height, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer( { alpha: true } );
    renderer.setSize( width, height );
    renderer.setClearColor( bgColor.substring(0, 7), 0.05 );
    document.getElementById("scene").appendChild( renderer.domElement );

    const geometry = new THREE.BoxGeometry();
    const loader = new THREE.TextureLoader();
    const material = new THREE.MeshBasicMaterial({
        map: loader.load("https://avatars.githubusercontent.com/u/43927507?s=460&u=5c72f6e304ac8821cb2acb82a2fde3a2d962949a&v=4"),
    });
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    const animate = function () {
        requestAnimationFrame( animate );

        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;

        renderer.render( scene, camera );
    };

    animate();
}