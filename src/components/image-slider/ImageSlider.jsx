import React, { useEffect ,useState} from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import './styles.css'

export const ImageSlider = ({ url, limit, page }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessgage] =useState(null);
  const [loading, setLoading] =useState(false);

  const fetchImages = async (currentUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${currentUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        
        setImages(data);
        console.log(images);
        setLoading(false);
      }
    } catch (e) {
      setErrorMessgage(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading data</div>;
  }

  if (errorMessage !== null) {
    return <div>Error occoured {errorMessage}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill className=" arrow leftArrow" />
      {images && images.length
        ? images.map((image) => {
            <img
              key={image.id}
              src={image.download_url}
              alt={image.download_url}
              className="current-image"
            />
          })
        : null}

      <BsArrowRightCircleFill className="arrow rightArrow" />
      <span className="circle-indicator">
        {images && images.length
          ? images.map((_, index) => {
              <button key={index} className="current indicator"></button>;
            })
          : null}
      </span>
    </div>
  );
};
