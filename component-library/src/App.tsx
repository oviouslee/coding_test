import "./App.css";
import Scenario from "./Scenario/Scenario";

function App() {
  return (
    <div>
      <Scenario
        onClose={() => {
          console.log("closed");
        }}
      />
    </div>
  );
}

export default App;
