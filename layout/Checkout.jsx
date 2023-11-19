import React from "react";
import BlackButton from "../components/BlackButton";
import ActionButton from "../components/ActionButton";
import { Link } from "react-router-dom";
import Input from "../components/Input";

const Checkout = () => {
  return (
    <div className="Checkout">
      <div class="Checkout_container">
        <div class="Checkout_container_left">
          <h1>Billing Details</h1>
          <p>Name</p>
          <Input type="text" placeholder="Your Name" />

          <p>Country/ Region</p>
          <p>
            <b>Bangladesh</b>
          </p>

          <p>State</p>
          <div>
            <select name="state" id="state">
              <option value="dhaka">Dhaka</option>
              <option value="comilla">Comilla</option>
              <option value="barishal">Barishal</option>
              <option value="netrokona">Netrokona</option>
            </select>
          </div>

          <p>Address</p>
          <Input type="text" placeholder="Your full address" />

          <p>Phone</p>
          <Input type="text" placeholder="Your Name" />

          <div>
            <h2>Ship to a different address?</h2>
            <input type="checkbox" name="" id="" />
          </div>
          <div>
            <p>Name</p>
            <Input type="text" placeholder="Your Name" />

            <p>Country/ Region</p>
            <p>
              <b>Bangladesh</b>
            </p>

            <p>State</p>
            <div>
              <select name="state" id="state">
                <option value="dhaka">Dhaka</option>
                <option value="comilla">Comilla</option>
                <option value="barishal">Barishal</option>
                <option value="netrokona">Netrokona</option>
              </select>
            </div>

            <p>Address</p>
            <Input type="text" placeholder="House no & street name" />
            <Input
              type="text"
              placeholder="Apartment, office, suite, etc.(optional)"
            />
          </div>
          <p>Order notes(optional)</p>
          <textarea placeholder="Notes about your order, e.g. Special notes for delivery" />
        </div>
        <div class="Checkout_container_right">
          <h1>YOUR ORDER</h1>
          <div className="Checkout_container_right_header">
            <p>Product</p>
            <p>Total</p>
          </div>
          <hr />
          <div className="Checkout_container_right_product">
            <p>
              Denim Jacket <span>X2</span>
            </p>
            <p>
              <b>$860</b>
            </p>
          </div>
          <hr />
          <div className="Checkout_container_right_subtotal">
            <p>Subtotal</p>
            <p>
              <b>$860</b>
            </p>
          </div>
          <hr />
          <div className="Checkout_container_right_shipping">
            <p>Shipping</p>
            <div className="Checkout_container_right_radio_button">
              <div className="flex">
                <label for="inside">
                  Inside Dhaka: <span>$70</span>
                </label>
                <input type="radio" id="inside" name="shipment" value="60" />
              </div>
              <div className="flex">
                <label for="outside">
                  Outside Dhaka: <span>$120</span>
                </label>
                <input type="radio" id="outside" name="shipment" value="120" />
              </div>
            </div>
          </div>
          <hr />
          <div className="Checkout_container_right_total">
            <p>Total</p>
            <p>
              <b>$860</b>
            </p>
          </div>
          <h2>Payment Method</h2>
          <div className="Checkout_container_right_payment">
            <div className="flex">
              <input type="radio" id="cod" name="payment" value="60" />
              <label for="cod">Cash on delivery</label>
            </div>
            <div className="flex">
              <input type="radio" id="bkash" name="payment" value="120" />
              <label for="bkash">Bkash</label>
            </div>
          </div>
          <p className="Checkout_condition">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our <Link>privacy policys</Link>.
          </p>
          <ActionButton name="PLACE ORDER" />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
