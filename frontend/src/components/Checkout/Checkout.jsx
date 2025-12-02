
import React, { useState, useEffect } from "react";
import styles from "../../styles/styles";
import { Country, State } from "country-state-city";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const Checkout = () => {
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [userInfo, setUserInfo] = useState(false);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [couponCodeData, setCouponCodeData] = useState(null);
  const [discountPrice, setDiscountPrice] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subTotalPrice = cart.reduce(
    (acc, item) => acc + item.qty * item.discountPrice,
    0
  );

  const shipping = subTotalPrice * 0.1;

  const discountPercent = couponCodeData ? discountPrice : 0;

  const totalPrice = couponCodeData
    ? (subTotalPrice + shipping - discountPercent).toFixed(2)
    : (subTotalPrice + shipping).toFixed(2);

  const handleCouponSubmit = async (e) => {
    e.preventDefault();
    if (!couponCode) return;

    try {
      const { data: res } = await axios.get(
        `${server}/coupon/get-coupon-value/${couponCode}`
      );

      if (!res.couponCode) {
        toast.error("Coupon code doesn't exist!");
        setCouponCode("");
        return;
      }

      const shopId = res.couponCode.shopId;
      const couponValue = res.couponCode.value;
      const eligibleItems = cart.filter((item) => item.shopId === shopId);

      if (!eligibleItems.length) {
        toast.error("Coupon code is not valid for this shop");
        setCouponCode("");
        return;
      }

      const eligiblePrice = eligibleItems.reduce(
        (acc, item) => acc + item.qty * item.discountPrice,
        0
      );

      setDiscountPrice((eligiblePrice * couponValue) / 100);
      setCouponCodeData(res.couponCode);
      setCouponCode("");
      toast.success("Coupon applied successfully!");
    } catch (error) {
      toast.error("Error applying coupon code!");
    }
  };

  const handlePayment = () => {
    if (!address1 || !address2 || !zipCode || !country || !city) {
      toast.error("Please fill in all delivery details!");
      return;
    }

    const shippingAddress = { address1, address2, zipCode, country, city };
    const orderData = {
      cart,
      subTotalPrice,
      shipping,
      discountPrice,
      totalPrice,
      shippingAddress,
      user,
    };

    localStorage.setItem("latestOrder", JSON.stringify(orderData));
    navigate("/payment");
  };

  return (
    <div className="w-full flex flex-col items-center py-8 px-2 sm:px-6">
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-6">
        {/* Shipping Info */}
        <div className="w-full lg:w-[65%]">
          <ShippingInfo
            user={user}
            country={country}
            setCountry={setCountry}
            city={city}
            setCity={setCity}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            address1={address1}
            setAddress1={setAddress1}
            address2={address2}
            setAddress2={setAddress2}
            zipCode={zipCode}
            setZipCode={setZipCode}
          />
        </div>

        {/* Cart & Coupon */}
        <div className="w-full lg:w-[35%]">
          <CartSummary
            subTotalPrice={subTotalPrice}
            shipping={shipping}
            discountPercent={discountPercent}
            totalPrice={totalPrice}
            couponCode={couponCode}
            setCouponCode={setCouponCode}
            handleCouponSubmit={handleCouponSubmit}
          />
        </div>
      </div>

      {/* Proceed to Payment */}
      <div
        className={`${styles.button} w-full sm:w-[300px] mt-6 text-center`}
        onClick={handlePayment}
      >
        <h5 className="text-white">Proceed to Payment</h5>
      </div>
    </div>
  );
};

const ShippingInfo = ({
  user,
  country,
  setCountry,
  city,
  setCity,
  userInfo,
  setUserInfo,
  address1,
  setAddress1,
  address2,
  setAddress2,
  zipCode,
  setZipCode,
}) => {
  return (
    <div className="w-full bg-white rounded-md p-5 shadow-sm">
      <h5 className="text-lg font-semibold mb-4">Shipping Address</h5>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block pb-1">Full Name</label>
            <input
              type="text"
              value={user?.name}
              readOnly
              className={`${styles.input} w-full`}
            />
          </div>
          <div className="flex-1">
            <label className="block pb-1">Email</label>
            <input
              type="email"
              value={user?.email}
              readOnly
              className={`${styles.input} w-full`}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block pb-1">Phone</label>
            <input
              type="text"
              value={user?.phoneNumber}
              readOnly
              className={`${styles.input} w-full`}
            />
          </div>
          <div className="flex-1">
            <label className="block pb-1">Zip Code</label>
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className={`${styles.input} w-full`}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block pb-1">Country</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border h-[40px] rounded-md px-2"
            >
              <option value="">Select Country</option>
              {Country.getAllCountries().map((c) => (
                <option key={c.isoCode} value={c.isoCode}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block pb-1">City</label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border h-[40px] rounded-md px-2"
            >
              <option value="">Select City</option>
              {State.getStatesOfCountry(country).map((s) => (
                <option key={s.isoCode} value={s.isoCode}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block pb-1">Address 1</label>
            <input
              type="text"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
              className={`${styles.input} w-full`}
            />
          </div>
          <div className="flex-1">
            <label className="block pb-1">Address 2</label>
            <input
              type="text"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
              className={`${styles.input} w-full`}
            />
          </div>
        </div>

        <h5
          className="text-blue-600 cursor-pointer mt-2"
          onClick={() => setUserInfo(!userInfo)}
        >
          Choose From Saved Address
        </h5>

        {userInfo &&
          user?.addresses?.map((addr, idx) => (
            <div key={idx} className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                className="cursor-pointer"
                onClick={() => {
                  setAddress1(addr.address1);
                  setAddress2(addr.address2);
                  setZipCode(addr.zipCode);
                  setCountry(addr.country);
                  setCity(addr.city);
                }}
              />
              <span>{addr.addressType}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

const CartSummary = ({
  subTotalPrice,
  shipping,
  discountPercent,
  totalPrice,
  couponCode,
  setCouponCode,
  handleCouponSubmit,
}) => {
  return (
    <div className="w-full bg-white rounded-md p-5 shadow-sm flex flex-col gap-4">
      <div className="flex justify-between">
        <span>Subtotal:</span>
        <span>${subTotalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span>Shipping:</span>
        <span>${shipping.toFixed(2)}</span>
      </div>
      <div className="flex justify-between border-b pb-2">
        <span>Discount:</span>
        <span>- ${discountPercent ? discountPercent.toFixed(2) : "0.00"}</span>
      </div>
      <div className="flex justify-between font-semibold text-lg pt-2">
        <span>Total:</span>
        <span>${totalPrice}</span>
      </div>

      <form onSubmit={handleCouponSubmit} className="flex flex-col gap-2 mt-4">
        <input
          type="text"
          placeholder="Coupon code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className={`${styles.input} w-full h-[40px] px-2`}
        />
        <input
          type="submit"
          value="Apply Coupon"
          className="w-full h-[40px] bg-red-600 text-white font-semibold rounded-md cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Checkout;
