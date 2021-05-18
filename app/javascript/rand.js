function count (){
  const shuffleQue  = document.getElementById("shuffle_que");
  shuffleQue.addEventListener("click", (e) => {
    e.preventDefault();
    location.reload();
  });
}

window.addEventListener('load', count);
