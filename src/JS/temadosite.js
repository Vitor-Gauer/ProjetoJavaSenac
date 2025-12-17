function alternarModo() {
      const body = document.body;
      const switchBtn = document.querySelector('.switch-modo');
      
      if (body.classList.contains('modo-claro')) {
        body.classList.remove('modo-claro');
        switchBtn.textContent = 'Modo Escuro';
      } else {
        body.classList.add('modo-claro');
        switchBtn.textContent = 'Modo Claro';
      }
    }