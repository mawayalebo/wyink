import { Link } from 'react-router-dom';
const ArticleContent = ({articleData, setArticleData}) => {
    const content = Object.values(articleData)[0];
    const handleClick = ()=>{
        setArticleData(null);
    }
    return ( 
        <div className="container" id="article-content">
            <button className="btn-floating black medium left" onClick={handleClick}><Link to="/"><i className="material-icons">arrow_back</i></Link></button>
            <div id="top">
                <a className="black-text" href="#top">
                    <div>
                        <div  className="container">
                            <h1>{content.title}</h1>
                            <div dangerouslySetInnerHTML={{__html: content.extract}}></div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
     );
}
export default ArticleContent;