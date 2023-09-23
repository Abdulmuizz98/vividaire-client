import "./Header.css";
import {
  VdPerson,
  VdSearch,
  VdFavoriteOutline,
  VdDoublePolygon,
} from "../Icons";

const Header = ({ displayLogo }) => {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li>
            <a href="#">collection</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">articles</a>
          </li>
        </ul>
        <div>
          <a
            href="#"
            className="place-items-center"
            style={{ display: `${!displayLogo && "none"}` }}
          >
            <VdDoublePolygon color="#825E52" width={44} height={44} />
          </a>
        </div>
        <ul>
          <li className="place-items-center">
            <a href="#" className="place-items-center">
              <VdSearch />
            </a>
          </li>
          <li className="place-items-center">
            <a href="#" className="place-items-center">
              <VdPerson />
            </a>
          </li>
          <li className="place-items-center">
            <a href="#" className="place-items-center">
              <VdFavoriteOutline />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
