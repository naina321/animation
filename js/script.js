function Move()
{
  var elem = document.getElementById("shin");  
  var kit = document.getElementById("kite"); 
  var pos = 0;
  var id = setInterval(frame, 7);
  function frame() {
    if (pos ==950) {
     pos = 0;
      /*clearInterval(id);*/
    } else {
      pos++; 
      elem.style.right = pos + 'px'; 
      kit.style.top=pos+"px";
      kit.style.left=pos+"px";

    }
  }
}
