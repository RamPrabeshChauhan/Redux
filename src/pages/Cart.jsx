import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const handleRemove = (dataId) => {
        dispatch(remove(dataId));
    };

    return (
        <div>
            <h3>Cart</h3>

            <div className="cartWrapper">
                {products.map((data) => (
                    <div className="cartCard">
                        <img src={data.image} alt="" />
                        <h5>{data.title}</h5>
                        <h5>${data.price}</h5>
                        <button onClick={() => handleRemove(data.id)} className="btn">
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
