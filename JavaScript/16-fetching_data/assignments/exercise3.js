import axios from "axios";
const getFakeStoreProducts = async function() {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
            return response.data; 
    } catch (error) {
            console.error(error);
    }
}
getFakeStoreProducts();

getFakeStoreProducts().then(products => {
    console.log("Print name products: ", products.map(product => product.title))
});

const addFakeStoreProduct = async function(name, price, description, category) {
    try {
        const resp = await axios.post('https://fakestoreapi.com/products', {
            "name": name,
            "description": description,
            "price": price,
            "category": category
        })
            .then(function(resp) {
                console.log("Send a new params", resp.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    } 
    catch(error) {
        console.log(error);
    }
}
addFakeStoreProduct("mekko", "cotton", 20, "women wear");
addFakeStoreProduct("skarf", "silk", 5, "kids wear");


const deleteFakeStoreProduct = async function(id) {
    try {
        const res = await axios.delete('https://fakestoreapi.com/products/' + id);     
        console.log("Delete product: ", res.data);
    } catch(error) {
        console.log(error);
    }
}
deleteFakeStoreProduct(2)


