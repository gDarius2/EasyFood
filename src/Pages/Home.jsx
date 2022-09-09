import {useQuery} from "@tanstack/react-query";
import "../App.css";
import apiService from "../utils/apiService";
import { Header } from "../Components/Header/Header";

export const Home = () => {
  const { data: restaurants, isLoading } = useQuery(['restaurants'], apiService.getRestaurants);
  console.log('restaurants ', restaurants);
  return (
    <div className="App">
      <Header />
      {isLoading && <div>Loading...</div>}
      { restaurants && <ul>{restaurants.map( restaurant => <li key={restaurant.id}>{restaurant.name} <img src={`/images/${restaurant.logo}`} /></li>)}</ul>}
    </div>
  );
};
