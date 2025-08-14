import React, { useState } from "react";
import "../index.css";
import Mealcard from "./Mealcard";
function Mainpage() {
  const [data, setdata] = useState();
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState();
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const myFun = async () => {
    if (search === "") {
      setMsg("Ary Bahi Recipe Name To Enter Kar ly 🤦‍♂️🤦‍♂️😃");
    } else {
      const get = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const jsondata = await get.json();
      // console.log(jsondata.meals);
      setdata(jsondata.meals);
      setMsg("");
    }
  };

  // console.log(data);
  return (
    <>
      <h1 className="head"> Food Recipe App</h1>
      <div className="Container">
        <div className="searchbar">
          <input
            type="text"
            placeholder="Enter Your Dish"
            onChange={handleInput}
          />
          <button onClick={myFun}>Search</button>
        </div>
        <h2 className="msg">{msg}</h2>
        <div>
          <Mealcard detail={data} />
        </div>
      </div>
    </>
  );
}
export default Mainpage;
