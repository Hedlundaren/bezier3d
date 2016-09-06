function norm(vec){
  var div =  Math.sqrt( Math.pow(vec.x, 2.0) + Math.pow(vec.y, 2.0) + Math.pow(vec.z, 2.0));
   var res = new THREE.Vector3(vec.x/div, vec.y/div, vec.z/div);
  return res;
}
