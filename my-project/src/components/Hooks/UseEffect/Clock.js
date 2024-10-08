import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  const formatTime = () => {
    let hours = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let format = hours >= 12 ? "PM" : "AM";
    return `${hours} : ${mins} : ${secs} ${format}`;
  };

  useEffect(() => {
    const intervalTime = setInterval(() => {
      setTime(new Date());
    }, 1000);
    console.log("setInterval");
    return () => {
      console.log("clear");
      clearInterval(intervalTime);
    };
  }, []);

  return (
    <>
      <h1>{formatTime()}</h1>
    </>
  );
}

export default Clock;
