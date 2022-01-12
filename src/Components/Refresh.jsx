import React from 'react'
import { FiRefreshCw } from 'react-icons/fi'
import styled from 'styled-components'

const Span = styled.div`
        cursor: pointer; 
        height: 40px;
        width: 100px;
        margin-left: 74%;
        font-family: Raleway;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        transition: border-bottom 0.2s;
        transition-timing-function: ease-in;
        &:hover{
            border-bottom: 3px solid #F7DF94;;
        }
    `

const Refresh = ({setAuthor,author,api,setQuote,setLoading}) => {
    const refresh = () => {
        setLoading(true)
        if(author) {
            setAuthor('')
        }else {
            (async function () {
                let data = await fetch(api).then((res) => res.json());
                setQuote(data);
                setLoading(false)
              })()
        }        
    }
   
    return (
        <Span onClick={refresh}>
            random <FiRefreshCw />
        </Span>
    )
}

export default Refresh
