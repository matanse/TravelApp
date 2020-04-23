import React from "react";

export default function CitiesSecond(props) {
  const cities = props.cities;
  return (
    <div className="citiesPicBtn">
      <div className="picCityRow">
        <button>
          <div
            className="cityPic"
            style={{
              backgroundImage: `url(${cities[0].Img})`,
            }}
          >
            <h2 style={{ backgroundColor: "white" }}>{cities[0].Name}</h2>
          </div>
        </button>
        <button>
          <div
            className="cityPic"
            style={{ backgroundImage: `url(${cities[1].Img})` }}
          >
            <h2 style={{ backgroundColor: "white" }}>{cities[1].Name}</h2>
          </div>
        </button>
      </div>
      <div className="picCityRow">
        <button>
          <div
            className="cityPic"
            style={{ backgroundImage: `url(${cities[2].Img})` }}
          >
            <h2 style={{ backgroundColor: "white" }}>{cities[2].Name}</h2>
          </div>
        </button>
        <button>
          <div
            className="cityPic"
            style={{ backgroundImage: `url(${cities[3].Img})` }}
          >
            <h2 style={{ backgroundColor: "white" }}>{cities[3].Name}</h2>
          </div>
        </button>
      </div>
    </div>
  );
}
