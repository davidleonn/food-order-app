import React from "react";

import Header from "./features/Layout/Header/components/Header";
import Meals from "./features/Meals/components/Meals";

function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
