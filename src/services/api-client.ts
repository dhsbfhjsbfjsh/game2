import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        Key:'a080b48cce5e4f0aa0aa0bd34a4b6f7a',
    },
}); 