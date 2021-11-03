var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 15);
var renderer = new THREE.WebGLRenderer({
  antialias:true,
    alpha:true
});

renderer.setClearColor( 0x0b3f6a);
renderer.setSize(window.innerWidth, window.innerHeight);
$('body').append(renderer.domElement);

$(window).resize(onWindowResize);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight);
}

// Floor
var floorG = new THREE.BoxGeometry(20,.10,20);
var floorM = new THREE.MeshLambertMaterial({color: 0x204555});
var floor = new THREE.Mesh(floorG,floorM);
scene.add(floor);

// Buildings
function createBuildings(){
    var cube = [];
    for(var i = 0; i < 200; ++i){
    var rHeight = (Math.random()*5) + .25;
    var geometry = new THREE.BoxGeometry( .25, rHeight, .25 );
    var material = new THREE.MeshLambertMaterial({color: 0xf44256});
    material.transparent = true;
    material.opacity = .9;
    cube[i] = new THREE.Mesh( geometry, material );
    floor.add( cube[i] );
    
    var x = (Math.random() * (10.00 - -10) + -10).toFixed(2);
    var y = 0;
    var z = (Math.random() * (10.00 - -10) + -10).toFixed(2);
    cube[i].position.set(x,y,z);
    }
    for(var i = 200; i < 400; ++i){
    var rHeight = (Math.random()*5) + .25;
    var geometry = new THREE.BoxGeometry( .25, rHeight, .25 );
    var material = new THREE.MeshLambertMaterial({color: 0xeda18a});
    material.transparent = true;
    material.opacity = 1;
    cube[i] = new THREE.Mesh( geometry, material );
    floor.add( cube[i] );
    
    var x = (Math.random() * (10.00 - -10) + -10).toFixed(2);
    var y = 0;
    var z = (Math.random() * (10.00 - -10) + -10).toFixed(2);
    cube[i].position.set(x,y,z);
    }
    for(var i = 400; i < 600; ++i){
    var rHeight = (Math.random()*5) + .25;
    var geometry = new THREE.BoxGeometry( .25, rHeight, .25 );
    var material = new THREE.MeshLambertMaterial({color: 0xfef456});
    material.transparent = true;
    material.opacity = .9;
    cube[i] = new THREE.Mesh( geometry, material );
    floor.add( cube[i] );
    
    var x = (Math.random() * (10.00 - -10) + -10).toFixed(2);
    var y = 0;
    var z = (Math.random() * (10.00 - -10) + -10).toFixed(2);
    cube[i].position.set(x,y,z);
    }
    for(var i = 600; i < 800; ++i){
    var rHeight = (Math.random()*5) + .25;
    var geometry = new THREE.BoxGeometry( .25, rHeight, .25 );
    var material = new THREE.MeshLambertMaterial({color: 0x88d0ee});
    material.transparent = true;
    material.opacity = .9;
    cube[i] = new THREE.Mesh( geometry, material );
    floor.add( cube[i] );
    
    var x = (Math.random() * (10.00 - -10) + -10).toFixed(2);
    var y = 0;
    var z = (Math.random() * (10.00 - -10) + -10).toFixed(2);
    cube[i].position.set(x,y,z);
    }
    for(var i = 800; i < 1000; ++i){
    var rHeight = (Math.random()*5) + .25;
    var geometry = new THREE.BoxGeometry( .25, rHeight, .25 );
    var material = new THREE.MeshLambertMaterial({color: 0x70c2a8});
    material.transparent = true;
    material.opacity = .9;
    cube[i] = new THREE.Mesh( geometry, material );
    floor.add( cube[i] );
    
    var x = (Math.random() * (10.00 - -10) + -10).toFixed(2);
    var y = 0;
    var z = (Math.random() * (10.00 - -10) + -10).toFixed(2);
    cube[i].position.set(x,y,z);
    }
}

createBuildings();

//createfishs
function getFish(colors) {
    var geometry, material
    // Head
    geometry = new THREE.DodecahedronGeometry(19.5, 2)
    material = new THREE.MeshLambertMaterial({ color: colors })
    var fishHead = new THREE.Mesh(geometry, material)
    fishHead.scale.z = .5
    fishHead.scale.y = .8
    fishHead.scale.x = .8
    fishHead.position.x = -2
    // Body
    var points = []
    var WIDTH = 21
    var CURVE_FASTNESS = 0.9
    var POS_FROM_HEAD = 10
    var STRETCH = 15
    for (var i = 0; i < 3; i++) {
      points.push(
        new THREE.Vector2(
          Math.sin(i * CURVE_FASTNESS) * WIDTH,
          i * STRETCH - POS_FROM_HEAD
        )
      )
    }

    WIDTH = 21
    CURVE_FASTNESS = .80
    POS_FROM_HEAD = 1
    STRETCH = 11
    for (var i = 3; i < 4; i++) {
      points.push(
        new THREE.Vector2(
          Math.sin(i * CURVE_FASTNESS) * WIDTH,
          i * STRETCH - POS_FROM_HEAD
        )
      )
    }

    WIDTH = 21
    CURVE_FASTNESS = .785
    POS_FROM_HEAD = 5
    STRETCH = 11
    for (var i = 4; i < 5; i++) {
      points.push(
        new THREE.Vector2(
          Math.sin(i * CURVE_FASTNESS) * WIDTH,
          i * STRETCH - POS_FROM_HEAD
        )
      )
    }

    geometry = new THREE.LatheGeometry(points, 50)
    material = new THREE.MeshLambertMaterial({ color: colors })
    var fishBody = new THREE.Mesh(geometry, material)
    fishBody.scale.x = .5
    fishBody.scale.z = .7
    fishBody.scale.y = .7

    fishBody.position.set(-20, 0, 0)
    fishBody.rotation.x = 11
    fishBody.rotation.z = 11

    // Tail (top)
    points = []
    WIDTH = 8
    CURVE_FASTNESS = 1.04
    POS_FROM_HEAD = 10
    STRETCH = 7.5

    for (var i = 0; i < 4; i++) {
      points.push(
        new THREE.Vector2(
          Math.sin(i * CURVE_FASTNESS) * WIDTH,
          i * STRETCH - POS_FROM_HEAD
        )
      )
    }

    geometry = new THREE.LatheGeometry(points)
    material = new THREE.MeshLambertMaterial({ color:  colors})
    var fishTail = new THREE.Mesh(geometry, material)

    fishTail.rotation.z = 0.4
    fishTail.rotation.y = 0
    fishTail.position.set(-28, 5, 0)
    fishTail.scale.z = .1
    fishTail.scale.x = .9
    fishTail.scale.y = .7

    // Tail (bottom)
    var fishTailBottom = new THREE.Mesh(geometry, material)

    fishTailBottom.rotation.z = Math.PI - 0.4
    fishTailBottom.position.set(-28, -6, 0)
    fishTailBottom.scale.z = .1
    fishTailBottom.scale.x = .7
    fishTailBottom.scale.y = 1

    var fish = new THREE.Group()
    // fish.add(fishHead)
    fish.add(fishBody)
    fish.add(fishTail)
    fish.add(fishTailBottom)

    fish.castShadow = true

    return fish
  }

//fish create
var colors =[0xffb200,0x6fc3bb,0xea6868,0xffffff,0xea6868]
var fishObject =[]
// Build Group
for(var i=0; i<5; i++){
    fishObject[i] = getFish(colors[i])
    fishObject[i].scale.set(0.02*(i+1),0.02*(i+1),0.02*(i+1))
    scene.add(fishObject[i])
}

fishObject[0].position.set(0, 8, 0)
fishObject[1].position.set(-20, 6, 0)
fishObject[2].position.set(-10, 4, 0)
fishObject[3].position.set(10, 5, 0)
fishObject[4].position.set(-50, 10, 0)

//camera
camera.position.set(0,3,10);

//lights
var light1 = new THREE.DirectionalLight(0xffffff,1);
scene.add(light1);
light1.position.set(1.5,2,1);

var light1 = new THREE.DirectionalLight(0xffffff,.5);
scene.add(light1);
light1.position.set(-1.5,2,1);


var distance = 0;
var floorRotation = 1;
var cameraPosition = 1;
var easingAmount = .001; 

function render() {
	requestAnimationFrame( render );
	renderer.render( scene, camera );
  
  //move camera and city to mouse movement slowly
   var xDistance = floorRotation - floor.rotation.y;
   var yDistance = cameraPosition - camera.position.z;
   distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);
    floor.rotation.y += 0.001;

    for(var i=0; i<5; i++){
        fishObject[i].position.x += 0.01*(i+1);
    }
}
render();

// Copyright (c) 2021 by Matthew Peach (https://codepen.io/mpeach/pen/EKKGaW)
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

