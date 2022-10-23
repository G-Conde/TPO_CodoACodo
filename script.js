const iconomenu = document.querySelector('#icono-menu'),
      menu = document.querySelector('#menu');

      iconomenu.addEventListener('click', (e)=>{
            menu.classList.toggle('active')
            document.body.classList.toggle('opacidad')
            
      })