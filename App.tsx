import { Provider, useSelector } from "react-redux";

import React from "react";
import ToggleTheme from "./src/screens/toggle";
import store from "./src/services/store";

const App = () => {
    
  return(
    <Provider store={store}>
      <ToggleTheme/>      
    </Provider>
  );
};

export default App;