import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Head from "../components/Head";
import { getOrder } from "@/api/apiOrder"; // Import the getOrder function from your API

const Complete = () => {
  const location = useLocation();
  const [order, setOrder] = useState();
  const orderId = location.state?.orderId; // Assuming orderId is passed in state

  useEffect(() => {
    const fetchOrder = async () => {
      if (orderId) {
        try {
          const response = await getOrder(orderId);
          setOrder(response.data);
        } catch (error) {
          console.error("Error fetching order:", error);
        }
      }
    };

    fetchOrder();
  }, [orderId]);

  console.log(orderId);
  console.log(order);

  return (
    <main className="container min-h-[calc(100vh-130px)]">
      <Head step={3} />
      <section>
        <div className="py-5 flex flex-col items-center justify-center gap-2">
          <p className="text-2xl font-semibold">Thank you 🎉</p>
          <h2 className="text-5xl text-center py-2">
            We received the order
            <br />
            Yours is in order.
          </h2>
        </div>
        {order && (
          <div className="py-5">
            <h3 className="text-3xl">Order Details</h3>
            <div className="mt-4">
              <p>
                <strong>Order ID:</strong> {order._id}
              </p>
              <p>
                <strong>Total Amount:</strong> {order.totalAmount} Bath
              </p>
              <p>
                <strong>Status:</strong> {order.status}
              </p>
              <h4 className="mt-4 text-2xl">Items:</h4>
              <ul>
                {order.items.map((item) => (
                  <li key={item.product._id} className="mt-2">
                    <p>
                      <strong>Product Name:</strong> {item.product.name}
                    </p>
                    <p>
                      <strong>Quantity:</strong> {item.quantity}
                    </p>
                    <p>
                      <strong>Price:</strong> {item.product.price} Bath
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Complete;
