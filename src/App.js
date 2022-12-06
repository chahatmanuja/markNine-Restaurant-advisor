import React, { useState } from "react";
import "./styles.css";

var cousineRestaurantData = {
  Mughlai: [
    {
      title: "Karim's",
      rating: 5
    },
    {
      title: "Moti mahal",
      rating: 4
    }
  ],
  NorthIndian: [
    {
      title: "Kaveri",
      rating: 5
    },
    {
      title: "Krsna",
      rating: 5
    }
  ],
  Chinese: [
    {
      title: "Punjabi food express",
      rating: 4.5
    },
    {
      title: "Gupta rolls",
      rating: 4
    }
  ]
};

var cousinesWeKnow = Object.keys(cousineRestaurantData);

export default function App() {
  const [cousine, setCousine] = useState("Mughlai");

  function cousineClickHandler(clickCousine) {
    setCousine(clickCousine);
  }

  function displayRestaurantReview() {
    return (
      <div>
        {cousineRestaurantData[cousine].map((selectedCousieData) => {
          console.log(selectedCousieData);
          return (
            <div className="cousine-info" key={selectedCousieData.title}>
              <h2>Restaurant Name: {selectedCousieData.title}</h2>
              <p>Restaurant Rating: {selectedCousieData.rating}*</p>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Cuisines That Matter</h1>
      {cousinesWeKnow.map(function (clickCousine) {
        return (
          <span
            onClick={() => cousineClickHandler(clickCousine)}
            style={{
              fontSize: "1rem",
              padding: "0.5rem",
              cursor: "pointer",
              borderStyle: "solid",
              marginRight: "1rem",
              borderRadius: "0.5rem"
            }}
            key={clickCousine}
          >
            {clickCousine}{" "}
          </span>
        );
      })}
      <div>{displayRestaurantReview()}</div>
    </div>
  );
}
