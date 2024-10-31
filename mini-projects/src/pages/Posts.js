import React, { useState, useEffect } from "react";

function Posts() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/posts");
        const result = await response.json();
        console.log(result);
        setData(result.posts);
      } catch (err) {
        console.log(err.message);
        setError(err.message)
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error}</p>
  return (
    <>
      <h2>Posts</h2>
      {console.log(data[0])}
      <p>{data[0].title}</p>
    </>
  );
}

export default Posts;
