import "../assests/address.css";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Address() {
  const navigate = useNavigate();
  const [display, setDisplay] = useState(false);
  return (
    <section className="address-container">
      {!display && (
        <>
          <p className="price-heading upper-text large-text text-align-center">
            Add Address
          </p>
          <form>
            <div className="input-block">
              <input type="number" placeholder="10-digit mobile number" />
            </div>
            <div className="input-block">
              <input type="text" placeholder="Area and Street" />
            </div>
            <div className="input-block">
              <input type="text" placeholder="City/Town/District" />
            </div>
            <div className="input-block">
              <input type="text" placeholder="state" />
            </div>
            <div className="input-block">
              <input type="number" placeholder="Pincode" />
            </div>

            <div className="input-block">
              <button
                className="btn upper-text"
                onClick={() => setDisplay((dis) => !dis)}
              >
                Add Address
              </button>
            </div>
          </form>
        </>
      )}

      {display && (
        <article className="address">
          <p className="price-heading upper-text large-text text-align-center">
            Address
          </p>
          <p className="add-detail">address will go here</p>

          <button
            className="btn upper-text"
            onClick={() => navigate("/placeorder")}
          >
            Deliver Here
          </button>
        </article>
      )}
    </section>
  );
}
