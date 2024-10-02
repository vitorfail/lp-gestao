window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // Posição do scroll
    if (scrollPosition>1){
        header = document.getElementById("header");
        header.className = "header-scroll";
        var index = document.getElementById("index");
        index.style.opacity = 1
    }
    if(scrollPosition ==0){
        header = document.getElementById("header");
        header.className = "";
        var index = document.getElementById("index");
        index.style.opacity = 0
    }

    // Verifica se o elemento está visível no viewport
});
const target = document.getElementById('problemas');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry.isIntersecting)
        if (entry.isIntersecting) {
            // Adiciona o tema escuro
            //var logo = document.getElementById("logo")
            //logo.className = "error"
            //document.body.classList.add('thema_erro');

        } else {
            var logo = document.getElementById("logo")
            logo.className = ""
            // Remove o tema escuro
            document.body.classList.remove('thema_erro');
        }
    });
}, {
    root: null, // Usa a viewport como root
    rootMargin: '200px 0px -1050px 0px ', // Ajuste a margem inferior conforme necessário
    threshold: 0.1
});

const solucoes = document.getElementById('solucoes');
// Inicia a observação da div alvo
observer.observe(target);

window.addEventListener('load', function() {
    var loading= document.getElementById("loading")
    setTimeout(function() {
        loading.className = "loading show"
        window.scrollTo(0, 0);
    }, 800)
});
var index_comentario= 0
function passar(index){
    var comentarios = document.getElementById("container_comentarios")
    if (index_comentario<=0){
        if(index_comentario==0 && index>0){

        }
        else{
            index_comentario =index_comentario+index
            comentarios.style.transform = `translateX(${index_comentario}vw)`
        }
    }
}
function subir(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // faz o scroll de forma suave
        });
}
function detectarScroll(el) {
    var elements = document.querySelectorAll("."+el);
    if (elements){
        elements.forEach(function (element) {
            var position = element.getBoundingClientRect();

            // Verifica se o elemento está visível no viewport
            if (position.top < window.innerHeight && position.bottom >= 20) {
                element.id = el; // Adiciona a classe
            }
        });

    }
}
function detectarScroll_sair(el) {
    var elements = document.querySelectorAll("."+el);
    if (elements){
        elements.forEach(function (element) {
            console.log(e)
            var position = element.getBoundingClientRect();
            // Verifica se o elemento está visível no viewport
            if (position.top < window.innerHeight && position.bottom >= 20) {
                element.id = el; // Adiciona a classe
            }
            else{
                element.id = ""
            }
        });

    }
}

window.addEventListener("load",function() {
    detectarScroll("solucao-letra")
    detectarScroll("listra")
    detectarScroll("cima");
    detectarScroll("esquerda");
    detectarScroll("direita");
    detectarScroll("baixo");
    detectarScroll("money")
    detectarScroll("pergunta");
    detectarScroll("cifrao");
    detectarScroll("numero1");
    detectarScroll("numero2");
    detectarScroll("numero3");
});
window.addEventListener("scroll",function() {
    detectarScroll("listra")
    detectarScroll("solucao-letra")
    detectarScroll("money")
    detectarScroll("cima");
    detectarScroll("esquerda");
    detectarScroll("direita");
    detectarScroll("baixo");
    detectarScroll("cifrao");
    detectarScroll("numero1");
    detectarScroll("numero2");
    detectarScroll("numero3");
    detectarScroll("cifrao");
    contadores()

});
jQuery(document).ready(function ($) {
    console.log("passou aqui")
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slider').css({ width: slideWidth, height: slideHeight });
    
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
      console.log("passou aqui")
        $('#slider ul').animate({
            left: + slideWidth
        }, 1000, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 1000, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('p.control_prev').click(function () {
        moveLeft();
    });

    $('p.control_next').click(function () {
        moveRight();
    });

}); 
const numeros = [1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2,4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2];
const quadrados = numeros.map(num => num * num);
const classes = [
    "fa-solid fa-money-bill",
    "fa-solid fa-dollar-sign",
    "fa-solid fa-sack-xmark",
    "fa-solid fa-piggy-bank"
];
// Seleciona a lista no HTML
const lista = document.querySelector('.money');

// Adiciona os quadrados na lista com um valor aleatório para --i
quadrados.forEach(quadrado => {
    const li = document.createElement('i');
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    li.className = randomClass

    // Gera um número aleatório entre 1 e 100
    const randomValue = Math.random() * 100;

    // Define a variável CSS --i
    li.style.setProperty('--i', randomValue / 50); // Ajusta para estar entre 0 e 1 para opacidade

    lista.appendChild(li);
});
const total = 1370; // Defina o número total que você deseja contar
let count = 0;

const total_feedbacks = 810; // Defina o número total que você deseja contar
let count_feedbacks = 0;

const total_satisfeitos = 82; // Defina o número total que você deseja contar
let count_satisfeitos = 0;

function contadores(){
    const numero = document.getElementById('numero1');

    if (numero !== null){
        const intervalo = setInterval(() => {
                if (count < total) {
                    count=count+1;
                    numero.textContent ='+'+ count;
                } else {
                    clearInterval(intervalo);
                }    
            
        }, 30);
    }
    const numero_feedbacks = document.getElementById('numero2');

    if(numero_feedbacks !== null){
        const intervalo_feedbacks = setInterval(() => {
            if (count_feedbacks < total_feedbacks) {
                count_feedbacks=count_feedbacks+1;
                numero_feedbacks.textContent ='+'+ count_feedbacks;
            } else {
                clearInterval(intervalo_feedbacks);
            }    
        }, 40);
    }
    const numero_satisfeitos = document.getElementById('numero3');

    if(numero_satisfeitos !== null){
        const intervalo_satisfeitos = setInterval(() => {
            if (count_satisfeitos < total_satisfeitos) {
                count_satisfeitos=count_satisfeitos+1;
                numero_satisfeitos.textContent =count_satisfeitos+ "%";
            } else {
                clearInterval(intervalo_satisfeitos);
            }    
        }, 300);
    }
}


function show_resposta(r){
    var resposta = document.getElementById(r)
    resposta.style.maxHeight= "200px"
}
const comentario = document.getElementById('container_comentarios');
let isDown = false;
let startX;
let scrollLeft;

const startDragging = (e) => {
    isDown = true;
    comentario.style.cursor = 'grabbing'; // Muda o cursor ao arrastar
    startX = e.pageX || e.touches[0].pageX - comentario.offsetLeft; // Para suporte a toque
    scrollLeft = comentario.scrollLeft;
    console.log(comentario.scrollLeft)
};

const stopDragging = () => {
    isDown = false;
    comentario.style.cursor = 'grab';
};

const doDragging = (e) => {
    if (!isDown) return; // Se não estiver arrastando, sai da função
    e.preventDefault(); // Previne o comportamento padrão
    const x = e.pageX || e.touches[0].pageX - comentario.offsetLeft; // Para suporte a toque
    const walk = (x - startX) * 2; // Aumenta a velocidade do arrasto
    comentario.scrollLeft = scrollLeft - walk;
};

// Eventos para mouse
comentario.addEventListener('mousedown', startDragging);
comentario.addEventListener('mouseleave', stopDragging);
comentario.addEventListener('mouseup', stopDragging);
comentario.addEventListener('mousemove', doDragging);

// Eventos para toque
comentario.addEventListener('touchstart', startDragging);
comentario.addEventListener('touchend', stopDragging);
comentario.addEventListener('touchmove', doDragging);
