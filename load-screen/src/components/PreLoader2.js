import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import * as location from "../1055-world-locations.json";
import * as success from "../1127-success.json";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: location.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: success.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Preloader2() {
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
            <Lottie options={defaultOptions1} height={200} width={200} />
          ) : (
            <Lottie options={defaultOptions2} height={100} width={100} />
          )}
        </>
      ) : (
        <>
          <h1>My Data</h1>
          <br />
          <h5 style={{ position: "absolute", right: "5rem", bottom: "0" }}>
            <a
              style={{ color: "red" }}
              href="https://lottiefiles.com/chrisgannon"
            >
              Animation by Chris Gannon on LottieFiles
            </a>
            <br />
            <a style={{ color: "red" }} href="https://lottiefiles.com/darius">
              Animation by Chris Gannon on LottieFiles
            </a>
          </h5>
        </>
      )}
    </>
  );
}

export default Preloader2;
