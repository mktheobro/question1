// function count (){
//   const answer_display  = document.getElementById("id_answer");

//   answer_display.addEventListener('mouseover', function(){
//     this.setAttribute("style", "background-color:#FFBEDA;")
    
//   });
// }

// window.addEventListener('load', count);

function count (){
  const answer_display  = document.querySelectorAll(".detail-answer");

  answer_display.forEach(function(answer){
    answer.addEventListener('click', function(){
    this.setAttribute("style", "color:red;")
    
  });
});
}

window.addEventListener('load', count);