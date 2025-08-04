import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/abishek-ganesh',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/abishekganesh/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/abishek-ganesh',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://angel.co/u/abishekganesh',
    label: 'Angel List',
    icon: faAngellist,
  },
  {
    link: 'mailto:abishek.ganesh30@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
