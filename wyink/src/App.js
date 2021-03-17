import NavBar from "./navBar";
import Search from "./search";
import { useState } from 'react';
import ArticleList from "./articleList";
import ArticleContent from "./articleContent";
import {  BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  const [ data, setData] = useState([]);
  const [articleData, setArticleData] = useState(null);
  const [ pending, setPending] = useState(false);
  const [ error, setError] = useState(null);
  const dummy = {3456:{extract:"",title:""}};

  const searchQuery = (url)=>{
    fetch(url).then(results=>{
            if(!results.ok){
             throw Error ("couldn't get results");
            }
            return results.json();
        })
        .then(data=>{
            setPending(false);
            setData(data.query.search);
            setError(null);
        })
        .catch(err=>{
            setError(err);
            setPending(false);
        })
  }

  const getArticleContent = (url)=>{
    fetch(url).then(results=>{
            if(!results.ok){
             throw Error ("couldn't get results");
            }
            return results.json();
        })
        .then(data=>{
            setArticleData(data.query.pages);
        })
        .catch(err=>{
            console.log(err);
        })
  }
  return (
    <div className="app-content">
      <NavBar/>
      <BrowserRouter>
        <Route exact path="/">
          <Search searchQuery={searchQuery}/>
          { data.length !== 0 && <ArticleList error={error} pending={pending} data={data} getArticleContent={getArticleContent}/>}
        </Route>
        <Switch>
          <Route path="/content">
            {articleData && <ArticleContent articleData={articleData} setArticleData={setArticleData}/>}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
