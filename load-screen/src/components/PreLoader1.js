import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";

function PreLoader1() {
  const [data, setData] = useState([]);

  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setDone(true);
        });
    }, 3000);
  }, []);

  return (
    <>
      {!done ? (
        <ReactLoading type={"bars"} color={"blue"} height={200} width={375} />
      ) : (
        <ul>
          {data.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default PreLoader1;
