import React, { useState, useEffect } from 'react'
import matter from 'gray-matter'
import '../myscss.scss'
import JournalCard from './JournalCard.js'
import Picker from '../util/Picker'

export default function Blog() {
  const [articles, setArticles] = useState({articles:[{}]  })
  async function getArticles() {
    let data = await (await fetch('https://api.github.com/repos/About7Sharks/Markdown/git/trees/master?recursive=1')).json()
    let articlesContent = await Promise.all(
      data.tree.map(async (article) => {
        let art = matter(await (await fetch(`https://raw.githubusercontent.com/About7Sharks/Markdown/master/${article.path}`)).text())
        art = {...art,...art.data}
        delete art.data
       return art
      })
    )
    localStorage.setItem('data', JSON.stringify(articlesContent))
    return setArticles(articlesContent)
  }
  let cache = JSON.parse(localStorage.getItem('data'))
  useEffect(() => {
    if(cache === null) {
      console.log('fetching posts')
      getArticles()
    } else {
      console.log('cache')
      setArticles(JSON.parse(localStorage.getItem('data')))
    }
  }, []);

  return (<div>
    <div className='blog'>
      <h1>Journal</h1>
      <Picker data={articles}/>
      <div className="content">
        {articles.length > 1 ? articles?.map(article => {
          return <JournalCard key={article.title}
            title={article.title} image={article.image}
            summary={article.summary} date={article.date}
            content={article.content} />
        }) : ""}</div>
    </div>
  </div>)
}
