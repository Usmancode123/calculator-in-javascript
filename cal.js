const btn = document.querySelectorAll(".button");
const input = document.querySelector("input");
let string = "";



btn.forEach((button) => {
  // console.log('buttton');
  button.addEventListener("click", (e) => {
    // console.log(e.target.innerHTML);
    if (e.target.innerHTML == "AC") {
      // for All clear condition
      string = "";
      input.value = string;

    } 
    
    
      else if (e.target.innerHTML == "=") {
      // for equal  condition
      string = eval(string);
      input.value = string;
    } 
    else{
      // for showing value in input
      string = string + e.target.innerHTML;
      input.value = string;
    }

   
  });
});


