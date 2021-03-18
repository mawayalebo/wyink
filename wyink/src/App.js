import NavBar from "./navBar";
import Search from "./search";
import { useState } from 'react';
import ArticleList from "./articleList";
import ArticleContent from "./articleContent";
import {  BrowserRouter, Route, Switch } from 'react-router-dom'
import Pending from "./pending";
import ErrorComponent from "./error";

function App() {
  const [ data, setData] = useState(null);
  const [articleData, setArticleData] = useState(null);
  const [ pending, setPending] = useState(false);
  const [ error, setError] = useState(null);
  const [ hits, setHits ] = useState(null);

  const searchQuery = (url)=>{
    fetch(url).then(results=>{
            if(!results.ok){
              setError("Error fetching data");
            }
            setPending(true);
            setData(null);
            return results.json();
        })
        .then(data=>{
            setPending(false);
            setData(data.query.search);
            setError(null);
            setHits(data.query.searchinfo.totalhits);
        })
        .catch(err=>{
            setError(err.message);
            setPending(false);
        })
  }

  const getArticleContent = (url)=>{
    fetch(url).then(results=>{
            if(!results.ok){
              setError("Failed to get fetch data");
            }
            setPending(true);
            setError(null);
            return results.json();
        })
        .then(data=>{
          
            setArticleData(data.query.pages);
            setPending(false);
            setError(null);
        })
        .catch(err=>{
            setPending(false);
            setError(err.message);
        })
  }
  return (
    <div className="app-content">
      <NavBar/>
      <BrowserRouter>
        <Route exact path="/">
          <Search searchQuery={searchQuery}/>
          {pending && <Pending  />}
          {error && <ErrorComponent error={error} data={data} />}
          { data && !error && data.length > 0 && <ArticleList data={data} getArticleContent={getArticleContent}/>}
          {hits === 0 && <h4 className="center">couldn't find the article</h4>}
        </Route>
        <Switch>
          <Route path="/content">
            {articleData && !error && <ArticleContent articleData={articleData} setArticleData={setArticleData}/>}
            {pending && <Pending/>}
            {error && <ErrorComponent error={error}/>}
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}


export default App;
