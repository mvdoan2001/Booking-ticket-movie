import React from "react";
import Slider from "react-slick";
import { Tabs } from 'antd';
import styleSlick from '../ReactSlick/MultipleRowSlick.module.css';
import FilmFlip from "../Film/Film_Flip";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}

      style={{ ...style, display: "block", left: '-50px' }}
      onClick={onClick}
    >
    </div>
  );
}

export const MultipleRowSlick = (props) => {
  const { arrFilm } = props;

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const renderFilm = (arrFilm) => {
    return <Slider {...settings}>
      {arrFilm}
    </Slider>
  }

  const renderFilmDC = () => {
    return arrFilm.filter(film => film.dangChieu).map((item, index) => {
      return <div key={index} className="mx-8 mt-10">
        <FilmFlip film={item} />
      </div>
    });
  }

  const renderFilmSC = () => {
    return arrFilm.filter(film => film.sapChieu).map((item, index) => {
      return (
        <div key={index} className="mx-8 mt-10">
          <FilmFlip film={item} />
        </div>
      )
    });
  }
  
  const items = [
    {
      key: '1',
      label: `Đang Chiếu`,
      children: renderFilm(renderFilmDC()),
    },
    {
      key: '2',
      label: `Sắp Chiếu`,
      children: renderFilm(renderFilmSC()),
    },
  ];


  return (
    <div>
      <Tabs centered defaultActiveKey="1" items={items} />
    </div>
  );
}