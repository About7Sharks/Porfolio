import React, { Component} from 'react'

import matter from 'gray-matter'
import './myscss.scss'
import MediaCard from './blogPostPreview.js'
class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = { articles:[] }
  }
  componentDidMount() {
      Promise.allSettled([fetch('../content/improvingPersonalSecurity.md'),fetch('../content/techUses.md')])
        .then(responses=>{
          for (let response in responses){
            if(responses[response].status==="fulfilled"){
                responses[response].value.text().then(articleData=>{
                  let markDownOBJ=matter(articleData)
                  this.setState({'articles':[...this.state.articles,markDownOBJ]})
                })
            }
          }})
  }  

  render() {
    let articlePreview = this.state.articles.map(article=>{ 
      console.log(article)
      return  <MediaCard key={article.data.title} variant="outlined" title={article.data.title} image={article.data.image} summary={article.data.summary} date={article.data.date} />
    })
    return (
      <div className="content">
        <h1>Blog </h1>
        {articlePreview}
      </div>
    )
  }
}

export default Blog