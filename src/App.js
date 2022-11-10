import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";

import About from "./Pages/About";

import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import PostPage from "./Pages/PostPage";

function App() {
  const [apiRes, setApiRes] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://dummyapi.io/data/v1/post?limit=10", {
      method: "get",
      headers: {
        "app-id": process.env.REACT_APP_API_ID,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setApiRes(json.data);
      });
      setLoading(false);

  }, []);
  console.log("apiRes :>> ", apiRes);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={apiRes} loading={loading}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<PostPage data={apiRes} />} />
      </Routes>
    </>
  );
}

export default App;
