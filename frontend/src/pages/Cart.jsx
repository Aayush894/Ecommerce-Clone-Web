/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useCart, useDispatchCart } from "../components/ContextReducer";
import { Link } from "react-router-dom";

function Cart() {
  const data = useCart();
  const dispatch = useDispatchCart();
  const [quantities, setQuantities] = useState(data.map((food) => food.qty));

  const handleDecrement = (index) => {
    if (quantities[index] > 1) {
      const newQuantities = [...quantities];
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
      dispatch({
        type: "UPDATE",
        id: data[index]._id,
        qty: newQuantities[index],
      });
    }
  };

  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
    dispatch({
      type: "UPDATE",
      id: data[index]._id,
      qty: newQuantities[index],
    });
  };

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  // error hai isme
  const handleCheckOut = async () => {
    const userEmail = localStorage.getItem("userEmail"); 
    const response = await fetch("/api/orderData", {
      method: 'POST', 
      headers: {
        "Content-Type": "application/json",
      }, 
     
      
      body: JSON.stringify({
        order_data: data, 
        email:userEmail,
        order_date: new Date().toDateString(),
      })
    });
    // console.log(response); 
    if (response.status === 200) {
      dispatch({type:"DROP"})
    }
  }
  
  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center fs-3">Cart is Empty Now!</div>
      </div>
    );
  }

  const totalPrice = data.reduce((total, food, index) => {
    return total + food.price * quantities[index];
  }, 0);

  return (
    <>
      <div data-bs-spy="scroll">
        <section className="h-100" style={{ backgroundColor: "#eee" }}>
          <div className="container h-100 py-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-10">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                  <div>
                    <p className="mb-0">
                      <span className="text-muted">Sort by:</span>{" "}
                      <Link href="#!" className="text-body">
                        price <i className="fas fa-angle-down mt-1"></i>
                      </Link>
                    </p>
                  </div>
                </div>
                {/* {console.log(data)}  */}
                {data.map((food, index) => {
                  // console.log(food, index);
                  return (
                    <>
                      <div className="card rounded-3 mb-4" key={food._id}>
                        <div className="card-body p-4">
                          <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-md-2 col-lg-2 col-xl-2">
                              <img
                                src={food.img}
                                className="img-fluid rounded-3"
                                alt={food.name}
                              />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                              <p className="lead fw-normal mb-2">{food.name}</p>
                              <p>
                                <span className="text-muted">Size: </span>
                                {food.size}{" "}
                              </p>
                              <p className="quantity">
                                <span className="text-muted">Qty: </span>
                                {quantities[index]}
                              </p>
                            </div>

                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                              <button
                                className="btn btn-link px-2"
                                onClick={() => {
                                  handleDecrement(index);
                                }}
                              >
                                <i className="fas fa-minus"></i>
                              </button>

                              <input
                                id={index}
                                min="0"
                                name="quantity"
                                value={quantities[index]}
                                type="number"
                                className="form-control form-control-sm"
                                onChange={(e) => {
                                  const newQuantities = [...quantities];
                                  newQuantities[index] = parseInt(
                                    e.target.value
                                  );
                                  setQuantities(newQuantities);
                                }}
                              />

                              <button
                                className="btn btn-link px-2"
                                onClick={() => handleIncrement(index)}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h5 className="mb-0">
                                ₹{food.price * quantities[index]}/-
                              </h5>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                              <button
                                type="button"
                                className="btn p-0"
                                alt="delete"
                                onClick={() => handleRemove(index)}
                              >
                                <img
                                  src="../asset/icons_trash.png"
                                  className="fas fa-trash fa-lg"
                                  alt="Delete"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}

                <div>
                  <h1 className="fs-2 text-secondary ">Total Price : ₹{totalPrice}/-</h1>
                </div>

                <div className="card mb-4">
                  <div className="card-body p-3 d-flex flex-row">
                    <div className="form-outline flex-fill">
                      <input
                        type="text"
                        id="form2"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label">Discound code</label>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-warning btn-lg ms-3" style={{width: "100px", height:"50px"}}
                    >
                      Apply
                    </button>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <button
                      type="button"
                      className="btn btn-warning btn-block btn-lg"
                      onClick={handleCheckOut}
                    >
                      Check Out 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Cart;
