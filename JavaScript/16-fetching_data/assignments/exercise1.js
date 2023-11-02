import axios from "axios";
const getUniversities = async function() {
    try {
        const response = await axios.get('http://universities.hipolabs.com/search?country=Finland');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
getUniversities();
