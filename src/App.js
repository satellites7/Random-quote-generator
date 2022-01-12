import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './App.css';
import styled from 'styled-components'

import { Container } from 'react-bootstrap';
import Refresh from './Components/Refresh'
import Quotes from './Components/Quotes'


const TheContainer = styled(Container) `
      margin-top: 30px;
`


function App() {
    const [quote, setQuote] = useState([])
    const [author,setAuthor] = useState('')
    const [loading, setLoading] = useState(true)
    let random = author ? '' : 'random'
    let api = `https://quote-garden.herokuapp.com/api/v3/quotes/${random}?author=${author}`;

    useEffect(() => {
      (async function () {
        let data = await fetch(api).then((res) => res.json());
        setQuote(data);
        setLoading(false)
      })();
    }, [api]);


    return (
    
    <div className="App">
      <TheContainer>
        <Refresh setAuthor={setAuthor} api={api} setQuote={setQuote} author={author} setLoading={setLoading}/>
        <Quotes quote={quote} setAuthor={setAuthor} author={author} loading={loading} setLoading={setLoading}/>
      </TheContainer>
      <footer><p className="bottom">created by <span style={{ fontWeight: 700 }}>satellites7</span> - devChallenges.io</p></footer>
    </div>
  );
}

export default App;
