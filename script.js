const carta=`Hola mi amor...

Hoy celebramos cuatro años juntos.

Gracias por cada abrazo.

Gracias por cada sonrisa.

Gracias por hacer mi vida mucho más bonita.

Espero seguir escribiendo nuestra historia durante muchos años más.

Feliz aniversario.

Te amo muchísimo.

Con amor,

Sebastián ❤️`;

let cartaTerminada = false;
const frases = [

    "Nuestros recuerdos",

    "Los mensajes que escribimos",

    "Las risas que compartimos",

    "Las lagrimas que sufrimos",

    "La compañia que sentimos",

    "Cada abrazo",

    "Cada momento a tu lado",

    "Nuestra historia",

    "Cuatro años de amor",

    "Y todos los momentos que aún nos quedan por vivir"

];

const texto=document.getElementById("texto");

const abrir=document.getElementById("abrir");

const continuar=document.getElementById("continuar");
const musica = document.getElementById("musica");
const botonFinal = document.getElementById("btnFinal");


function lluviaDeCorazones(){

    const cont=document.getElementById("lluviaCorazones");

    const mensaje=document.getElementById("mensajeFinal");

    mensaje.style.opacity="1";
    mensaje.style.transform="translate(-50%,-50%) scale(1)";

    const intervalo=setInterval(()=>{

        const c=document.createElement("div");

        c.innerHTML="❤️";

        c.style.position="absolute";

        c.style.left=Math.random()*100+"vw";

        c.style.top="-50px";

        c.style.fontSize=(20+Math.random()*35)+"px";

        c.style.animation=`caer ${4+Math.random()*3}s linear forwards`;

        cont.appendChild(c);

        setTimeout(()=>{

            c.remove();

        },7000);

    },80);

    setTimeout(()=>{

        clearInterval(intervalo);

    },5000);

}


function finalRomantico(){

    const overlay=document.getElementById("overlayFinal");

    const linea1=document.getElementById("linea1");

    const linea2=document.getElementById("linea2");

    overlay.style.display="flex";

    // lluvia

    const lluvia=setInterval(()=>{

        const c=document.createElement("div");

        c.innerHTML="❤️";

        c.style.position="absolute";

        c.style.left=Math.random()*100+"vw";

        c.style.top="-40px";

        c.style.fontSize=(20+Math.random()*25)+"px";

        c.style.animation="caer 5s linear forwards";

        overlay.appendChild(c);

        setTimeout(()=>{

            c.remove();

        },5000);

    },70);

    // primera línea

    setTimeout(()=>{

        linea1.innerHTML="Te amo mucho";

        linea1.style.opacity=1;

    },800);

    // segunda línea

    setTimeout(()=>{

        linea2.innerHTML="mi cachetitos ❤️";

        linea2.style.opacity=1;

    },2200);

    // detener lluvia

    setTimeout(()=>{

        clearInterval(lluvia);

    },5000);

}


botonFinal.onclick = () => {

    finalRomantico()

};
function ocultarTextoDespuesDeTiempo() {

    const texto = document.getElementById("textoRecuerdos");

    setTimeout(() => {

        // Primero desaparece suavemente
        texto.style.opacity = "0";

        // Después de la animación, se oculta completamente
        setTimeout(() => {

            texto.style.display = "none";

        }, 1500);

    }, 90000); // 30 segundos

}

abrir.onclick=()=>{
musica.play().catch(() => {
    console.log("El navegador requiere interacción del usuario.");
});
document.getElementById("inicio").style.display="none";

document.getElementById("carta").style.display="flex";
document.body.style.overflowY = "auto";

escribir();

};

function cambiarFrases() {

    const texto = document.getElementById("textoRecuerdos");

    let indice = 0;

    setInterval(() => {

        // Fade out
        texto.style.opacity = "0";

        setTimeout(() => {

            indice++;

            if (indice >= frases.length) {

                indice = 0;

            }

            texto.textContent = frases[indice];

            // Fade in
            texto.style.opacity = "1";

        }, 1500);

    }, 5000);

}

function escribir() {
    cartaTerminada = false;

    let i = 0;

    texto.innerHTML = "";

    const intervalo = setInterval(() => {

        texto.innerHTML += carta.charAt(i);

        // Desplazamiento suave de la carta
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });

        i++;

        if (i >= carta.length) {
            clearInterval(intervalo);

            cartaTerminada=true;
            continuar.disabled = false;
            continuar.classList.add("activo");

        }

    }, 80);

}

continuar.onclick=()=>{

    if (!cartaTerminada) {

        return;

    }
document.getElementById("carta").style.display="none";

document.getElementById("galeria").style.display="block";

document.body.style.overflow="auto";

crearGaleria();

};

function crearGaleria(){
window.scrollTo(0, 0);
cambiarFrases();
ocultarTextoDespuesDeTiempo()
scrollAutomatico();
const cont=document.getElementById("contenedorImagenes");

const total=16;

for(let i=1;i<=total;i++){

const img=document.createElement("img");

img.src="img/imagen"+i+".jpeg";

img.className="foto";

cont.appendChild(img);

}

const fotos=document.querySelectorAll(".foto");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

});

fotos.forEach(f=>observer.observe(f));



}

function scrollAutomatico() {

    let velocidad = 1.4;

    function mover() {

        window.scrollBy({
            top: velocidad,
            left: 0
        });

        requestAnimationFrame(mover);

    }

    mover();

}

function estrellas(){

for(let i=0;i<120;i++){

const s=document.createElement("div");

s.innerHTML="✨";

s.style.position="fixed";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.opacity=Math.random();

document.body.appendChild(s);

}

}

estrellas();