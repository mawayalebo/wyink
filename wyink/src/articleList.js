import { Link } from "react-router-dom";

const ArticleList = ({  data:articles , getArticleContent}) => {
    const url = 'https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&html&format=json&titles=';
    const handleClick = (e, url)=>{
        //e.preventDefault();
        getArticleContent(url);
    }
    return ( 
        <div className="container">
            <h2 className="purple-text text-darken-3">Articles</h2>
            <div className="row">
                {
                  articles.map((article)=>(
                    <div className="card col s12 orange lighten-3 hoverable" key={article.pageid}  >
                        <div className="card-content">
                            <div className="card-title activator">{article.title}</div>
                            <span  className="truncate">{article.timestamp}</span>
                        </div>
                        <div className="card-reveal purple darken-4">
                            <div className="card-title white-text center">{article.title}</div><br/>
                            <div dangerouslySetInnerHTML={{__html: article.snippet}} className="container white-text">
                            </div>
                            <div  className="container "><Link to="/content" onClick={(e)=>{handleClick(e,url+article.title.replace(" ","_"))}} id={article.pageid} className="right" >Read more</Link></div>
                        </div>
                    </div>
                  ))
                }
            </div>
        </div>
    )
};

export default ArticleList ;