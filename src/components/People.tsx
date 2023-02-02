import React, { useState } from "react";

interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
  country: Country;
}

export enum Country {
  India = "India",
  Ca = "Canada",
  Brazil = "Brazil",
}

const People = (props: Props) => {
  const [userName, setUserName] = useState("HARSH");

  const getAge = (name: string): number => {
    return 69;
  };

  return (
    <>
      {/*
      <h1>{userName}</h1>
       <button onClick={() => setUserName("ADSH")}>change User</button> */}
      <h2>Name : {props.name}</h2>
      <h2>Email : {props.email}</h2>
      <h2>Age : {props.age}</h2>
      <h2>
        isMarried :{" "}
        {!props.isMarried ? "Single hi huu bhai" : "Ha bhai ho gayi heee"}
      </h2>
      <h2>
        friends :{" "}
        {props.friends.map((fri: string) => (
          <span key={fri}>{fri} </span>
        ))}
      </h2>
      <h2>{props.country}</h2>
    </>
  );
};

export default People;
