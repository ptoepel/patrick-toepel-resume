const workHistory = document.querySelector("#workhistorytimeline");
const workHistoryTimeline = document.querySelector('.work-history-timeline');
const theList = document.querySelectorAll('.work-history-timeline ul li');

const theUL = document.querySelector('.work-history-timeline ul');
const expeirences = document.querySelectorAll('.experience ul li');

function matchExperience(stringIDName){
  for(var i = 0; expeirences.length > i; i++){
    if(stringIDName == expeirences[i].className){
      expeirences[i].style="visibility:visible";

    } 
  }
  return expeirences;
}


function hideExperience(stringIDName){
  for(var i = 0; expeirences.length > i; i++){

      if(stringIDName == expeirences[i].className){
        expeirences[i].style="visibility:hidden";
      } 
    
  }
  return expeirences;
}





for (var i = 0; i < theList.length; i++) {
  theList[i].addEventListener("mouseenter", function( event ) {   
    // highlight the mouseover target
  
      matchExperience(event.target.id);
      
    // reset the color after a short delay
    setTimeout(function() {
  
    }, 500);
  }, false);

  theList[i].addEventListener("mouseleave", function( event ) {   
    // highlight the mouseover target
    hideExperience(event.target.id)
    // reset the color after a short delay
    setTimeout(function() {
  
    }, 500);
  }, false);
  

}



// this handler will be executed every time the cursor is moved over a different list item

/*
theList.forEach.addEventListener("mouseenter", function( event ) {   
  // highlight the mouseover target
  showExperience(event.target.id)
  // reset the color after a short delay
  setTimeout(function() {

  }, 500);
}, false);

theUL.addEventListener("mouseleave", function( event ) {   
  // highlight the mouseover target
  hideExperience(event.target.id)
  // reset the color after a short delay
  setTimeout(function() {

  }, 500);
}, false);

/*

foreach(){
    if(li.className == )
    }
}
*/



