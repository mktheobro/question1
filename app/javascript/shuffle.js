function count (){
  const idQue  = document.getElementById("id_que");
  idQue.addEventListener("click", (e) => {
    e.preventDefault();
    // id順のリストを見えなくし、ランダム順のリストを表示する
    const idListDisplay = document.getElementById("id_result");
    const randListDisplay = document.getElementById("rand-result");

    if (randListDisplay.getAttribute("style") == "display:block;") {
      idListDisplay.removeAttribute("style", "display:none;")
      randListDisplay.removeAttribute("style", "display:block;")
    } else {
      idListDisplay.setAttribute("style", "display:none;")
      randListDisplay.setAttribute("style", "display:block;")
    }
    
  });
}

window.addEventListener('load', count);
