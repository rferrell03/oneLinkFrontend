import LinkBox from "./components/linkBox";
import "./App.css";
import BackgroundStars from "./components/backgroundStars";
function App() {
  return (
    <div className = "mainContainer">
      <BackgroundStars />
      <div className="centerCard">
        <h1>One Link</h1>
        <LinkBox />
      </div>
    </div>
  );
}

export default App;
