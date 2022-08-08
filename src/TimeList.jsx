import { useContext } from "react";
import Item from "./Item";
import { TestContext } from "./TestContext";

const TimeList = () => {
  const context = useContext(TestContext);
  return (
    <div className="main_time_list">
      {context.timeArr.map((child) => (
        <Item key={Math.random()}>{child}</Item>
      ))}
    </div>
  );
};
export default TimeList;
