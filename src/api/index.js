import axios from "axios";

class Api {
    
    getAll = (callBackFun) => {
        let data =[];
        const url = 'https://thecocktaildb.com/api/json/v1/1/search.php?f=a';
        axios.get(url)
            .then(
                async (response) => {
                    data = response.data.drinks;
                    console.log(response.data.drinks);
                    callBackFun(data)
                }
            )
            .catch(error => console.error(error));
    }
}

export default Api;
