import React from "react";
import { Card, Col, Row } from "reactstrap";
import{FaUsers} from 'react-icons/fa'
import {HiUsers} from 'react-icons/hi'
import {BsDatabaseCheck} from 'react-icons/bs'
export default function Users() {
  const cardData = [
    {
      icon: <HiUsers/>,
      title: "USERS",
      value: "2,453",
    },
    {
      icon: <FaUsers/>,
      title: "ACTIVE USERS",
      value: "2,453",
    },
    {
      icon: <BsDatabaseCheck/>,
      title: "USERS WITH LOANS",
      value: "12,453",
    },
    {
      icon: "",
      title: "USERS WITH SAVINGS",
      value: "102,453",
    },
  ];
  return (
    <div className="dashboard_div p-3">
      <p className="dashboard_title">Users</p>
      <Row>
        {cardData.map((item) => (
          <Col md={3}>
            <Card className="dashboard_card p-4 shadow-sm">
              <p className="dashboard_card_title">{item.title}</p>
              <p className="dashboard_card_value">{item.value}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
