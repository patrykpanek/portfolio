const burger = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-xmark');
const nav = document.querySelector('.nav__container');
const navItem = document.querySelectorAll('.nav__item');
const sections = document.querySelectorAll('section');

const skill = document.querySelector('.itemskills');
const home = document.querySelector('.itemhome');
const projects = document.querySelector('.itemprojects');
const about = document.querySelector('.itemabout');

const changeIcon = () => {
  nav.classList.add('active');
  burger.style.visibility = 'hidden';
  close.style.display = 'block';
};

const closeNav = () => {
  nav.classList.remove('active');
  burger.style.visibility = 'visible';
  close.style.display = 'none';
};

const closeMenu = () => {
  closeNav();
};

const scrollBar = () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 20) {
      current = section.getAttribute('id');
    }
  });

  navItem.forEach((li) => {
    li.classList.remove('color');
    if (li.classList.contains(current)) {
      li.classList.add('color');
    }
  });
};

window.addEventListener('scroll', scrollBar);
about.addEventListener('click', closeMenu);
projects.addEventListener('click', closeMenu);
home.addEventListener('click', closeMenu);
skill.addEventListener('click', closeMenu);
burger.addEventListener('click', changeIcon);
close.addEventListener('click', closeNav);

export default changeIcon;
