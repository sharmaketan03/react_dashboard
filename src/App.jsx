import "./App.css";
import Dashboard from "./Dashboard";
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";

function App() {
  return (
    <>
      <div className="h-screen ">
        <Header />

        <div className="flex">
          <div>
            <LeftSideBar />
          </div>

          <div className=" mt-[4%] m-[5%]">
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
