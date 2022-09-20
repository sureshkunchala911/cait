import { BsFillBellFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

import "./index.css";

const Headers = () => (
  <div className="HeaderContainer">
    <div className="headContainer1">
      <h1>My Apps > </h1>
      <span className="span">Tasks</span>
    </div>
    <div className="iconContainer">
      <BsFillBellFill className="bell" />
      <AiOutlineUser className="bell" />
    </div>
  </div>
);
export default Headers;
