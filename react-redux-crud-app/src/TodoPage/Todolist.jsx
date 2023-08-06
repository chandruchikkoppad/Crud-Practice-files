import React from "react";
import { Provider } from "react-redux"; 
import store from "../redux/Store";
import ViewPage from "../components/pages/ViewPage";

const Todolist = () => {
  return <provider store={store}>
    <ViewPage/>
  </provider>;
};

export default Todolist;
