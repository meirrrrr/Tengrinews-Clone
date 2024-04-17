import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../pagination/Pagination";
import "./additionArticles.css";

const AdditionArticles = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(9);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);
  const baseUrl = "http://127.0.0.1:8000/api/article/?format=json";

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      if (Array.isArray(response.data)) {
        setArticles(response.data);
        setFilteredArticles(response.data);
      } else {
        console.error("Ожидался массив, получено:", response.data);
      }
    });
  }, []);

  useEffect(() => {
    let results = articles;
    if (searchTerm) {
      results = articles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredArticles(results);
    setCurrentPage(1);
  }, [searchTerm, articles]);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="news">
      <div className="news-wrapper">
        <div className="news-wrapper__header">
          <h1>Статьи</h1>
          <input
            type="text"
            placeholder="Поиск по новостям..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="news-wrapper__main">
          {currentArticles.map((article, index) => (
            <div key={index} className="newss">
              <img
                src={`https://tengrinews.kz${article.image_src}`}
                alt="img"
              />
              <div className="text">
                <h2>{article.title}</h2>
                <p>{article.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          articlesPerPage={articlesPerPage}
          totalArticles={filteredArticles.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default AdditionArticles;
