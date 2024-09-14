import { useState } from "react";
import Singlenews from "./singlenews";
import { useEffect } from "react";

const Newsmain = ({ category }) => {
  const [article, setarticles] = useState([]);

  useEffect(() => {
    const Url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(Url)
      .then((response) => response.json())
      .then((data) => setarticles(data.articles));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="text-danger">News</span>
      </h2>
      {article.map((news, index) => {
        return (
          <Singlenews
            key={index}
            title={news.title}
            description={news.description}
            url={news.url}
            img={news.urlToImage}
          />
        );
      })}
    </div>
  );
};

export default Newsmain;
