import React, { useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import './posts.scss'
export default function BlogPostViewer(props){
    let [responseData, setResponseData] =useState('');
    const [state] = useState({ id: props.match.params.id});
    console.log(responseData.content)
    useEffect(() => { 
        if(responseData.content===undefined){
        fetch('https://raw.githubusercontent.com/About7Sharks/Markdown/master/'+state.id+'.md')
        .then(res=>{ res.text().then(data=>{ setResponseData(matter(data)) })})
        }
    })
     return(
        <div className="content">
            <ReactMarkdown className="article" linkTarget='_blank' source={responseData.content || 'Nothing'}/>
        </div>
     )
  }