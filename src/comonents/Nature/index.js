import { Component } from "react";
import "./index.css";

let imagearray = [
  {
    imageurl:
      "https://static.vecteezy.com/system/resources/previews/031/535/490/large_2x/flowers-in-the-sun-lake-mountains-flowers-nature-nature-hd-wallpaper-ai-generated-free-photo.jpg",
    unicno: 1,
  },
  {
    imageurl:
      "https://static.vecteezy.com/system/resources/previews/030/256/968/large_2x/beautiful-nature-wallpaper-hd-wallpaper-ai-generated-free-photo.jpg",
    unicno: 2,
  },
  {
    imageurl:
      "https://static.vecteezy.com/system/resources/previews/030/292/243/large_2x/lotus-flower-the-sun-reflection-water-nature-nature-hd-wallpaper-ai-generated-free-photo.jpg",
    unicno: 3,
  },
  {
    imageurl:
      "https://c4.wallpaperflare.com/wallpaper/728/272/856/download-nature-background-images-1920x1080-wallpaper-preview.jpg",
    unicno: 4,
  },
  {
    imageurl:
      "https://i.pinimg.com/originals/ce/75/ce/ce75ce616c2c92d8b4b5ac8ccbea656d.jpg",
    unicno: 5,
  },
  {
    imageurl:
      "https://e0.pxfuel.com/wallpapers/570/306/desktop-wallpaper-pacific-islander-pacific-rim-pacific-northwest-and-pacific.jpg",
    unicno: 6,
  },
  {
    imageurl:
      "https://e1.pxfuel.com/desktop-wallpaper/243/321/desktop-wallpaper-5-nature-love-romantic-full-screen.jpg",
    unicno: 7,
  },
  {
    imageurl:
      "https://wallup.net/wp-content/uploads/2019/05/10/650775-flowers-rose-gardens-spring-beauty-romance-love-earth-landscapes-nature-748x438.jpg",
    unicno: 8,
  },
  {
    imageurl:
      "https://e1.pxfuel.com/desktop-wallpaper/945/83/desktop-wallpaper-widescreen-nature-for-mobile-with-best-love-beautiful-love-nature.jpg",
    unicno: 9,
  },
  {
    imageurl:
      "https://cdn.pixabay.com/photo/2019/02/22/10/26/swan-4013225_640.jpg",
    unicno: 10,
  },
];

class Nature extends Component {
  state = { image: imagearray[0].imageurl };
  funclick = (url) => {
    this.setState({ image: url });
  };
  render() {
    let { image } = this.state;
    return (
      <div className="naturecontainer">
        <h2>Nature Gallery Image</h2>
        <img src={image} alt="flower" className="mainimage" />
        <h3>Nature Photography</h3>
        <p>Nature Photography By Kalpana</p>
        <div className="imagecontainer">
          {imagearray.map((obj) => (
            <img
              key={obj.unicno}
              src={obj.imageurl}
              alt="natureimage"
              className={`choiceimage ${
                image == obj.imageurl ? "active" : "inactive"
              }`}
              onClick={() => this.funclick(obj.imageurl)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Nature;
