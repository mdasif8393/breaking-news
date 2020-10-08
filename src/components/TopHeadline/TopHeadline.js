import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles,setArticles] = useState([]);
    useEffect( () => {

        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=eafd1117a39245c2a2aaf0c6cf1ddfd7')
        .then(res => res.json())
        .then (data => setArticles(data.articles));
    }, [])
    return (
        <div>
            <h1>Top Headlines: {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;