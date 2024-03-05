const cursor = document.querySelector('.cursor-varinha');
const presentationSection = document.querySelector('.presentation');
const alturaPresentation = presentationSection.clientHeight;

window.addEventListener('scroll', function(){
  const posicaoAtual = window.scrollY;

  if (posicaoAtual > 0) {
      ocultaElementosDoHeader();
  } else {
      exibeElementosDoHeader();
  }
  })

  function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

  function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

//até aqui foi para ocultar o menu

document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  cursor.style.left = mouseX - cursor.offsetWidth / 2 + 'px';
  cursor.style.top = mouseY - cursor.offsetHeight / 2 + 'px';
});

document.addEventListener('mouseenter', () => {
  cursor.style.display = 'block';
});

document.addEventListener('mouseleave', () => {
  cursor.style.display = 'none';
});

//aqui pra cima funções da varinha

function scrollCards(direction) {
  const container = document.getElementById('cardContainer');
  container.scrollBy({
    left: direction * (container.offsetWidth - 32), 
    behavior: 'smooth'
  });
}

//cards aqui pra cima

//menu ativo

document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelectorAll('nav ul li a');

  function updateMenuItem() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      
      if (rect.top <= 100 && rect.bottom >= 80) {
        menuItems.forEach((item) => {
          item.classList.contains('selecionada');
          item.classList.remove('selecionada');
        });
        menuItems[index].classList.add('selecionada');
      }
    });
  }

  window.addEventListener('scroll', updateMenuItem);
});