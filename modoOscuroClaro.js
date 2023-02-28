const barra_navegacion = document.querySelector('nav.barra_navegacion'),
      navs = document.querySelectorAll('button.nav'),
      modoOscuroClaro = document.getElementById('modoOscuroClaro'),
      cuerpo = document.querySelector('body.cuerpo'),
      pie = document.querySelector('footer')
      slider = document.querySelectorAll('li.slider'),
      aptitudes = document.querySelectorAll('ul.aptitudes'),
      idiomas = document.querySelectorAll('strong.idioma'),
      datos = document.querySelectorAll('.cambiar');


modoOscuroClaro.addEventListener('click', function(){
    let style = window.getComputedStyle(modoOscuroClaro);
    let color = style.getPropertyValue('background-color');
    if(color == 'rgb(34, 34, 34)'){

        // color Claro

        barra_navegacion.style.backgroundColor = '#6da0a5';

        for(let i=0; i < navs.length; i++){
            navs[i].style.backgroundColor = '#FFF'
        };

        modoOscuroClaro.style.backgroundColor = '#FFF';

        cuerpo.style.backgroundColor = '#a19d9d';

        pie.style.backgroundColor = '#6da0a5';

        for(let i=0; i < slider.length; i++){
            slider[i].style.backgroundColor = 'white';
            slider[i].style.color = 'black';
        };

        for(let i=0; i < aptitudes.length; i++){
            aptitudes[i].style.backgroundColor = '#6a6a6a'
        };

        for(let i=0; i < idiomas.length; i++){
            idiomas[i].style.borderColor = '#a1a1a1'
        };

        for(let i=0; i < datos.length; i++){
            datos[i].style.backgroundColor = '#6da0a5'
        };

    } else {

        //color Oscuro

        barra_navegacion.style.backgroundColor = '#222';

        for(let i=0; i < navs.length; i++){
            navs[i].style.backgroundColor = '#222'
        };
        modoOscuroClaro.style.backgroundColor = '#222';

        cuerpo.style.backgroundColor = '#808080';
        
        pie.style.backgroundColor = '#222';
        for(let i=0; i < slider.length; i++){
            slider[i].style.backgroundColor = 'black';
            slider[i].style.color = 'white';
        };
        for(let i=0; i < aptitudes.length; i++){
            aptitudes[i].style.backgroundColor = '#393030'
        };
        for(let i=0; i < idiomas.length; i++){
            idiomas[i].style.borderColor = '#grey'
        };
        for(let i=0; i < datos.length; i++){
            datos[i].style.backgroundColor = '#393030'
        }; 
    }
})
