
document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtnMobile = document.getElementById("prevBtnMobile");
    const nextBtnMobile = document.getElementById("nextBtnMobile");
    const menu = document.getElementById("menu")
    const burger = document.getElementById("burger");
    const close = document.getElementById("close")

// burger menu 
burger.addEventListener("click", function(){
  menu.style.display = "flex";
  burger.style.display = "none"
})
close.addEventListener("click", function(){
  menu.style.display = "";
  burger.style.display = ""
})


    let slideIndex = 0;

    nextBtn.addEventListener("click", function() {
        slideIndex += 1;
        showImg(slideIndex);
        showSlides(slideIndex);
        showImgMobile(slideIndex)
    });

    prevBtn.addEventListener("click", function() {
        slideIndex -= 1;
        showImg(slideIndex);
        showSlides(slideIndex);
        showImgMobile(slideIndex)
    });

    // mobile 
    nextBtnMobile.addEventListener("click", function() {
      slideIndex += 1;
      showImg(slideIndex);
      showSlides(slideIndex);
      showImgMobile(slideIndex)
  });

  prevBtnMobile.addEventListener("click", function() {
      slideIndex -= 1;
      showImg(slideIndex);
      showSlides(slideIndex);
      showImgMobile(slideIndex)
  });

    // Display the first slide when the page loads
    showImg(slideIndex);
    showSlides(slideIndex);
    showImgMobile(slideIndex)

    function showSlides(n) {
      const slides = document.querySelectorAll(".slide");
     
      if (n >= slides.length) {
        slideIndex = 0;

      }
      if (n < 0) {
        slideIndex = slides.length - 1;
        
      }
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active'); // Remove active class from all slides
    }
    slides[slideIndex].classList.add('active'); // Add active class to current slide
    }

    function showImg(n) {
        const imgSlide = document.querySelectorAll(".img-slide")
       
        if (n >= imgSlide.length) {
          slideIndex = 0;
  
        }
        if (n < 0) {
          slideIndex = imgSlide.length - 1;
          
        }
        for (let i = 0; i < imgSlide.length; i++) {
          imgSlide[i].style.display = "none";
        }
        imgSlide[slideIndex].style.display = "block";
      }

      function showImgMobile(n) {
        const imgSlideMobile = document.querySelectorAll(".img-slide-mobile")
       
        if (n >= imgSlideMobile.length) {
          slideIndex = 0;
  
        }
        if (n < 0) {
          slideIndex = imgSlideMobile.length - 1;
          
        }
        for (let i = 0; i < imgSlideMobile.length; i++) {
          imgSlideMobile[i].style.display = "none";
        }
        imgSlideMobile[slideIndex].style.display = "block";
      }
});


