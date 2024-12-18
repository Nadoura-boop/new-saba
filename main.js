let lastScrollTop = 0; // لتتبع موضع التمرير السابق
const navbar = document.querySelector('.navbar');
const navbarToggler = document.querySelector('.navbar-toggler');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // التمرير لأسفل
    navbar.style.top = '-200px'; // إخفاء النافبار (حسب ارتفاعه)
  } else {
    // التمرير لأعلى
    navbar.style.top = '0';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // التأكد من عدم التمرير لأعلى أكثر من اللازم
});


window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll Down
        navbar.classList.add('hidden'); // إضافة الكلاس لإخفاء الناف بار
    } else {
        // Scroll Up
        navbar.classList.remove('hidden'); // إزالة الكلاس لإظهار الناف بار
    }
    lastScrollTop = scrollTop;
});

const navLinks = document.querySelectorAll('.navbar .nav-link');

// إضافة حدث النقر لكل رابط
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // إخفاء شريط التنقل عند النقر على أي رابط
        document.querySelector('.navbar').classList.add('hidden');
    });
});
navbarToggler.addEventListener('click', () => {
    navbar.classList.toggle('hidden'); // تغيير حالة إظهار شريط التنقل
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.getElementById('navbarSupportedContent');
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
        });
        bsCollapse.hide();
    });
});



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay:{
        delay:3000,

    },
    loop:true,
  });
