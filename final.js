//=====Start of TOGGLE=====
const body = document.querySelector("body"),
sidebar = body.querySelector(".sidebar"),
toggle = body.querySelector(".toggle");

toggle.addEventListener("click", () => {
sidebar.classList.toggle("close");
});


//=====End of TOGGLE=====

//For smoother reveal(in experemantation(LUH?!))
//=====Start
window.addEventListener('scroll', () => {
const reveals = document.querySelectorAll('.reveal');

reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const elementTop = reveal.getBoundingClientRect().top;
    const elementVisible = 150; // Element will start to appear 150px before it's fully in view

    if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add('active');
    } else {
        reveal.classList.remove('active');
    }
});
});//======End

//======For toottip
toggle.onclick = function() {
  sidebar.classList.toggle('active')
}

  //background
  let logos = document.getElementById('logos');
  logos.style.width = '55%'; 
  logos.style.height = 'auto'; 
  logos.style.marginLeft = "24%";
  
      window.addEventListener('scroll', function () {
          let scrollValue = window.scrollY;
          logos.style.transform = `translateY(45%) translateX(-${scrollValue * 2}px)`;
      });
  


var swiper = new Swiper(".slidecontent", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
