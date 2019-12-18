import React from "react";

import { Colors } from "react-foundation";

import CustomButton from "./components/button/custom-button.component";

const App: React.FC = () => {
  return (
    <div className="App">
      <CustomButton color={Colors.ALERT}>EMPUJAME</CustomButton>
      <CustomButton color={Colors.PRIMARY}>EMPUJAME</CustomButton>
      <CustomButton color={Colors.SECONDARY}>EMPUJAME</CustomButton>
      <CustomButton color={Colors.SUCCESS}>EMPUJAME</CustomButton>
      <CustomButton color={Colors.WARNING}>EMPUJAME</CustomButton>
    </div>
  );
};

export default App;
