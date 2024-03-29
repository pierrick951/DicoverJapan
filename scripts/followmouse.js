let cursor = document.querySelector(".cursor");
let distance = 11; //decalage

document.addEventListener("mousemove", function(e) {


  let x = e.pageX + distance;
  let y = e.pageY;

  cursor.style.left = x + "px"; 
  cursor.style.top = y + "px";  
});

