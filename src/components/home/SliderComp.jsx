import { Button } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "../home/css/SliderComp.css";

const SliderComp = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider mt-5">
      <Slider {...settings}>
        <div className="h-[450px]">
          <div className="flex flex-col absolute p-5 bg-transparent mt-[100px] items-center w-[400px] gap-2">
            <h1 className="flex justify-start items-start text-3xl font-bold">
              En Yeni Ürünler{" "}
            </h1>
            <p className="flex justify-start items-start ml-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              inventore est recusandae{" "}
            </p>
            <Button sx={{ textTransform: "capitalize", fontSize: "18px" }}>
              İncele
            </Button>
          </div>
          <img className="w-full h-full" src="images/slider1.jpg" alt="" />
        </div>
        <div className="h-[450px]">
          <div className="slider-2 flex flex-col absolute p-5 bg-transparent mt-[100px] ml-[550px] items-center w-[400px] gap-2">
            <h1 className="flex justify-start items-start text-3xl font-bold">
              İndirimleri Yakala{" "}
            </h1>
            <p className="flex justify-start items-start ml-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              inventore est recusandae{" "}
            </p>
            <Button sx={{ textTransform: "capitalize", fontSize: "18px" }}>
              İncele
            </Button>
          </div>
          <img className="w-full h-full" src="images/slider2.jpg" alt="" />
        </div>
        <div className="h-[450px]">
          <div className="flex flex-col absolute p-5 bg-transparent mt-[100px] items-center w-[400px] gap-2">
            <h1 className="flex justify-start items-start text-3xl font-bold">
              Fırsatları Kaçırma{" "}
            </h1>
            <p className="flex justify-start items-start ml-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              inventore est recusandae{" "}
            </p>
            <Button sx={{ textTransform: "capitalize", fontSize: "18px" }}>
              İncele
            </Button>
          </div>
          <img className="w-full h-full" src="images/slider3.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
