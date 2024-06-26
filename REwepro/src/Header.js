import img from "./img/icone/logo.svg";
import phone from "./img/icone/phone.svg";
function Header() {
  return (
    <div className="Header">
      <nav className="nav">
        <div className="logo">
          <img src={img} />
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/">ABOUT US</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/">SERVICES</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/">BLOG</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/">HOW IT WORKS?</a>
            </li>
          </ul>
        </div>
        <div className="help">
          <img src={phone} />
          <p>+1(424)337-6424</p>
        </div>
      </nav>
    </div>
  );
}

export default Header;
