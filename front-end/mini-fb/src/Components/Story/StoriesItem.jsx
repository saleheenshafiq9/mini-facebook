import React from "react";

const StoriesItem = (props) => {
  const bucketUrl = "http://localhost:9000/mybucket/";

  return (
    <div>
      <div className="card col-10 py-2 mx-3" id="reel">
        <p className="pb-1">{props.postmaker}</p>
        <img
          className="card-img-top"
          src={bucketUrl + `${props.image}`}
          height="200px"
          alt={props.postmaker}
        />
        <p className="text-secondary pt-1">{props.time}</p>
      </div>
    </div>
  );
};

export default StoriesItem;
