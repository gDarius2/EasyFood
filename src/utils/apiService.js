export default {
    getRestaurants: async () => {
        return fetch(' http://localhost:3001/restaurants').then((response) => response.json());
    }
}