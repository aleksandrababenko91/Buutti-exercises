import axios from 'axios';

console.log("Exercise 1: ");
const getPostById = async function(id) {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
        console.log(response.data);
    } catch (error) {
        console.error(error);
      }
    }   
getPostById(11);

const getUserById = async function(userId) {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + userId);
        console.log(response.data);
    } catch (error) {
        console.log(error);
        }
}
getUserById(5);
 
console.log("Exercise2: add query params");
const getPostComments = async function(id) {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com//comments/', { params: { postId: id } });
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}
getPostComments(10)

