import React from "react";
import { Link } from "react-router-dom";
import "./User.css";
import Avatar from "../UIElements/Avatar";
import Card from "../UIElements/Card";

const UserItem = (props) => {
  return (
    <div>
      <li className="user-item">
        <Card className="user-item__content">
          <Link to={`/${props.id}/thoughts`}>
            <div className="user-item__image m-4 mt-5">
              <Avatar
                image={`http://localhost:5000/${props.image}`}
                alt={props.name}
              />
            </div>

            <div className="user-item__info">
              <h2 className="pt-3">{props.name}</h2>
            </div>
          </Link>
        </Card>
      </li>
    </div>
  );
};

export default UserItem;
