function Move()
{
    var elem = document.getElementById("shin");  
    var kit = document.getElementById("kite"); 
    var pos1 = 0;
    var id1 = setInterval(frame1,9) /*function for shinchan*/
    function frame1() 
    {
       if(pos1==450)
        {
          pos1 = 0;
        }
        else 
        {
          pos1++; 
          elem.style.right= pos1 + 'px';
        }
    }
    var pos2=0;
    var id2 = setInterval(frame2,120) /*function for kite*/
    function frame2()
    {
       if (pos2 == 34)
       {
         pos2 = 0;
       }
       else 
       {
         pos2++; 
         kit.style.top=pos2+"vw";
         kit.style.left=pos2+10+"vw";
       }
    }
}
