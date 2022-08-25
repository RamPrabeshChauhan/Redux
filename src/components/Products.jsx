import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";

const Products = () => {
    const dispatch = useDispatch();
    const {data: products, status} = useSelector(state => state.product)
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchProducts())
        
        // const fetchProducts = async () => {
        //     const res = await fetch("https://fakestoreapi.com/products");
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // };
        // fetchProducts();
    }, []);

    const handleAdd = (data) => {
        dispatch(add(data)); //"data" is payload for "add" action
    };

    return (
        <div className="productsWrapper">
            {products.map((data) => {
                return (
                    <div className="card" key={data.id}>
                        <img src={data.image} />
                        <h4>{data.title}</h4>
                        <h5>{data.price}</h5>
                        <button onClick={() => handleAdd(data)} className="btn">
                            Add to Cart
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Products;
