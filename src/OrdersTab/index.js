import { AiOutlineDashboard } from "react-icons/ai";
import { IoPricetagOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
import "./index.css";

const OrdersTab = () => {
  return (
    <>
      <div className="orders-tab-container">
        <p className="tab-item">
          <AiOutlineDashboard />
          <sapn className="tab">DashBoard</sapn>
        </p>
        <p className="tab-item">
          <IoPricetagOutline />
          <sapn className="tab">Inventory</sapn>
        </p>
        <p className="tab-item">
          <FaRegListAlt />
          <sapn className="tab">Orders</sapn>
        </p>
        <p className="tab-item">
          <MdOutlineLocalShipping />
          <sapn className="tab">Shipping</sapn>
        </p>
        <p className="tab-item">
          <IoShareSocialOutline />
          <sapn className="tab">Channel</sapn>
        </p>
      </div>
    </>
  );
};

export default OrdersTab;
