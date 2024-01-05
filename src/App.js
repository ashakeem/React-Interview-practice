import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components/accordion/Accordion";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";

function App() {
  return (
    <>
      <div>
        {/* Accordion */}
        {/* <Accordion /> */}

        {/* random color */}
        {/* <RandomColor/> */}

        <StarRating numStars={10} />
      </div>
    </>
  );
}

export default App;
