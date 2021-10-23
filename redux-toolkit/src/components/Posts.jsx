import React, { useEffect } from "react";

const Posts = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div>
      <h1>
        {props.posts.title} - {props.match?.params.id}
      </h1>
      <p>{props.posts.content}</p>
    </div>
  );
};

export default Posts;
