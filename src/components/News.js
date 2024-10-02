import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();

        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews();
    }, []);

    const fetchMoreData = async () => {
        setPage(page + 1);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults);
    }

    const generateUniqueKey = (url) => {
        return `${url}-${Math.random().toString(36).substr(2, 9)}`;
    }

    return (
        <>
            <h1 className="text-center" style={{ color: "white", margin: "56px 0px", backgroundColor: "black", height: "6rem", paddingTop: "20px" }}>Top {capitalizeFirstLetter(props.category)} HeadLines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}
            >

                <div className="container my-3">
                    <div className="row" >
                        {articles.map((element) => {
                            return element && (<div className="col-md-3 my-3" key={generateUniqueKey(element.url)}>
                                <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} newsurl={element.url} imgurl={element.urlToImage} author={element.author} date={element.publishedAt} />
                            </div>
                            )
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>

    );

}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

