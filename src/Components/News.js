import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    updateNews();
  }, []);

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=15a08c64f5a34ba881f659617ec36e73&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(80);
    setPage(page);
    setLoading(false);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
    console.log(totalResults);
  };

  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=15a08c64f5a34ba881f659617ec36e73&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setPage(page);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "30px 0px", marginTop:"90px" }}>
        NewsMonkey - Top Headlines
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length <= totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {!loading &&
              articles.map((elem, index)    => {
                return (
                  <div className="col-md-4 my-2" key={index}>
                    <NewsItem
                      
                      title={elem.title ? elem.title : ""}
                      description={elem.description ? elem.description : ""}
                      imageUrl={elem.urlToImage}
                      newsUrl={elem.url}
                      date={elem.publishedAt}
                      author={elem.author}
                      source={elem.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;
News.defaultProps = {
  country: "in",
  pageSize: 9,
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
};
