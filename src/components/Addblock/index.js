import { AiOutlineLeft, AiOutlineRight, AiFillCalendar } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import Popup from "reactjs-popup";
import Cards from "../Cards";

import "./index.css";

const Addblock = () => (
  <div className="bg2">
    <div className="HeaderContainer2">
      <div className="block1">
        <p className="task">Task</p>
        <div className="date">
          <AiOutlineLeft className="bell" />
          <AiFillCalendar className="calender" />
          <p className="day"> May 9 , 20221 </p>
          <AiOutlineRight className="bell" />
        </div>
      </div>
      <hr className="line" />
      <Cards />
    </div>
    <div>
      <button className="button">
        <BsPlusLg className="calender" />
        <Popup modal className="popup-content" trigger={<p>Add new task </p>}>
          {(close) => (
            <div className="popup">
              <button
                className="closeButton"
                type="button"
                onClick={() => close()}
              >
                <MdClose />
              </button>
              <div className="closingContainer">
                <h1>Add task</h1>
                <hr />
                <div className="closingCard">
                  <div>
                    <h1 className="heading">Task</h1>
                    <p className="boxes123">Get Appontment letter from Hr</p>
                    <p className="label">Description</p>
                    <textarea rows="5" placeholder="description" />
                    <p className="label">Related to </p>
                    <p className="hr">Hr Deaprtment </p>
                  </div>
                  <div className="vl"></div>
                  <div>
                    <h1 className="heading">Assign to</h1>
                    <p className="boxes123 extra1">vish</p>
                    <p className="extra2">
                      Gautam Sharma{" "}
                      <span className="cross">
                        <MdClose />
                      </span>
                    </p>
                    <p className="extra3">
                      Kavish sea{" "}
                      <span className="cross">
                        <MdClose />
                      </span>
                    </p>
                    <p className="extra4">
                      {" "}
                      Harshad jain{" "}
                      <span className="cross">
                        <MdClose />{" "}
                      </span>
                    </p>
                  </div>
                  <div className="vl"></div>
                  <div>
                    <label>select DateandTime</label>
                    <p className="selectDate">
                      date{" "}
                      <span className="dateAndTime">
                        <AiFillCalendar />
                      </span>{" "}
                    </p>

                    <p className="label">Select Priority </p>
                    <label class="container">
                      High
                      <input type="radio" checked="checked" name="radio" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="container">
                      Medium
                      <input type="radio" checked="checked" name="radio" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="container">
                      Low
                      <input type="radio" checked="checked" name="radio" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div className="lastcard">
                  <p className="text">cancel</p>
                  <button className="button123" type="text">
                    Add
                  </button>
                </div>
              </div>
            </div>
          )}
        </Popup>
      </button>
    </div>
  </div>
);
export default Addblock;
