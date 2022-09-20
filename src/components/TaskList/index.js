import { BiListOl, BiSearch } from "react-icons/bi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { FaTasks } from "react-icons/fa";

import "./index.css";

const TaskList = () => (
  <div className="HeaderContainer3">
    <div className="taskListContainer">
      <p>Task List </p>
      <div>
        <div className="box">
          <p className="all">
            <BiListOl className="icon" />
            All
          </p>
          <p className="tasks">
            <FaTasks className="icon" />
            My tasks
          </p>
        </div>
      </div>
    </div>
    <div className="searchContainer">
      <div className="search">
        <BiSearch />
        <p>Search Tasks</p>
      </div>
      <div className="search outOf">
        <AiOutlineLeft />
        <p> 6 out of 90 </p>
        <AiOutlineRight />
      </div>
    </div>
    <div className="table">
      <div className="tableTitles">
        <p className="title">Task</p>
        <p className="title">Time</p>
        <p className="title">Date</p>
        <p className="title">Assigned by</p>
        <p className="title">Assigned to</p>
        <p className="title"> </p>
        <p className="title">DeadTime</p>
        <p className="title">Status</p>
        <p className="title">Priority</p>
      </div>
      <hr className="line" />
      <div className="tableTitles">
        <p className="title">BGV of canditates</p>
        <p className="title">2:00PM</p>
        <p className="title">Fri,21 May 22</p>
        <p className="title">Manohar Pathak</p>
        <p className="title">Arvind Karnakar</p>
        <p className="title">
          <span className="tint">AK</span>
          <span className="tint2 tint">Ma</span>
        </p>
        <p className="title">Fri,21 May 22</p>
        <p className="status color5"></p>
        <p className="title">High</p>
      </div>
      <hr className="line" />
      <div className="tableTitles">
        <p className="title">Onboard new client</p>
        <p className="title">2:00PM</p>
        <p className="title">Fri,21 May 22</p>
        <p className="title">Manohar Pathak</p>
        <p className="title">Arvind Karnakar</p>
        <p className="title"> </p>
        <p className="title">Fri,21 May 22</p>
        <p className="status color4"></p>
        <p className="title">High</p>
      </div>
      <hr className="line" />
      <div className="tableTitles">
        <p className="title">BGV of canditates</p>
        <p className="title">2:00PM</p>
        <p className="title">Fri,21 May 22</p>
        <p className="title">Manohar Pathak</p>
        <p className="title">Arvind Karnakar</p>
        <p className="title">
          <span className="tint tint3">AK</span>
          <span className="tint tint4">Ma</span>
          <span className="tint">Ma</span> + 1
        </p>
        <p className="title">Fri,21 May 22</p>
        <p className="status color3"></p>
        <p className="title">Low</p>
      </div>
      <hr className="line" />
      <div className="tableTitles">
        <p className="title">BGV of canditates</p>
        <p className="title">2:00PM</p>
        <p className="title">Fri,21 May 22</p>
        <p className="title">Manohar Pathak</p>
        <p className="title">Arvind Karnakar</p>
        <p className="title"> </p>
        <p className="title">Fri,21 May 22</p>
        <p className="status color2"></p>
        <p className="title">Low</p>
      </div>
      <hr className="line" />
      <div className="tableTitles">
        <p className="title">Onboard new client </p>
        <p className="title">2:00PM</p>
        <p className="title">Fri,21 May 22</p>
        <p className="title">Manohar Pathak</p>
        <p className="title">Arvind Karnakar</p>
        <p className="title"> </p>
        <p className="title">Fri,21 May 22</p>
        <p className="status color1"></p>
        <p className="title">High</p>
      </div>
      <hr className="line" />
      <div className="tableTitles">
        <p className="title">BGV of canditates</p>
        <p className="title">2:00PM</p>
        <p className="title">Fri,21 May 22</p>
        <p className="title">Manohar Pathak</p>
        <p className="title">Arvind Karnakar</p>
        <p className="title"> </p>
        <p className="title">Fri,21 May 22</p>
        <p className="status"></p>
        <p className="title">Medium</p>
      </div>
    </div>
  </div>
);
export default TaskList;
