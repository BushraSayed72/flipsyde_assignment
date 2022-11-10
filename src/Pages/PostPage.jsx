import moment from "moment";
import React from "react";
import { useParams } from "react-router-dom";

function PostPage({ data }) {
  const { id } = useParams();
  const post = data?.filter((e) => e.id === id);

  return (
    <div>
        {
            post?.map((elem) => (

        <div className="border">
      <div className="page_heading">
        <img  src={elem.owner.picture} />
        <div className="pages">
          <h4 className="page_heading">{elem.owner.title + " " + elem.owner.firstName + " " + elem.owner.lastName}</h4>
          <span className="years_ago">{moment(elem.publishDate).fromNow(true)} ago</span>
        </div>
      </div>
      <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque dicta voluptas doloremque suscipit in molestias, ex ad dolor. Libero sunt, rem ea ducimus voluptatibus consequatur tempore officia distinctio ipsam!</p>
      <p className="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa incidunt atque odio, facere repellendus accusantium aliquam. Modi natus ea fugiat odit accusantium quibusdam commodi!</p>
        </div>
            ))
        }
    </div>
  );
}

export default PostPage;
