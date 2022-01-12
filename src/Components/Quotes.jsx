import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'
import LoadingPage from './LoadingPage'


const Box = styled.div`
        margin-top: 100px;
    `
const QuoteCard = styled(Card)`
    margin: 30px auto 0;
    border: none;
    border-left: 8px solid #F7DF94;
    padding-left: 70px ;
    width: 620px;
    @media (max-width: 768px) {
        padding-left: 40px ;
        width: 100%;
  }
`
const Content = styled.p`
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    @media (max-width: 768px) {
        font-size: 16px;
  }
`
const Name = styled.p`
    margin-bottom: 0;
    font-weight: bold;
    font-size: 24px;
`
const AuthorBtn = styled.button`
    padding-left: 20px;
    margin: 100px auto 0;
    text-align: start;
    width: 620px;
    height: 131px;
    display:block;
    background-color: #fff;
    border: none;
    transition: color 0.4s,background-color 0.4s;
    transition-timing-function: ease-out;
    &:hover {
        background-color:#333;
        color:#f2f2f2
    }
    @media (max-width: 768px) {
        width: 100%;
        height:100px
  }
`
const Type = styled.p`
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    /* line-height: 16px; */
    margin-left: 2px;
    color: #828282;

`
const Icon = styled(Name)`
    margin-right:5px;
    color:#f2f2f2;
`
const NameH1 = styled.h1`
   margin-bottom: 50px;
   margin-left:26% ;
   /* text-align: center; */
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    /* line-height: 42px; */
    color: #333333;
    @media (max-width: 768px) {
        margin-left:10% ;
    }
`



const Quotes = ({ quote,setAuthor,author,loading,setLoading }) => {
    let fetchData = quote.data;
    if (!loading) {
        return (
            <Box>
                {author ? <NameH1>{author}</NameH1> : ''}
                {fetchData.map(item => {
                    return (
                        <QuoteCard key ={item._id}>
                            <Content>{item.quoteText}</Content>
                        </QuoteCard>
                    )
                })}
                {author ? '' : <AuthorBtn onClick={()=>{setAuthor(fetchData[0].quoteAuthor);setLoading(true)}}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Name>{fetchData[0].quoteAuthor}</Name>
                        <Icon>→</Icon>
                    </div>
                    <Type>{fetchData[0].quoteGenre}</Type>
                </AuthorBtn>}
            </Box>
        )
    } else {
        return (
            // <p>loading....</p>
            <LoadingPage/>
        )
    }
}

export default Quotes
