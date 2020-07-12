import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'

export default function BlogPostViewer(props){
    let [responseData, setResponseData] =useState('');
    console.log(props.match.params.id)
    const fetchArticle= React.useCallback(()=>{
        fetch('https://raw.githubusercontent.com/About7Sharks/Markdown/master/'+props.match.params.id+'.md')
          .then(res=>{ 
            res.text().then(data=>{
            setResponseData(matter(data))
            })
            })
    },[])
    useEffect(() => {fetchArticle()},[fetchArticle]);

     return(
        <div className="content">
            <ReactMarkdown className="article" linkTarget='_blank' source={responseData.content || 'Nothing'}/>
        </div>
          
     )
  }