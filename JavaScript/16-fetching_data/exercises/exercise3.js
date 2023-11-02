import axios from "axios";

const sendPostItem = async function(id) {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts/', {
            "body": "gkjskglkgjljgljglkjr",
            "userId": id,
            "title": "Super",
            
        })
            .then(function (response) {
                console.log("Send a new post item to jsonplaceholder API that you created from scratch.", response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    } 
    catch(error) {
        console.log(error);
    }
}
sendPostItem(11);

const getPostById = async function(id) {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
getPostById(11);
const updatePostTitle = async function(id, newTitle) {
    try {
        const post = await getPostById(id);
        post.title = newTitle;
        const response = await axios.put('https://jsonplaceholder.typicode.com/posts/' + id, post);
        console.log("Based on the item you acquired in exercise 1,\n" + 
        "change its title and send a new version of it to jsonplaceholder API.", response.data);
    } catch (error) {
        console.error(error);
    }
}
updatePostTitle(11, "SuperSankari")