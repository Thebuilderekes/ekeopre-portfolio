const heading1 = document.getElementById("hero-section-heading");
const tagLine = document.getElementById("dark-color");
const projectSection = document.getElementById("project-section");
const projectSectionHeading = document.getElementById("project-section-heading");
const body =  document.getElementById("smooth-wrapper");


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

// function darkMode() {
//   const body =  document.getElementById("smooth-wrapper");
//   body.style.backgroundColor = "#000000"
//    heading1.style.color = "#f0ecec"  
//    heading2.style.color = "#f0ecec"  
//    tagLine.style.color = "#f0ecec" 
//   projectSectionHeading.style.color = "#f0ecec"
  
//       }
//       function lightMode() {
    
     
//       }





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


