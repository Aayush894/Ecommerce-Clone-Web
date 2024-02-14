// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function MyOrder() {
    const [orderData, setOrderData] = useState({ orderData: [] });

    const fetchMyOrder = async () => {

        try {
            const response = await fetch("http://localhost:5000/api/myorderData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: localStorage.getItem('userEmail')
                })
            });
            if (!response.ok) {
                throw new Error('Failed to fetch order data');
            }
            const data = await response.json();
            setOrderData(data);
        } catch (error) {
            console.error("Error fetching order data:", error);
            // Handle error here, e.g., show error message to the user
        }
    }

    useEffect(() => {
        fetchMyOrder();
    }, []);

    return (
        <>
            <div>
                <NavBar />
            </div>

            <div className="container mt-5">
                {console.log(orderData)}
                
                {orderData.orderData?.order_data && orderData.orderData.order_data.length !== 0 ? (
                    orderData.orderData.order_data.map((orderItem) => (
                        <div key={orderItem._id} className="card mb-3">
                            <div className="card-header">{orderItem.order_date}</div>
                            <div className="card-body">
                                {orderItem.map((orderDetail, index) => (
                                    <div key={index} className="mb-3">
                                        <h5 className="card-title">{orderDetail.name}</h5>
                                        <p className="card-text">Quantity: {orderDetail.qty}</p>
                                        <p className="card-text">Size: {orderDetail.size}</p>
                                        <p className="card-text">Price: ₹{orderDetail.price}/-</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center">
                        <p><i>Have not Placed Orders Yet</i></p>
                    </div>
                )}
            </div>

            <div>
                <Footer />
            </div>
        </>
    );
}

export default MyOrder;
