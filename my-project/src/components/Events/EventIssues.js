import React from "react";

function EventIssues() {
  // const upperCaseFunc = () => 5.toUpperCase();
  const upperCaseFunc = () => {
    try {
      (5).toUpperCase();
    } catch (e) {
      console.log("Oops, Error ", e.message);
    }
  };
  return <>{upperCaseFunc()} Hello 1</>;
}
export default EventIssues;
