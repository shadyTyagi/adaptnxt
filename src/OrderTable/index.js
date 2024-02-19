import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import "./index.css";
const OrderTable = () => {
  return (
    <>
      <div className="panding-card-details-topic">
        <input className="card-checkbox" type="checkbox" />
        <h1 className="head channel">Channel</h1>
        <h1 className="head orderno">Order No</h1>
        <h1 className="head order-date">Order Date</h1>
        <h1 className="head city">City</h1>
        <h1 className="head customer-name">Customer Name</h1>
        <h1 className="head order-value">Order Value</h1>
        <h1 className="head status">Status</h1>
        <h1 className="head operation">Operation</h1>
      </div>
      <div className="customer-detail-card first">
        <p className="add">+</p>
        <input className="checkbox-input" type="checkbox" />
        <img
          src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1708297462/Shopify_rqugtc.webp"
          alt="shopify"
          className="shopify-img"
        />
        <p className="customer-order-no">#TKN20203754</p>
        <p className="customer-order-date">2022-05-04</p>
        <p className="customer-city">Locknow</p>
        <p className="name-customer">Abhishek Dixit</p>
        <p className="customer-order-value">0.0</p>
        <p className="customer-order-pending">pending</p>
        <select className="customer-operation">
          <option>Action</option>
        </select>
      </div>
      <div className="customer-detail-card">
        <p className="add">+</p>
        <input className="checkbox-input" type="checkbox" />
        <img
          src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1708297462/Shopify_rqugtc.webp"
          alt="shopify"
          className="shopify-img"
        />
        <p className="customer-order-no">#TKN20203754</p>
        <p className="customer-order-date">2022-05-04</p>
        <p className="customer-city">Locknow</p>
        <p className="name-customer">Abhishek Dixit</p>
        <p className="customer-order-value">0.0</p>
        <p className="customer-order-pending">pending</p>
        <select className="customer-operation">
          <option>Action</option>
        </select>
      </div>
      <div className="customer-detail-card">
        <p className="add">+</p>
        <input className="checkbox-input" type="checkbox" />
        <img
          src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1708297462/Shopify_rqugtc.webp"
          alt="shopify"
          className="shopify-img"
        />
        <p className="customer-order-no">#TKN20203754</p>
        <p className="customer-order-date">2022-05-04</p>
        <p className="customer-city">Locknow</p>
        <p className="name-customer">Abhishek Dixit</p>
        <p className="customer-order-value">0.0</p>
        <p className="customer-order-pending">pending</p>
        <select className="customer-operation">
          <option>Action</option>
        </select>
      </div>
      <div className="backword-forwaord-card">
        <div className="arrow">
          <MdArrowBackIos />
        </div>
        <div className="page-no">1</div>
        <div className="arrow">
          <MdArrowForwardIos />
        </div>
        <select className="pages">
          <option>20 / pages</option>
        </select>
      </div>
    </>
  );
};

export default OrderTable;
