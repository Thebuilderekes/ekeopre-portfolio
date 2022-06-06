// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



//Back to top button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 4500 || document.documentElement.scrollTop > 4500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}





//   //toggle theme 

//   const checkbox = document.getElementById('checkbox');
//   const about = document.getElementById('about-section');
//   const project = document.getElementById('project-section');
//   const heroHeading =  document.getElementById("hero-section-heading");
//   const jobDescription =  document.getElementById("hero-p");
//   const aboutHeading = document.getElementById("about-section-heading");
//   const projectHeading = document.getElementById("portolio-section-heading");
   

// checkbox.addEventListener('change', ()=>{
// document.body.classList.toggle('dark-background');
// about.classList.toggle('light-background');
// aboutHeading.classList.toggle('dark-text');
// project.classList.toggle('dark-background');


// })


