import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import './App.css';
import { Routes, Route, HashRouter } from "react-router-dom";

export default function App () {
  let apiKey = process.env.REACT_APP_NEWS_API;
  let pageSize = 8;
    return (
      <div>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News apiKey={apiKey} key="general" pageSize={pageSize} country={"us"} category={"general"} />} />
            <Route exact path="/business" element={<News apiKey={apiKey} key="business" pageSize={pageSize} country={"us"} category={"business"} />} />
            <Route exact path="/entertainment" element={<News apiKey={apiKey} key="entertainment" pageSize={pageSize} country={"us"} category={"entertainment"} />} />
            <Route exact path="/health" element={<News apiKey={apiKey} key="health" pageSize={pageSize} country={"us"} category={"health"} />} />
            <Route exact path="/science" element={<News apiKey={apiKey} key="science" pageSize={pageSize} country={"us"} category={"science"} />} />
            <Route exact path="/sports" element={<News apiKey={apiKey} key="sports" pageSize={pageSize} country={"us"} category={"sports"} />} />
            <Route exact path="/technology" element={<News apiKey={apiKey} key="technology" pageSize={pageSize} country={"us"} category={"technology"} />} />
          </Routes>
        </HashRouter>

      </div>
    );
  
}

