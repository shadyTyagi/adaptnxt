import { RiMenuFoldFill } from "react-icons/ri";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";

import { FaRegListAlt } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { LiaFileImportSolid } from "react-icons/lia";
import { PiPrinterThin } from "react-icons/pi";
import { GoPaperAirplane } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import NavigationBar from "./NavigationBar";
import OrderTable from "./OrderTable";
import OrdersTab from "./OrdersTab";
import "./App.css";
import MyComponent from "./MyComponents";
function App() {
  const orderDetailList = [
    "Pending",
    "Accepted",
    "AWB Created",
    "Ready to Ship",
    "Shipped",
    "Completed",
    "Cancelled",
  ];
  return (
    <div className="app-container">
      <NavigationBar />
      <div className="bg-container">
        <OrdersTab />
        <div className="main-container">
          <div className="order-block">
            <p className="order">
              <span className="odr">Orders</span> x
            </p>
          </div>
          <div className="order-detail-card">
            <ul className="order-detail-list">
              {orderDetailList.map((eachItem) => (
                <li className="order-item">{eachItem}</li>
              ))}
            </ul>
            <div className="pending-card">
              <div className="import-accept-print-card">
                <div className="import-card">
                  <p className="import">
                    <LiaFileImportSolid />
                    <span className="import-span">Import Orders</span>
                  </p>
                </div>
                <div className="accept-print-card">
                  <p className="accept-print">
                    <GoPaperAirplane />
                    <span className="accept-print-span">Accept</span>
                  </p>
                </div>
                <div className="accept-print-card">
                  <p className="accept-print">
                    <PiPrinterThin />
                    <span className="accept-print-span">Print</span>
                    <IoIosArrowDown />
                  </p>
                </div>
              </div>
              <OrderTable />
            </div>
          </div>
        </div>
      </div>
      <MyComponent />
    </div>
  );
}

export default App;
