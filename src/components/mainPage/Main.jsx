import { useState, useEffect, useCallback } from "react";
import Card from "./card/Card";
import "./Main.css";
import Search from "./search/Search";
import { CgScrollV } from "react-icons/cg";

const Main = () => {
  const [data, setData] = useState([]);

  const callKinoData = useCallback(async () => {
    const response = await fetch(
      "https://imdb-api.com/en/API/MostPopularMovies/k_qm5zki73"
    );
    const responseJson = await response.json();
    setData(responseJson.items);
  }, []);

  const searchKinoData = useCallback(async (title) => {
    const searchResponse = await fetch(
      `https://imdb-api.com/en/API/SearchMovie/k_qm5zki73/${title}`
    );
    const searchResponseJson = await searchResponse.json();
    console.log("searchhhhhh", searchResponseJson);
    setData(searchResponseJson.results);
  }, []);

  useEffect(() => {
    callKinoData();
  }, [callKinoData]);

  return (
    <>
      <h1 className="top-250 " id="start">
        Top Movies 250
      </h1>
      <Search handleSearch={searchKinoData} />
      <a href="#start" className="scroll-link">
        <CgScrollV className="scroll" />
      </a>
      <main>
        {Boolean(data.length) &&
          data.map((item) => {
            return <Card data={item} key={item.id} />;
          })}
      </main>
    </>
  );
};

export default Main;
