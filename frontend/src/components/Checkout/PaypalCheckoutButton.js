import {CLIENT_ID} from './config'
import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./payment.css"
import { calculateSubtotal } from '../Cart/Cart';
// import Beauty from "../bestitems/Beauty";

const PaypalCheckoutButton = () => {

    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: "SUB TOTAL",
                    amount: {
                        currency_code: "USD",
                        value: 200,
                    },
                },
            ],
        }).then((orderID) => {
            setOrderID(orderID);
            return orderID;
        });
    };

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
        });
    };

    //capture likely error
    const onError = (data, actions) => {
        setErrorMessage("An Error occured with your payment ");
    };

    useEffect(() => {
        if (success) {
            alert("Payment successful!!");
            console.log('Order successful . Your order id is--', orderID);
        }
    }, [success]);

    return (
        <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
            <div className="paypalpay">

                <PayPalButtons
                    style={{
                        layout: 'vertical',
                        color: 'gold',
                        shape: 'pill',
                        label: 'paypal'
                    }}
                    createOrder={createOrder}
                    onApprove={onApprove}
                />

            </div>
        </PayPalScriptProvider>
    )
}

export default PaypalCheckoutButton;