"use client";

const VideoPlayer = ({params}) => {

  return (
    <article>
  
        <iframe src={`https://ok.ru/videoembed/${params.video}`} frameborder="0" allow="autoplay" allowFullScreen  style={{
            position: "absolute", 
            top: "0", 
            left: "0", 
            bottom: "0", 
            right: "0", 
            width: "100%", 
            height: "100%", 
            border: "none", 
            margin: "0", 
            padding: "0", 
            overflow: "hidden", 
            zIndex: "999999"
          }}  
          />
    </article>
  )
}
export default VideoPlayer

