import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Cart from "../../assets/icons/cart.png";
import Account from "../../assets/icons/index.png";
import "./styles.css";

export const Header = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className="header-container">
      <h1>TooGoodToGo</h1>
      <div className="input-wrapper">
        <FontAwesomeIcon icon={faMagnifyingGlass} color="#ADABAB" />
        <input
          className="search-input"
          placeholder="Search for restaurant in Cluj-Napoca"
        />
      </div>
      <div class="header-actions">
        <img src={Account} alt="account" />
        <img src={Cart} alt="cart" />
      </div>
    </div>
  );
};
