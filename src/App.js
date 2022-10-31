import Nav from "./Nav";
import Home from "./Home";
import TopRow from "./TopRow";
import "./assets/css/main.css";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Home />
      <TopRow />
    </div>
  );
};

export default App;
