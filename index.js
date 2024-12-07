document.addEventListener("DOMContentLoaded", () => {

    // TOGGLE MENÚ HAMBURGUESA
    document.querySelector('.menu-toggle').addEventListener('click', () => {
        const nav = document.querySelector('.nav-links');
        const header = document.getElementById('header-background');
        nav.classList.toggle('active');
    
        if(nav.classList.contains("active")) {
            header.classList.add("header-background");
        } else {
            header.classList.remove("header-background");
        }
    });

    // VALIDACIONES FORMULARIO
    let errors = [];
    const form = document.getElementById("formulario");
    const nombre = document.getElementById("nombre");
    const error_nombre = document.getElementById("error_nombre");
    const mail = document.getElementById("mail");
    const error_mail = document.getElementById("error_mail");
    const mensaje = document.getElementById("mensaje");
    const error_mensaje = document.getElementById("error_mensaje");
    const enviar = document.getElementById("enviar");
    const confirmacion = document.getElementById("confirmacion");

    form && form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        confirmacion.style.display = "block";
    });

    form && form.addEventListener("input", (e) => {
        e.preventDefault();
        
        // VALIDACIÓN NOMBRE -> ENTRE 1 Y 50 LETRAS, SIN CARACTERES ESPECIALES
        if(e.target == nombre) {
            const regex_nombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ'´` ]+$/;
            
            if(nombre.value.length > 1 && nombre.value.length < 50 && regex_nombre.test(nombre.value) == true) {
                error_nombre.style.display = "none";
                errors = errors.filter(error => error !== "nombre");
                errors.length ? enviar.disabled = true : enviar.disabled = false;
            } else {
                if(!errors.find(error => error == "nombre")) errors.push("nombre");
                error_nombre.style.display = "block";
                enviar.disabled = true;
            }
        }

        // VALIDACIÓN MAIL
        if(e.target == mail) {
            const regex_mail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if(regex_mail.test(mail.value) == true) {
                error_mail.style.display = "none";
                errors = errors.filter(error => error !== "mail");
                errors.length ? enviar.disabled = true : enviar.disabled = false;
            } else {
                if(!errors.find(error => error == "mail")) errors.push("mail");
                error_mail.style.display = "block";
                enviar.disabled = true;
            }
        }

        // VALIDACIÓN MENSAJE -> ENTRE 10 Y 500 CARACTERES
        if(e.target == mensaje) {
            if(mensaje.value.length > 10 && mensaje.value.length < 500) {
                error_mensaje.style.display = "none";
                errors = errors.filter(error => error !== "mensaje");
                errors.length ? enviar.disabled = true : enviar.disabled = false;
            } else {
                if(!errors.find(error => error == "mensaje")) errors.push("mensaje");
                error_mensaje.style.display = "block";
                enviar.disabled = true;
            }
        }
    });

    // BOTON "SCROLL TO TOP"
    let scroll = document.getElementById("scroll");

    document.addEventListener("scroll", () => {
        let posicion = window.scrollY;

        if(posicion > 0) {
            scroll.style.display = "block";
        } else {
            scroll.style.display = "none";
        }
    })

    scroll && scroll.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
