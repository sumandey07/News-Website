import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            position: "absolute",
            paddingRight: "10px",
            paddingTop: "10px",
            right: "0",
          }}
        >
          <div
            className="badge rounded-pill bg-danger"
            style={{ cursor: "pointer" }}
          >
            {" "}
            {source}{" "}
          </div>
        </div>
        <img
          src={
            !imageUrl
              ? "https://cbl.salfordhomesearch.co.uk/choice/images/shared/noimage.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="News"
        />
        <div className="card-body">
          <h5 className="card-title ham">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
