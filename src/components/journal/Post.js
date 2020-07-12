import React, { useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'

export default function BlogPostViewer(props){
    let [responseData, setResponseData] =useState('');
    const [state] = useState({ id: props.match.params.id});

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/About7Sharks/Markdown/master/'+state.id+'.md')
          .then(res=>{ res.text().then(data=>{ setResponseData(matter(data)) })})
    });

     return(
        <div className="content">
            <ReactMarkdown className="article" linkTarget='_blank' source={responseData.content || 'Nothing'}/>
        </div>
          
     )
  }