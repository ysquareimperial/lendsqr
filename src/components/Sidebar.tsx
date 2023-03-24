import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { GoHome, GoGraph } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi";
import { CgToolbox } from "react-icons/cg";
import { BiTransferAlt } from "react-icons/bi";
import { BsDatabase, BsFan, BsSliders2 } from "react-icons/bs";
import { TbBuildingBank } from "react-icons/tb";
import { RiFilePaper2Line } from "react-icons/ri";
import { CiBadgeDollar } from "react-icons/ci";
import {
  FaUsers,
  FaRegHandshake,
  FaUserCheck,
  FaClipboardList,
  FaUserCog,
  FaUserTimes,
} from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
import { MdOutlineSavings } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
export default function Sidebar() {
  const location = useLocation();
  return (
    <div className="sidebar">
      <p className="item_head mt-3">
        Switch Organization <IoIosArrowDown size="1.2rem" />
      </p>
      <p className="sidebar_item mt-3">
        <GoHome size="1.2rem" style={{ marginRight: 10 }} /> Dashboard
      </p>
      <div>
        <p className="item_head mt-3">CUSTOMERS</p>
        <div>
          <p
            className={`sidebar_item ${
              location.pathname === "/users" && "active_sidebar_item"
            }`}
          >
            <HiOutlineUsers size="1.2rem" style={{ marginRight: 10 }} /> Users
          </p>
          <p className="sidebar_item">
            <FaUsers size="1.2rem" style={{ marginRight: 10 }} /> Guarantors
          </p>
          <p className="sidebar_item">
            <TbMoneybag size="1.2rem" style={{ marginRight: 10 }} /> Loans
          </p>
          <p className="sidebar_item">
            <FaRegHandshake size="1.2rem" style={{ marginRight: 10 }} />{" "}
            Decision Models
          </p>
          <p className="sidebar_item">
            <MdOutlineSavings size="1.2rem" style={{ marginRight: 10 }} />{" "}
            Savings
          </p>
          <p className="sidebar_item">
            <GiReceiveMoney size="1.2rem" style={{ marginRight: 10 }} /> Loan
            Requests
          </p>
          <p className="sidebar_item">
            <FaUserCheck size="1.2rem" style={{ marginRight: 10 }} /> White List
          </p>
          <p className="sidebar_item">
            <FaUserTimes size="1.2rem" style={{ marginRight: 10 }} /> Karma
          </p>
        </div>
      </div>
      <div>
        <p className="item_head mt-3">BUSINESSES</p>
        <div>
          <p className="sidebar_item">
            <CgToolbox size="1.2rem" style={{ marginRight: 10 }} />
            Organization
          </p>
          <p className="sidebar_item">
            {" "}
            <GiReceiveMoney size="1.2rem" style={{ marginRight: 10 }} />
            Loan Products
          </p>
          <p className="sidebar_item">
            <TbBuildingBank size="1.2rem" style={{ marginRight: 10 }} />
            Savings Products
          </p>
          {/* <p className="sidebar_item"><BsDatabase size="1.2rem" style={{ marginRight: 10 }}/>Decision Models</p> */}
          <p className="sidebar_item">
            <BsDatabase size="1.2rem" style={{ marginRight: 10 }} />
            Fees and Charges
          </p>
          <p className="sidebar_item">
            <BiTransferAlt size="1.2rem" style={{ marginRight: 10 }} />
            Transactions
          </p>
          <p className="sidebar_item">
            <BsFan size="1.2rem" style={{ marginRight: 10 }} />
            Services
          </p>
          <p className="sidebar_item">
            <FaUserCog size="1.2rem" style={{ marginRight: 10 }} />
            Service Account
          </p>
          <p className="sidebar_item">
            <RiFilePaper2Line size="1.2rem" style={{ marginRight: 10 }} />
            Settlements
          </p>
          <p className="sidebar_item">
            <GoGraph size="1.2rem" style={{ marginRight: 10 }} />
            Reports
          </p>
        </div>
      </div>
      <div>
        <p className="item_head mt-3">SETTINGS</p>
        <div className="mb-3">
          <p className="sidebar_item">
            <BsSliders2 size="1.2rem" style={{ marginRight: 10 }} />
            Preferences
          </p>
          <p className="sidebar_item">
            <CiBadgeDollar size="1.2rem" style={{ marginRight: 10 }} />
            Fees and Pricing
          </p>
          <p className="sidebar_item">
            <FaClipboardList size="1.2rem" style={{ marginRight: 10 }} />
            Audit Logs
          </p>
        </div>
      </div>
    </div>
  );
}
