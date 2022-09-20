import Headers from "../Headers";
import Sidebar from "../Sidebar";
import Addblock from "../Addblock";
import TaskList from "../TaskList";
import SortBy from "../SortBy";
import "./index.css";

const Home = () => {
  return (
    <div className="backg">
      <Sidebar />
      <div>
        <Headers />
        <Addblock />
        <SortBy />
        <TaskList />
      </div>
    </div>
  );
};
export default Home;
