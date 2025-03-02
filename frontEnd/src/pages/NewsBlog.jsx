import React from "react";
import "./NewsBlog.css";

const newsArticles = [
  {
    type: "News",
    date: "02 Feb",
    title: "CCTV Footage: Thief Uses Child As A Cover While Lifting Bike In Dhaka...",
    image: "../../assets/images/news1.jpg",
    link: "#",
  },
  {
    type: "Blog",
    date: "24 Jan",
    title: "Lyari Gang War Criminals Among 25 Arrested In Cumilla...",
    image: "../../assets/images/news2.jpg",
    link: "#",
  },
];

const NewsBlog = () => {
  return (
    <section className="news-blog-section">
      <h2 className="news-blog-title">News and Blog Of Recent Crimes</h2>
      <p className="news-blog-subtitle">Crime in Bangladesh: What’s Happening Now?</p>

      <div className="news-blog-container">
        {newsArticles.map((article, index) => (
          <div key={index} className="news-card">
            <div className="news-image">
              <img src={article.image} alt={article.title} />
              <span className={`news-tag ${article.type.toLowerCase()}`}>{article.type}</span>
            </div>
            <div className="news-content">
              <span className="news-date">{article.date}</span>
              <h3 className="news-title">{article.title}</h3>
              <a href={article.link} className="read-more">
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsBlog;
