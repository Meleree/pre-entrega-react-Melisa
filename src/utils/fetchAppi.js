const getProducts = () => {
    return fetch("http://localhost:8000/api/productos")
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

const addProduct = (newProduct) => {
    return fetch("http://localhost:8000/api/productos", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(newProduct)
    })
    .then((response) => response.json())
    .catch((error) => console.log(error))
}
export { getProducts, addProduct }