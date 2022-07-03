import "../assests/address.css";
import { useNavigate } from "react-router";

export default function Address() {
  const navigate = useNavigate();

  return (
    <section className="address-container">
      <article className="address">
        <p className="price-heading upper-text large-text text-align-center">
          Address
        </p>
        <div className="add-detail">
          <p className="name-address">Priya Kothalkar</p>
          <p>
            <small>Mhada Colony, </small>
            <small>Aurangabad, </small>
            <small>Maharashtra, </small>
            <small>431001, </small>
            <small>India </small>
            <small>9856784521</small>
          </p>
        </div>

        <button
          className="btn upper-text"
          onClick={() => {
            navigate("/placeorder");
          }}
        >
          Deliver Here
        </button>
      </article>
    </section>
  );
}
