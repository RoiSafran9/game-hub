import axios from "axios";
export default axios.create({
    baseURL: 'https://api.rawg.io/api', 
    params: {
        key:'59248889977a4075a0f420ec4322b9cb'
    }
})