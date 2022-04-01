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









//   //toggle theme 

//   const checkbox = document.getElementById('checkbox');
//   const about = document.getElementById('about-section');
//   const portfolio = document.getElementById('portfolio-section');
//   const heroHeading =  document.getElementById("hero-section-heading");
//   const jobDescription =  document.getElementById("hero-p");
//   const aboutHeading = document.getElementById("about-section-heading");
//   const portfolioHeading = document.getElementById("portolio-section-heading");
   

// checkbox.addEventListener('change', ()=>{
// document.body.classList.toggle('dark-background');
// about.classList.toggle('light-background');
// aboutHeading.classList.toggle('dark-text');
// portfolio.classList.toggle('dark-background');


// })


