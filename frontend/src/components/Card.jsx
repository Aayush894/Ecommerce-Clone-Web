/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

export default function Card({ ...props }) {
  const dispatch = useDispatchCart();
  let data = useCart();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const priceRef = useRef();

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  let options = props.options;
  // console.log(options[0]) ;
  let priceOptions = Object.keys(options);
  // console.log(priceOptions);

  const handleAddToCart = async () => {
    let food = data.find(item => item.id === props.foodItem._id);
  
    if (food) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty });
        console.log("Item already in cart with same size. Updating quantity.");
      } else {
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size,
          img: props.foodItem.img,
        });
        console.log("Item already in cart but with different size. Adding a new one.");
      }
    } else {
      await dispatch({
        type: "ADD",
        id: props.foodItem._id,
        name: props.foodItem.name,
        price: finalPrice,
        qty: qty,
        size: size,
        img: props.foodItem.img,
      });
      console.log("Item not in cart. Adding new item.");
    }
  };  

  let finalPrice = qty * parseInt(options[size]);
  return (
    <>
      <div
        className="card mt-3 embed-responsive embed-responsive-16by9"
        style={{
          width: "18rem",
          fontFamily: "ariel",
          maxHeight: "360px",
        }}
      >
        <img
          className="card-img-top embed-responsive-item"
          src={props.foodItem.img}
          style={{ height: "120px", objectFit: "fill" }}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <div className="container w-100">
            <select
              className="m-2 h-100 bg-success rounded"
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => {
                return <option key={i + 1}>{i + 1}</option>;
              })}
            </select>
            <select
              className="m-2 h-100 bg-success rounded"
              ref={priceRef}
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {" "}
                    {data}{" "}
                  </option>
                );
              })}
            </select>

            <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
          </div>
          <hr />
          <button
            className="btn btn-success justify-center ms-2"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}
