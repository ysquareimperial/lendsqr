import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import {useLocation} from 'react-router-dom'
import {GoHome} from 'react-icons/go'
import {HiOutlineUsers} from 'react-icons/hi'
import {FaUsers} from 'react-icons/fa'
export default function Sidebar() {
    const location = useLocation()
  return (
    <div className="sidebar">
      <p className="item_head mt-3">
        Switch Organization <IoIosArrowDown size="1.2rem" />
      </p>
      <p className="sidebar_item mt-3"><GoHome size='1.2rem'/>{' '}Dashboard</p>
      <div>
        <p className="item_head mt-3">CUSTOMERS</p>
        <div>
          <p
            className={`sidebar_item ${
              location.pathname === "/users" && "active_sidebar_item"
            }`}
          >
            <HiOutlineUsers size='1.2rem'/>{' '}Users
          </p>
          <p className="sidebar_item"><FaUsers size='1.2rem'/>{' '}Guarantors</p>
          <p className="sidebar_item">Loans</p>
          <p className="sidebar_item">Decision Models</p>
          <p className="sidebar_item">Savings</p>
          <p className="sidebar_item">Loan Requests</p>
          <p className="sidebar_item">White List</p>
          <p className="sidebar_item">Karma</p>
        </div>
      </div>
      <div>
        <p className="item_head mt-3">BUSINESSES</p>
        <div>
          <p className="sidebar_item">Organization</p>
          <p className="sidebar_item">Loan Products</p>
          <p className="sidebar_item">Savings Products</p>
          <p className="sidebar_item">Decision Models</p>
          <p className="sidebar_item">Fees and Charges</p>
          <p className="sidebar_item">Transactions</p>
          <p className="sidebar_item">Services</p>
          <p className="sidebar_item">Service Account</p>
          <p className="sidebar_item">Settlements</p>
          <p className="sidebar_item">Reports</p>
        </div>
      </div>
      <div>
        <p className="item_head mt-3">SETTINGS</p>
        <div>
          <p className="sidebar_item">Preferences</p>
          <p className="sidebar_item">Fees and Pricing</p>
          <p className="sidebar_item">Audit Logs</p>
        </div>
      </div>
    </div>
  );
}
