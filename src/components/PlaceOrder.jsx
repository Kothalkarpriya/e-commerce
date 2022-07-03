import { BsPatchCheckFill } from "react-icons/bs";
import "../assests/address.css";
import { useNavigate } from "react-router-dom";

export default function PlaceOrder() {
  const navigate = useNavigate();
  return (
    <main className="sample">
      <section className="place-order-container">
        <article className="text-align-center">
          <BsPatchCheckFill className="icon" />
          <p className="upper-text text-align-center">Order Confirmed</p>
          <p className="add-detail">Your Order has been placed successfully!</p>

          <button className="btn" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </article>
      </section>
    </main>
  );
}
