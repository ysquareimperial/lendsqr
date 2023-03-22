import React from "react";
import { Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <Row className="m-0 ">
        <Col md={6} className='auth_left_div'></Col>
        <Col md={6} className="auth_right_div">
          <div className="" style={{ width: "65%" }}>
            <div>
              <p className="auth_message">Welcome!</p>
              <p className="auth_desc">Enter details to login.</p>
            </div>
            <div className="app_div_input">
              <input className="app_input" placeholder="Email" />
            </div>
            <div className="app_div_input">
              <input className="app_input" placeholder="Password" />
              <button className="show_btn">SHOW</button>
            </div>
            <p className="f_password">FORGOT PASSWORD?</p>
            <div>
              <button className="auth_btn" onClick={()=>navigate('/users')}>LOG IN</button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
