$(document).ready(() => {
    $(window).scroll(() => {
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     $('.scroll-up-btn').click(() => {
         $('html').animate({scrollTop: 0});
     });

     var typed = new Typed(".typing", {
         strings:["Desenvolvedor Front-End"],
         typeSpeed:100,
         backSpeed:60,
         loop:true
     });
     

    $('.menu-btn').click(() => {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});

document.querySelector('.toggle-lang').addEventListener('click', function(e) {
    e.preventDefault(); // evita o reload da página
    document.querySelector('.language-second').classList.toggle('show');
});

document.addEventListener('click', function(e) {
    const langBox = document.querySelector('.language');
    const dropdown = document.querySelector('.language-second');

    if (!langBox.contains(e.target)) {
        dropdown.classList.remove('show');
    }
});


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede o envio padrão

    const firstName = document.getElementById("first-name").value.trim();
    const lastName  = document.getElementById("last-name").value.trim();
    const email     = document.getElementById("email").value.trim();
    const message   = document.getElementById("message").value.trim();

    // número do WhatsApp em formato internacional, sem +, espaços ou traços
    // Exemplo: +61 434 457 000  →  61434457000
    const phoneNumber = "61434457000";

    const text = `Hello, Luan!%0A%0A` +
                 `I came from your website.:%0A%0A` +
                 `Name: ${firstName} ${lastName}%0A` +
                 `Email: ${email}%0A%0A` +
                 `Message:%0A${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    // abre o WhatsApp Web / app
    window.open(url, "_blank");
  });
});

