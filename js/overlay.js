const miscreated = document.querySelector('.miscreated-img')
const personal = document.querySelector('.personal-blog-img')

const overlay = document.getElementById('overlay');
const miscreatedModal = document.getElementById("miscreated-modal");
const personalModal = document.getElementById("personal-modal");
const span1 = miscreatedModal.getElementsByClassName("close")[0];
const span2 = personalModal.getElementsByClassName("close")[0];


function on() {
    console.log(miscreated);
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == personalModal) {
      personalModal.style.display = "none";
      this.off();
    }
    if (event.target == miscreatedModal) {
        miscreatedModal.style.display = "none";
        this.off()
      }
  }



  miscreated.onclick = function() {
    miscreatedModal.style.display = "block";
  }
  personal.onclick = function() {
    personalModal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span2.onclick = function() {
    personalModal.style.display = "none";
    off();
}
  
  span1.onclick = function() {
    miscreatedModal.style.display = "none";
    off();
  }
  

personal.addEventListener('click', on);
miscreated.addEventListener('click', on);

