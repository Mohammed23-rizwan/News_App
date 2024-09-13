import { useState } from "react";
import Singlenews from "./singlenews";
import { useEffect } from "react";

const Newsmain = () => {
  const [article, setarticles] = useState([]);

  useEffect(() => {
    const Url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(Url)
      .then((response) => response.json())
      .then((data) => setarticles(data.articles));
  }, []);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="text-danger">News</span>
      </h2>
      {article.map((news, index) => {
        return <Singlenews key={index} title={news.title} />;
      })}
    </div>
  );
};

export default Newsmain;
