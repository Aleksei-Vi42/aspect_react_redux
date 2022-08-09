import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import React from "react"
import { Provider } from "react-redux";
import './App.css';
import Main from "./Main/main";
import store from "./redux/store";

function App() {

  return (
    <Provider store={store}>
    <div className="App">
        <Main />
  
    </div>
    </Provider>
 
  );
}

export default App;
