import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components/accordion/Accordion";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";
import { ImageSlider } from "./components/image-slider/ImageSlider";

function App() {
  return (
    <>
      <div>
        {/* Accordion */}
        {/* <Accordion /> */}

        {/* random color */}
        {/* <RandomColor/> */}
        {/* starRating */}
        {/* <StarRating numStars={10} /> */}

        {/* image slider */}
        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          limit={"4"}
          page={"1"}
        />
      </div>
    </>
  );
}

export default App;
