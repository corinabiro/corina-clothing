import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Router from "./routes/router";
import { checkUserSession } from "./store/user/user.action";

import { GlobalStyle } from "./global.styles";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Router></Router>
    </div>
  );
};

export default App;
