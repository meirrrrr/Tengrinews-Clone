import { Link } from "react-router-dom";
import Head from "../../components/global/Head";
import "./header.css";

const Header = () => {
  return (
    <>
      <Head />
      <header>
        <div className="container paddingsmall nav">
          <nav>
            <ul className="flexcn">
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/article">Статьи</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
