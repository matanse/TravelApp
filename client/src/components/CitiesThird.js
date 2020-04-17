import React from "react";

export default function CitiesThird(props) {
  const cities = props.cities;
  return (
    <div className="citiesPicBtn">
      <div className="picCityRow">
        <button>
          <div
            className="cityPic"
            style={{
              backgroundImage: `url(${cities[0].pic})`,
            }}
          >
            <h2 style={{ backgroundColor: "white" }}>{cities[0].name}</h2>
          </div>
        </button>
        <button>
          <div
            className="cityPic"
            style={{
              backgroundImage: `url(${cities[1].pic})`,
            }}
          >
            <h2 style={{ backgroundColor: "white" }}>{cities[1].name}</h2>
          </div>
        </button>
      </div>
      <div className="picCityRow">
        <button>
          <div
            className="cityPic"
            style={{
              backgroundImage: `url(${cities[2].pic})`,
            }}
          >
            <h2 style={{ backgroundColor: "white" }}>{cities[2].name}</h2>
          </div>
        </button>
        <button>
          <div
            className="cityPic"
            style={{
              backgroundImage: `url(${cities[3].pic})`,
            }}
          >
            <h2 style={{ backgroundColor: "white" }}>{cities[3].name}</h2>
          </div>
        </button>
      </div>
    </div>
  );
}
