import React, { useState, useEffect } from "react";
import "./PreLoader3.css";

function PreLoader3() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompeleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setloading(true);
          setTimeout(() => {
            setcompeleted(true);
          }, 1000);
        });
    }, 3000);
  }, []);

  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <div className="spinner">
              <span>Loading...</span>
              <div className="half-spinner"></div>
            </div>
          ) : (
            <div className="completed">&#x2713;</div>
          )}
        </>
      ) : (
        <>
          <h1>My Data</h1>
        </>
      )}
    </>
  );
}

export default PreLoader3;
