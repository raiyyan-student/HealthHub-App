import React from "react";

const ExpertAdvice = () => {
  // Sample articles
  const articles = [
    {
      title: "The Benefits of Regular Exercise",
      summary: "Regular exercise is essential for maintaining physical and mental health. Learn more about its benefits."
    },
    {
      title: "Healthy Eating Tips",
      summary: "Discover tips for a balanced diet and how to incorporate healthy eating habits into your daily routine."
    },
    {
      title: "Managing Stress Effectively",
      summary: "Explore techniques for managing stress and improving your overall well-being."
    }
  ];

  return (
    <div className="expert-advice-container">
      <h2>Expert Advice</h2>
      <p>Read articles and tips from health experts:</p>
      <ul>
        {articles.map((article, index) => (
          <li key={index} className="article-item">
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
            <a href="#" className="read-more">Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpertAdvice;