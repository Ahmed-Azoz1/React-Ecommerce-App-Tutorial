// For Add Item to Cart
export const addCart = (product)=>{
    return{
        type: "Additem",
        payload : product
    }
}

// For Delete Item to Cart
export const deleteCart = (product)=>{
    return{
        type: "Delitem",
        payload : product
    }
}