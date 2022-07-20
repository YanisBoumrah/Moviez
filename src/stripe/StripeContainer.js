import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutForm } from "./CheckoutForm";
import React from "react";
import styled from "styled-components";
import a from "../img/a.png";


const PUBLIC_Key = "pk_test_51Jx8drDvwrSG7rGRNUKuocEUf9xMkURz080ULzL1pF4VBycHFOdkk6USMNNfYTiM4wD0klwPbL0k2FOejtDmmUwR00xERyUHW1";
const stripeTest = loadStripe(PUBLIC_Key);

const Stripe = () =>{

    return(
    <StyleA>
    <Elements stripe={stripeTest} >
    <CheckoutForm></CheckoutForm>
    </Elements>
    <Image src={a}></Image>
    </StyleA>
    )
}

export default Stripe;

const StyleA = styled.div`
text-align: center;
`

const Image = styled.img`
width: 10%;
margin-top: 10px;
`