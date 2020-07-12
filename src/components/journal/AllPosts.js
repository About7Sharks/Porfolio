import React, { Component} from 'react'
import matter from 'gray-matter'
import '../myscss.scss'
import MediaCard from './PostCard.js'

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = { articles:[] }
  }
  componentDidMount() {
    let fetches=[]
    fetch('https://api.github.com/repos/About7Sharks/Markdown/git/trees/master?recursive=1').then(res=>{
      res.json().then(data=>{
        for(let article in data.tree){
          fetches.push(fetch(`https://raw.githubusercontent.com/About7Sharks/Markdown/master/${data.tree[article].path}`))
        }
        Promise.allSettled(fetches)
        .then(responses=>{
        for (let response in responses){
          if(responses[response].status==="fulfilled"){
              responses[response].value.text().then(articleData=>{
                console.log(articleData)
                if (articleData.length<50) return //if short just skip for now
                let markDownOBJ=matter(articleData)
                this.setState({'articles':[...this.state.articles,markDownOBJ]})
              })
          }
        }
      })
      })
      
    })
  }  

  render() {
    let articlePreview = this.state.articles.map(article=>{ 
      return  <MediaCard key={article.data.title} title={article.data.title} image={article.data.image} summary={article.data.summary} date={article.data.date}/>
    })
    return (
      <div className='blog'>
        <h1>Journal</h1>
      <div className="content">
      {articlePreview}

      </div>
      </div>
    )
  }
}

export default Blog