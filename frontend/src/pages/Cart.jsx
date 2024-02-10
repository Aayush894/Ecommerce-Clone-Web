/* eslint-disable no-unused-vars */
import React from "react";
import { useCart, useDispatchCart } from "../components/ContextReducer";
// import trash from '../thrash.svg';

function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center fs-3">Cart is Empty Now!</div>
      </div>
    );
  }
  const hadleCheckOut = () => {};
  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  return (
    <>
    <div>
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                <div>
                  <p className="mb-0">
                    <span className="text-muted">Sort by:</span>{" "}
                    <a href="#!" className="text-body">
                      price <i className="fas fa-angle-down mt-1"></i>
                    </a>
                  </p>
                </div>
              </div>
              {/* {console.log(data)}  */}
              {data.map((food, index) => {
                console.log(food, index);
                return (
                <>
                  <div className="card rounded-3 mb-4">
                    <div className="card-body p-4">
                      <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src= {food.img}
                            className="img-fluid rounded-3"
                            alt={food.name}
                          />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <p className="lead fw-normal mb-2">{food.name}</p>
                          <p>
                            <span className="text-muted">Size: </span>
                            {food.size}{" "}
                            <span className="text-muted">Qty: </span>
                            {food.qty}
                          </p>
                        </div>

                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button
                            className="btn btn-link px-2"
                            onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          >
                            <i className="fas fa-minus"></i>
                          </button>

                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            value={food.qty}
                            type="number"
                            className="form-control form-control-sm"
                          />

                          <button
                            className="btn btn-link px-2"
                            onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h5 className="mb-0">{food.price}</h5>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <button
                            type="button"
                            className="btn p-0"
                            alt="delete"
                            onClick={() => {
                              dispatch({ type: "REMOVE", index: index });
                            }}
                          >
                            <i className="fas fa-trash fa-lg"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
                );
              })}

              <div>
                <h1 className="fs-2">Total Price : {totalPrice}/-</h1>
              </div>

              <div className="card mb-4">
                <div className="card-body p-4 d-flex flex-row">
                  <div className="form-outline flex-fill">
                    <input
                      type="text"
                      id="form1"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">Discound code</label>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-warning btn-lg ms-3"
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
                  >
                    Proceed to Pay
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
