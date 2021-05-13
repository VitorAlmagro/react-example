import React  from "react";
import Store from "./components/store";
import { Provider } from "./contexts/ContextTotal";

const App = () => {
  return (
    <Provider>
      <Store />
    </Provider>
  )
}

export default App;
