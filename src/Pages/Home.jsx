import { useQuery } from "@tanstack/react-query";
import apiService from "../utils/apiService";
import { Header } from "../Components/Header/Header";
import CompanyCard from "../Components/CompanyCard/CompanyCard";

import "./Home.css";

export const Home = () => {
  const { data: restaurants, isLoading } = useQuery(
    ["restaurants"],
    apiService.getRestaurants
  );
  console.log("restaurants ", restaurants);
  return (
    <div className="App">
      <div className="home-container">
        <div className="info-text">
          {restaurants && (
            <>
              <p>Congratulations, you save 2kg of food this month!</p>
              <p>
                Displaying {restaurants.length} out of {restaurants.length}
              </p>
            </>
          )}
        </div>
        {isLoading && <div>Loading...</div>}
        <div className="cards-wrapper">
          {restaurants &&
            restaurants.map((restaurant) => (
              <CompanyCard company={restaurant} />
            ))}
        </div>
      </div>
    </div>
  );
};
