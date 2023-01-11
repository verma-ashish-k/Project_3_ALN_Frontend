import React from "react";
import imgPlaceHolder from "../assets/card-top-temp.jpg";
import VideoPlayer from "./videoPlayer";
import ReactPlayer from "react-player";

interface AppProps {
  url: string
  title: string
  description: string
  index: number
  activeIndex: number|null
  setActiveIndex?: any
}

function VideoThumbCard({url, title, description, index: index, activeIndex, setActiveIndex}: AppProps) {
  console.log(title, activeIndex, index)
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className= "flex justify-center">
      <ReactPlayer
              id={index} height="215px" url={url} playing={activeIndex === index  ? true : false} onPlay={()=>{setActiveIndex(index)}}
      /></div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}
        </p>
      </div>
         </div>
  );
}

export default VideoThumbCard;
