import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './header.scss';

function Header({ text }) {
  return (
    <header>
      <h1>{text}</h1>
    </header>
  );
}

export default Header;
