import React from "react";
import { ProviderComponent } from "./context/PoviderComponent";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

const LocalApp = () => {
  return (
    <ProviderComponent>
      <ComponentA />
      <br />
      <hr />
      <br />
      <ComponentB />
    </ProviderComponent>
  );
};

export default LocalApp;
