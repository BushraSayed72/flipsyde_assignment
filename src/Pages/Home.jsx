import React from "react";
import PostCard from "../Components/PostCard";
import firstimg from "../Images/first.jpeg";
import PostPage from "./PostPage";

const Home = ({ data, loading }) => {
  console.log("data :>> ", data);
  return (
    <>
      <div>
        <div className="home">
          <div className="home_content">
            <h1 className="home_heading">
              <span className="home_hd">Hello there,</span> <br />
              Welcome to our site
            </h1>
            <p className="home_para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Praesentium inventore illo reiciendis, nisi minima delectus.
            </p>
          </div>

          <div className="home_img">
            <img className="dog-annimated" src={firstimg} />
          </div>
        </div>
        <div>
          <h1 className="latest_heading">
            Latest <span className="latest_events">Events</span>
          </h1>
        </div>

        <main className="post_list">
          {loading ? (
            <div>Loading.....</div>
          ) : (
            data?.map((post) => <PostCard post={post} />)
          )}
        </main>
        <PostPage />
      </div>
    </>
  );
};
export default Home;
