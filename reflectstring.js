
 var input = document.getElementById("input-1");
 input.addEventListener("keydown",function(e){
  if(e.keyCode ===13)
    document.getElementById("reflect").innerHTML = input.value;
 });