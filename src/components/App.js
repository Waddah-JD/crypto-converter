import React from "react";

import Converter from "./Converter";
import CurrencyList from "./CurrencyList";

const App = () => {
  return (
    <div className="container">
      <CurrencyList />
      <Converter />
    </div>
  );
};
export default App;
