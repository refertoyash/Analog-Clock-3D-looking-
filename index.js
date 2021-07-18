// accessing neccessary elements
 setInterval(() => {
     var d = new Date();
     var h = d.getHours();
     var m = d.getMinutes();
     var s = d.getSeconds();
     var hrotation= 30 *h  + m / 2;
     var mrotation = 6*m ;
     var srotation = 6*s;
      seconds.style.transform = `rotate(${srotation}deg)`;
      minutes.style.transform = `rotate(${mrotation}deg)`;
      hours.style.transform = `rotate(${hrotation}deg)`;
 
 },  1000);
 

//  var img = document.createElement("img"); 
 
// img.src = "bg.jpg"; 
// var src = document.getElementById("x"); 
 
src.appendChild(img); 

