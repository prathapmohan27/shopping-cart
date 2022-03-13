import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faBagShopping,
} from '@fortawesome/free-solid-svg-icons';
import { Header, Span, Li, NavLink } from '../style/navBarStyle';

function NavBar() {
  return (
    <Header>
      <h1>
        <FontAwesomeIcon icon={faBagShopping} />
        MyShop
      </h1>
      <nav>
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/product">
            <li>Product</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <Li>
            <FontAwesomeIcon icon={faCartShopping} />
            <Span>0</Span>
          </Li>
        </ul>
      </nav>
    </Header>
  );
}

export default NavBar;
