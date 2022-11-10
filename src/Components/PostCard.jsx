import React from "react";
import "../Style/Card.css";
import moment from "moment/moment";
// import { Link , useHistory} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PostCardNew = ({ post }) => {
  const { id, image, tags, text, owner, publishDate } = post;
  const navigate = useNavigate();

  return (
      <div class="card" onClick={()=>{  navigate(`/post/${id}`);}}>
        <div class="img">
          <img className="exercise-image" src={image} />
        </div>
        <div class="content">
          <h3>{tags}</h3>
          <p>{text}</p>
        </div>
        <div className="post_owner">
          <img src={owner.picture} />
          <div>
            <h4>
              {owner.title + " " + owner.firstName + " " + owner.lastName}
            </h4>
            <span>{moment(publishDate).fromNow(true)} ago</span>
          </div>
        </div>
      </div>
  );
};

export default PostCardNew;
