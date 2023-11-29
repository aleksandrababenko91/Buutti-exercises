import axios from "axios";

const getUniversities = async function() {
    try {
        const response = await axios.get('http://universities.hipolabs.com/search?country=Finland');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
getUniversities();

getUniversities().then(universities => {
    console.log(universities.map(university => university.name))
});
    