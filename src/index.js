import './components/style/main.scss';
import './components/header/navigation';
import './components/header/header';
import img from './images/profil.png';
import portfolio from './images/portfolio.png';
import form from './images/formVal.png';
import wallet from './images/wallet.png';
import todo from './images/todolist.png';
import css from './images/css.svg';
import html from './images/html5.svg';
import webpack from './images/webpack.svg';
import sass from './images/sass.svg';
import js from './images/js.svg';
import node from './images/nodejs.svg';
import git from './images/git.png';
import figma from './images/figma.png';
import gsap from './images/gsap.png';

if (process.env.NODE_ENV === 'production') {
  console.log('Production mode');
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development mode');
}
