function scrollTo(element){
    document.querySelector(element).scrollIntoView({ behavior:'smooth' });
}


document.querySelector('#goToDown').addEventListener('click', function(event){
  event.preventDefault();
   
  scrollTo(".content-container-card") 
})