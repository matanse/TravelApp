import React from "react";

export default function CitiesFirst(props) {
  const cities = props.cities;

  return (
    <div className="citiesPicBtn">
      <div className="picCityRow">
        <button>
          {!cities[0] ? (
            <div
              className="cityPic"
              style={{
                backgroundColor: "lightGray",
              }}
            >
              <h2>No city found</h2>
            </div>
          ) : (
            <div
              className="cityPic"
              style={{
                backgroundImage: `url(${cities[0].Img})`,
              }}
            >
              <h2 style={{ backgroundColor: "white" }}>{cities[0].Name}</h2>
            </div>
          )}
        </button>
        <button>
          {!cities[1] ? (
            <div
              className="cityPic"
              style={{
                backgroundColor: "lightGray",
              }}
            >
              <h2>No city found</h2>
            </div>
          ) : (
            <div
              className="cityPic"
              style={{
                backgroundImage: `url(${cities[1].Img})`,
              }}
            >
              <h2 style={{ backgroundColor: "white" }}>{cities[1].Name}</h2>
            </div>
          )}
        </button>
      </div>
      <div className="picCityRow">
        <button>
          {!cities[2] ? (
            <div
              className="cityPic"
              style={{
                backgroundColor: "lightGray",
              }}
            >
              <h2>No city found</h2>
            </div>
          ) : (
            <div
              className="cityPic"
              style={{
                backgroundImage: `url(${cities[2].Img})`,
              }}
            >
              <h2 style={{ backgroundColor: "white" }}>{cities[2].Name}</h2>
            </div>
          )}
        </button>
        <button>
          {!cities[3] ? (
            <div
              className="cityPic"
              style={{
                backgroundColor: "lightGray",
              }}
            >
              <h2>No city found</h2>
            </div>
          ) : (
            <div
              className="cityPic"
              style={{
                backgroundImage: `url(${cities[3].Img})`,
              }}
            >
              <h2 style={{ backgroundColor: "white" }}>{cities[3].Name}</h2>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
