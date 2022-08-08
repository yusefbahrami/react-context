import { createContext } from "react";

export const TestContext = createContext({
  timeArr: [], // an empty array
  setTimeArr: () => {}, // a function
});
