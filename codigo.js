const noScrollLinks = document.querySelectorAll('.btn');

noScrollLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
  });
});



// boton 34

const btn_34 = document.querySelector('.btn-34');
const btn_34_span = document.querySelector('.btn-34-span');



btn_34.addEventListener('click', ()=> {
    if(!btn_34_span.classList.contains('btn-34-span-activado')){
        btn_34_span.classList.add('btn-34-span-activado');
    }else if(btn_34_span.classList.contains('btn-34-span-activado')){
        btn_34_span.classList.remove('btn-34-span-activado');
    }
});


// boton 36

const btn_36 = document.querySelector('.btn-36');
const btn_36_span1 = document.querySelector('.btn-36-span1');
const btn_36_span2 = document.querySelector('.btn-36-span2');
const btn_36_span3 = document.querySelector('.btn-36-span3');
const btn_36_span4 = document.querySelector('.btn-36-span4');

const btn_36_spans = document.querySelectorAll('.btn-36-spans');



btn_36.addEventListener('click', () => {
  if (!btn_36.classList.contains('btn-36-activado')) {
    
        btn_36.style.background = 'rgb(255, 27, 72)';
        btn_36.style.color = 'white';
        btn_36.classList.add('btn-36-activado');
        btn_36_spans.forEach((span, index) => {
        span.style.animation = `btn-36-span${index + 1}-ani 0.5s ease-out`;
        });
  
    } else if(btn_36.classList.contains('btn-36-activado')){
    
        btn_36.classList.remove('btn-36-activado');
        btn_36.style.background = 'none';
        btn_36.style.color = 'rgb(255, 27, 72)';
        btn_36.classList.remove('btn-36-activado');
        btn_36_spans.forEach((span) => {
        span.style.animation = 'none';
        });
  
    }
});

    
    

// boton 38


const btn_38 = document.querySelector('.btn-38');


btn_38.addEventListener("mousemove", function(e){
    const position = btn_38.getBoundingClientRect();
    const x = e.clientX - position.left - position.width / 2;
    const y = e.clientY - position.top - position.height / 2;

    btn_38.children[0].style.transform = "translate(" + x * 0.5 + "px, " + y * 0.7 + "px)";
});


 
btn_38.addEventListener("mouseout", function(e){
    btn_38.children[0].style.transform = "translate(0px, 0px)";
    btn_38.children[0].style.transitionDuration = '.5s';
    
    
    setTimeout(function() {
        btn_38.children[0].style.transitionDuration = '.1s';
    }, 500);  
});





// boton 39


const btn_39 = document.querySelector('.btn-39');
const btn_39_span = document.querySelector('.btn-39-span');
const btn_39_valid_der = document.querySelector('.btn-39-valid-der');
const btn_39_valid_izq = document.querySelector('.btn-39-valid-izq');
const btn_39_imagen = document.querySelector('.btn-39-imagen');


btn_39_izq();
btn_39_der();


function btn_39_izq(){
    btn_39_valid_izq.addEventListener('click', ()=>{
        btn_39_imagen.classList.add('btn-39-imagen-izquierda');
        btn_39_imagen.classList.remove('btn-39-imagen-derecha');
        btn_39_imagen.classList.remove('btn-39-imagen-comienzo');
    
        btn_39_imagen.style.animationName = 'btn-39-animacion-izq';
        btn_39_span.style.animationName = 'none';
        btn_39_span.textContent = "botón";
    });
}
function btn_39_der(){
    btn_39_valid_der.addEventListener('click', ()=>{
        btn_39_imagen.classList.add('btn-39-imagen-derecha');
        btn_39_imagen.classList.remove('btn-39-imagen-izquierda');
    
        btn_39_imagen.style.animationName = 'btn-39-animacion-der';
        btn_39_span.style.animationName = 'none';
        btn_39_span.textContent = "botón";
    });
}