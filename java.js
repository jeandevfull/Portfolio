function scrollTo(element){
    document.querySelector(element).scrollIntoView();
}


document.querySelector('#goToDown').addEventListener('click', function(event){
  event.preventDefault();
   
  scrollTo(".content-container-card") 
})

function scrollTo(element){
  document.querySelector(element).scrollIntoView();
}


document.querySelector('#gotodown').addEventListener('click', function(event){
event.preventDefault();
 
scrollTo('.form-container') 
})