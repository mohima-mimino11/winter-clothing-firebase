

const Banner = () => {
  return (
    <div className="">
      <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://pmedia.launchgood.com/137986%2Fbody%2FFacebook_Cover-Winter_Drive_launchgood.jpg"
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://bgcpbc.org/wp-content/uploads/2021/02/Craftivism-2-scaled-1.jpg"
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://backend.alwahabfoundation.org/wp-content/uploads/2024/11/winter-survival-kits-awf-afghanistan.jpg"
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://pmedia.launchgood.com/180515%2Fbody%2FAfgha_1.jpg"
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Banner;