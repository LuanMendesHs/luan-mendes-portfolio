$(document).ready(() => {
    // ===== Scroll effects =====
    $(window).scroll(() => {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(() => {
        $('html').animate({ scrollTop: 0 });
    });

    // ===== Mobile menu =====
    $('.menu-btn').click(() => {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn ion-icon').toggleClass("active");
    });

    // ===== Owl Carousel =====
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPauser: true,
        responsive: {
            0: { items: 1, nav: false },
            600: { items: 2, nav: false },
            1000: { items: 3, nav: false }
        }
    });
});

// ===== Language dropdown toggle (mantido por causa do CSS atual) =====
document.querySelector('.toggle-lang').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.language-second').classList.toggle('show');
});

document.addEventListener('click', function (e) {
    const langBox = document.querySelector('.language');
    const dropdown = document.querySelector('.language-second');

    if (!langBox.contains(e.target)) {
        dropdown.classList.remove('show');
    }
});

// ===== i18n + Typed.js + WhatsApp =====
const translations = {
    pt: {
        htmlLang: "pt-br",
        title: "Portfólio | Luan Mendes",

        nav: {
            logoSuffix: "fólio",
            home: "Início",
            about: "Sobre",
            services: "Serviços",
            skills: "Especialidades",
            projects: "Projetos",
            contact: "Contato",
        },

        home: {
            hello: "Olá, meu nome é",
            iAm: "Eu sou",
            hire: "Contratar-me",
        },

        about: {
            title: "Sobre",
            subtitle: "Quem eu sou",
            imLuan: "Sou Luan e sou",
            p1: "Eu me chamo Luan, tenho 27 anos e comecei minha jornada na programação em 2021, quando decidi mudar completamente de carreira e seguir aquilo que realmente me despertava curiosidade: tecnologia.",
            p2: "Comecei estudando lógica e algoritmos, e rapidamente percebi que esse universo fazia total sentido pra mim. Em 2022 tive a oportunidade de estudar na Amontada Valley, onde aprimorei meus conhecimentos e desenvolvi ainda mais paixão pela área. Esse caminho me levou ao meu primeiro trabalho na Inovation IT, onde passei dois anos aprendendo, criando e me desenvolvendo ao lado de uma equipe que fez parte importante da minha história.",
            p3: "Depois dessa experiência, decidi dar um passo adiante e realizar um intercâmbio na Austrália. Aqui, sigo estudando, evoluindo e criando novos projetos por conta própria — sempre buscando aprender coisas novas e melhorar minhas habilidades.",
            p4: "Hoje, estou em busca de uma nova oportunidade para contribuir com meu trabalho, crescer profissionalmente e continuar fazendo o que eu mais gosto: transformar ideias em soluções através do código.",
            resume: "Visualizar CV",
        },

        services: {
            title: "Serviços",
            subtitle: "O que ofereço",
            html: "HTML é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web.",
            css: "CSS é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML.",
            js: "Linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.",
            react: "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
            reactNative: "React Native é uma biblioteca JavaScript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.",
            bootstrap: "Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end.",
            powerAutomate: "Power Automate é uma plataforma da Microsoft que permite automatizar tarefas e processos de negócios usando uma interface intuitiva.",
            powerApps: "Power Apps é uma plataforma da Microsoft que permite criar aplicativos de negócios personalizados conectados a várias fontes de dados.",
            sharepoint: "SharePoint é uma plataforma colaborativa da Microsoft que permite às organizações criar sites para armazenar, organizar e compartilhar documentos e informações de forma segura.",
        },

        skills: {
            title: "Especialidades",
            subtitle: "O que faço",
            leftTitle: "Minhas habilidades criativas e experiências",
            leftText: "No momento estou em busca de novas oportunidades para aprimorar os meus conhecimentos cada vez mais. Grande parte da minha experiência foi adquirida em sala de aula e estudos em plataformas de ensino online, onde fizemos o desenvolvimento de diversos desafios que me ajudaram a adquirir bastante conhecimento para adentrar no ramo de desenvolvedor.",
        },

        projects: {
            title: "Meus Projetos",
            subtitle: "Portfólio",
            bikcraftAlt: "Site completo criado para empresa de bicicletas, com páginas de preços e informações dos produtos.",
            bikcraftText: "Site completo criado para empresa de bicicletas, com páginas de preços e informações dos produtos.",
            drAlt: "Site criado exclusivamente para dentista, totalmente responsivo e com atendimento via API Whatsapp.",
            drText: "Site criado exclusivamente para dentista, totalmente responsivo e com atendimento via API Whatsapp.",
            gameAlt: "Um jogo que utiliza uma API de reconhecimento de voz para encontrar o valor correto.",
            gameTitle: "Game",
            gameText: "Um jogo que faz a utilização de uma API de reconhecimento de voz para encontrar o valor correto.",
            frutoAlt: "Um projeto realizado em Bootstrap utilizando um layout de receitas responsivo.",
            frutoText: "Um projeto realizado em Bootstrap utilizando um layout de receitas responsivo.",
            organoAlt: "Site criado utilizando a biblioteca React, com um formulário dinâmico para implementação de desenvolvedores.",
            organoTitle: "Site Organo",
            organoText: "Site criado utilizando a biblioteca React, onde foi criado um formulário dinâmico para implementação de desenvolvedores.",
            imobAlt: "Um site pensado para uma Imobiliária, utilizando o framework Bootstrap para o seu desenvolvimento.",
            imobTitle: "Imobiliária",
            imobText: "Um site pensado para uma Imobiliária, utilizando o framework Bootstrap para o seu desenvolvimento.",
            aluraAlt: "Um site da Alura onde são divulgados livros e conteúdos online para desenvolvimento de sistemas.",
            aluraTitle: "Alura Books",
            aluraText: "Um site da Alura onde são divulgados livros e conteúdos online para desenvolvimento de sistemas.",
            devAlt: "Sites que estão sendo desenvolvidos e logo mais estarão inclusos no Portfólio.",
            devTitle: "Em Desenvolvimento",
            devText: "Sites que estão sendo desenvolvidos e logo mais estarão inclusos no Portfólio.",
        },

        contact: {
            title: "Contato",
            subtitle: "Fale comigo",
            leftTitle: "Fale Comigo",
            leftText: "Caso tenha se interessado e queira entrar em contato, encontro-me à disposição para esclarecer quaisquer dúvidas.",
            nameLabel: "Nome",
            phoneLabel: "Telefone",
            emailLabel: "Email",
            formTitle: "Mensagem",
            firstName: "Nome",
            lastName: "Sobrenome",
            emailPlaceholder: "Email",
            messagePlaceholder: "Escrever...",
            send: "Enviar",
        },

        footer: {
            textPrefix: "Desenvolvido por",
            name: "Luan Mendes",
            rights: "Todos os direitos reservados 2023",
        },

        typed: {
            home: ["Desenvolvedor Front-End"],
            about: ["Desenvolvedor Front-End"],
        },

        whatsapp: {
            greeting: "Olá, Luan!",
            source: "Vim através do seu site.",
            name: "Nome",
            email: "Email",
            message: "Mensagem",
        },

        flags: {
            mainSrc: "image/flag-brazil.svg",
            mainAlt: "Bandeira do Brasil",
            secondSrc: "image/flag-usa.svg",
            secondAlt: "USA Flag",
            nextLang: "en",
        }
    },

    en: {
        htmlLang: "en",
        title: "Portfolio | Luan Mendes",

        nav: {
            logoSuffix: "folio",
            home: "Home",
            about: "About",
            services: "Services",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
        },

        home: {
            hello: "Hello, my name is",
            iAm: "I am a",
            hire: "Hire Me",
        },

        about: {
            title: "About",
            subtitle: "Who I am",
            imLuan: "I’m Luan and I am a",
            p1: "My name is Luan, I’m 27 years old, and I started my programming journey in 2021 when I decided to completely change careers and follow something that truly sparked my curiosity: technology.",
            p2: "I started studying logic and algorithms and quickly realized that this universe made total sense to me. In 2022, I had the opportunity to study at Amontada Valley, where I improved my skills and developed even more passion for the field. This path led me to my first job at Inovation IT, where I spent two years learning, creating, and growing alongside an amazing team that became an important part of my story.",
            p3: "After that experience, I decided to take a bigger step and move to Australia. Here, I continue studying, evolving, and creating new projects on my own — always aiming to learn new things and improve my skills.",
            p4: "Today, I’m seeking a new opportunity where I can contribute with my work, grow professionally, and keep doing what I love the most: turning ideas into solutions through code.",
            resume: "View Resume",
        },

        services: {
            title: "Services",
            subtitle: "What I offer",
            html: "HTML is the most basic building block of the web. It defines the structure and meaning of web content.",
            css: "CSS is a style sheet mechanism used to apply styles to web pages, directly within HTML tags.",
            js: "A high-level, interpreted programming language with weak dynamic typing and multiparadigm support.",
            react: "React is an open-source JavaScript front-end library focused on building user interfaces for web pages.",
            reactNative: "React Native is a JavaScript library created by Facebook. It is used to develop native apps for Android and iOS.",
            bootstrap: "Bootstrap is an open-source web framework for building front-end components and interfaces.",
            powerAutomate: "Power Automate is a Microsoft platform that allows automating tasks and business processes using intuitive flows and triggers.",
            powerApps: "Power Apps is a Microsoft platform for creating custom business applications connected to data sources like SharePoint, Excel, and other services.",
            sharepoint: "SharePoint is a collaborative platform by Microsoft used to create sites that store, organize and share documents securely while supporting team productivity.",
        },

        skills: {
            title: "Skills",
            subtitle: "What I do",
            leftTitle: "My creative skills and experiences",
            leftText: "I am currently looking for new opportunities to improve my knowledge even further. Most of my experience was acquired through classroom learning and online education platforms, where I completed various challenges that helped me gain solid knowledge for entering the developer field.",
        },

        projects: {
            title: "My Projects",
            subtitle: "Portfolio",
            bikcraftAlt: "Full website created for a bicycle company, with pricing pages and product information.",
            bikcraftText: "Full website created for a bicycle company, including pricing pages and product details.",
            drAlt: "Website created exclusively for a dentist, fully responsive with WhatsApp API support.",
            drText: "Exclusive website for a dentist, fully responsive and connected to a WhatsApp API.",
            gameAlt: "A game that uses a voice recognition API to find the correct number.",
            gameTitle: "Voice Game",
            gameText: "A game that uses a voice recognition API to guess the correct number.",
            frutoAlt: "A Bootstrap project using a responsive recipe layout.",
            frutoText: "A Bootstrap project featuring a fully responsive recipe layout.",
            organoAlt: "Website created using React, featuring a dynamic form for developer registration.",
            organoTitle: "Organo Website",
            organoText: "Website created using the React library, featuring a dynamic form for developer registration.",
            imobAlt: "A real estate website built using Bootstrap.",
            imobTitle: "Real Estate",
            imobText: "A real estate website designed using the Bootstrap framework.",
            aluraAlt: "An Alura website showcasing books and online development content.",
            aluraTitle: "Alura Books",
            aluraText: "An Alura website presenting books and online content for system development.",
            devAlt: "Websites currently in development that will soon be included in the portfolio.",
            devTitle: "In Development",
            devText: "Websites currently being developed and soon to be added to the portfolio.",
        },

        contact: {
            title: "Contact",
            subtitle: "Get in touch",
            leftTitle: "Contact Me",
            leftText: "If you are interested and would like to get in touch, I am available to answer any questions.",
            nameLabel: "Name",
            phoneLabel: "Phone",
            emailLabel: "Email",
            formTitle: "Message",
            firstName: "First Name",
            lastName: "Last Name",
            emailPlaceholder: "Email",
            messagePlaceholder: "Write your message...",
            send: "Send",
        },

        footer: {
            textPrefix: "Developed by",
            name: "Luan Mendes",
            rights: "All rights reserved 2023",
        },

        typed: {
            home: ["Front-End Developer"],
            about: ["Front-End Developer"],
        },

        whatsapp: {
            greeting: "Hello, Luan!",
            source: "I came from your website.",
            name: "Name",
            email: "Email",
            message: "Message",
        },

        flags: {
            mainSrc: "image/flag-usa.svg",
            mainAlt: "USA Flag",
            secondSrc: "image/flag-brazil.svg",
            secondAlt: "Bandeira do Brasil",
            nextLang: "pt",
        }
    }
};

function getLang() {
    const saved = localStorage.getItem("site_lang");
    if (saved && translations[saved]) return saved;
    return "pt";
}

function setLang(lang) {
    if (!translations[lang]) lang = "pt";
    localStorage.setItem("site_lang", lang);
    applyI18n(lang);
    updateFlags(lang);
    initTyped(lang);
}

function applyI18n(lang) {
    const t = translations[lang];
    document.documentElement.lang = t.htmlLang;
    document.title = t.title;

    // data-i18n text
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        const value = key.split(".").reduce((acc, k) => (acc && acc[k] != null ? acc[k] : null), t);
        if (value != null) el.textContent = value;
    });

    // data-i18n-placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        const value = key.split(".").reduce((acc, k) => (acc && acc[k] != null ? acc[k] : null), t);
        if (value != null) el.setAttribute("placeholder", value);
    });

    // data-i18n-alt (images)
    document.querySelectorAll("[data-i18n-alt]").forEach(el => {
        const key = el.getAttribute("data-i18n-alt");
        const value = key.split(".").reduce((acc, k) => (acc && acc[k] != null ? acc[k] : null), t);
        if (value != null) el.setAttribute("alt", value);
    });
}

function updateFlags(lang) {
    const f = translations[lang].flags;
    const main = document.getElementById("lang-flag-main");
    const second = document.getElementById("lang-flag-second");
    const switcher = document.getElementById("lang-switch");

    if (main) {
        main.src = f.mainSrc;
        main.alt = f.mainAlt;
    }
    if (second) {
        second.src = f.secondSrc;
        second.alt = f.secondAlt;
    }
    if (switcher) {
        switcher.setAttribute("data-lang", f.nextLang);
    }
}

let typedHome = null;
let typedAbout = null;

function initTyped(lang) {
    // garante que Typed.js existe
    if (typeof Typed === "undefined") return;

    // destrói instâncias antigas
    if (typedHome) typedHome.destroy();
    if (typedAbout) typedAbout.destroy();

    const t = translations[lang].typed;

    if (document.querySelector(".typing")) {
        typedHome = new Typed(".typing", {
            strings: t.home,
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    if (document.querySelector(".typing-2")) {
        typedAbout = new Typed(".typing-2", {
            strings: t.about,
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // iniciar idioma
    setLang(getLang());

    // clique no item do dropdown troca idioma
    const switcher = document.getElementById("lang-switch");
    if (switcher) {
        switcher.addEventListener("click", function (e) {
            e.preventDefault();
            const next = this.getAttribute("data-lang") || "en";
            setLang(next);

            // fecha dropdown
            const dropdown = document.querySelector('.language-second');
            if (dropdown) dropdown.classList.remove('show');
        });
    }

    // WhatsApp
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const lang = getLang();
            const w = translations[lang].whatsapp;

            const firstName = document.getElementById("first-name").value.trim();
            const lastName = document.getElementById("last-name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            const phoneNumber = "61434457000";

            const text =
                `${w.greeting}\n\n` +
                `${w.source}\n\n` +
                `${w.name}: ${firstName} ${lastName}\n` +
                `${w.email}: ${email}\n\n` +
                `${w.message}:\n${message}`;

            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
            window.open(url, "_blank");
        });
    }
});
