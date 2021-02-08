import{useState} from 'react';
const Search = ({searchQuery}) => {
    const [ query, setQuery] = useState('');
    const handleClick = ()=>{
        searchQuery(`https://en.wikipedia.org/w/api.php?action=query&origin=*&list=search&srsearch=${query}&format=json`);
        
    }
    return ( 
        <div className="container">
            <div className="input-field">
                <input onChange={e=>setQuery(e.target.value)}type="text" name="search" id="search"/>
                <label htmlFor="search">Search</label>
            </div>
            <div className="row">
            <button onClick={handleClick} className="btn waves-effect waves-light purple darken-4 right col s12">Search Article</button>
            </div>
            </div>
     );
}

export default Search;