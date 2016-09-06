window.addEventListener( 'resize', onWindowResize, false );
window.addEventListener( 'mousemove', onDocumentMouseMove, false );
window.addEventListener( 'mousedown', onDocumentMouseDown, false );
window.addEventListener( 'mouseup', onDocumentMouseUp, false );

function onWindowResize() {

  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove(event){
  var x = -drag_start.x + event.clientX/300;     // Get the horizontal coordinate
  var y = drag_start.y - event.clientY/300;
  var camPos = norm(new THREE.Vector3(-camera.position.x, -camera.position.y, camera.position.z));
  if(moving_control_point){



    current_mesh.position.setY(control_points[current_mesh.name].position.y + y);

    if(Math.abs(camera.position.z) > Math.abs(camera.position.x)){
      //move x
        if(camera.position.z > 0.0){
          current_mesh.position.setX(control_points[current_mesh.name].position.x + x);
        }else{
          current_mesh.position.setX(control_points[current_mesh.name].position.x - x);
        }
    }else{
        //move z
        if(camera.position.x < 0.0){
          current_mesh.position.setZ(control_points[current_mesh.name].position.z + x);
        }
        else{
          current_mesh.position.setZ(control_points[current_mesh.name].position.z - x);
        }
    }



    control_points[current_mesh.name].currentPos.x = current_mesh.position.x;
    control_points[current_mesh.name].currentPos.y = current_mesh.position.y;
    control_points[current_mesh.name].currentPos.z = current_mesh.position.z;
  }
}

function onDocumentMouseDown(event){
  var x = event.clientX/300;     // Get the horizontal coordinate
  var y = event.clientY/300;
  drag_start.x = x;
  drag_start.y = y;
}

function onDocumentMouseUp(){
  controls.enableRotate = true;
  if(moving_control_point){
    control_points[current_mesh.name].position.x = current_mesh.position.x;
    control_points[current_mesh.name].position.y = current_mesh.position.y;
    control_points[current_mesh.name].position.z = current_mesh.position.z;



  }
  moving_control_point = false;

}
