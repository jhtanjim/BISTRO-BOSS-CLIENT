import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCarts from "../../../hooks/useCarts";


const stripePromise = loadStripe(import.meta.env.VITE_Payement_GateWay_PK);
const Payment = () => {
    const [cart] = useCarts()
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <SectionTitle subHeading="please process" heading="Payment"></SectionTitle>
            <h2 className="text-3xl"> Pay your Money First...</h2>
            <Elements stripe={stripePromise}
            >
                <CheckOutForm
                    price={price}
                ></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;