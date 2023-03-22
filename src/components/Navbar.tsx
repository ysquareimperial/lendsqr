import React from "react";
import { Search } from "react-feather";
import { Row, Col } from "reactstrap";
import profile from "../images/profile.jpg";
export default function Navbar() {
  return (
    // <div className="">
    <Row className="nav_b m-0">
      <Col md={6} className="nav_left">
        <div className="search_div_input m-0">
          <input
            type="search"
            className="search_input"
            placeholder="Search for anything"
          />
          <button className="search_btn">
            <Search />
          </button>
        </div>
      </Col>
      <Col md={6} className="nav_right">
        <p className="m-0" style={{ textDecoration: "underline" }}>
          Docs 
        </p>
        <img src={profile} alt="profile-picture" className="profile_img" />
        <p className="m-0" style={{ fontWeight:'bold' }}>Adedeji</p>
      </Col>
    </Row>
  );
}
