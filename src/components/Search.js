import './search.css' ;
import React , {useState,useEffect} from 'react' ;
import axios from 'axios' ;

const Search = () =>{
    const [item , setItem] = useState('');
    const [results , setResults] = useState([]);

    useEffect( () =>{
        const search = async () =>{
            const {data} =  await axios.get('https://en.wikipedia.org/w/api.php',{
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch : item
                }
            })
            setResults(data.query.search);
        };
        if ( item && !results.length){
            search() ;
        } else{
            const timeId = setTimeout(
                () =>{
                    if (item){
                        search();
                    }
                },300) ;
                return () =>{
                    clearTimeout(timeId) ;
                }
        }
    }, [item]) ;
    
    const renderResults = results.map( (result) =>{
        return (
            <div className="item" key={result.pageid}>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <div className="header-info">
                    <span dangerouslySetInnerHTML={ {__html: result.snippet} }></span>
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} target="_blank" > Read more..</a>
                    </div>
                </div>
            </div>
        );
    } )
    return (
        <div className="search-container">
            <h1 className="page-title">Wikipedia Search</h1>
            <div className="ui form">
                <div className="field">
                    <label>Enter Your Search Item</label>
                    <input
                    value={item}
                    onChange={ (e) => setItem(e.target.value)}
                    className="input" />
                </div>
            </div>
            <div className="ui middle aligned divided list">
                
                {renderResults}
            </div>
        </div>
    );
}


export default Search ;