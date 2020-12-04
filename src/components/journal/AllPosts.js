import React, { useState, useEffect } from 'react'
import matter from 'gray-matter'
import '../myscss.scss'
import JournalCard from './JournalCard.js'


export default function Blog() {
  const [articles, setArticles] = useState({ articles: [{}] })
  async function getArticles() {
    let data = await (await fetch('https://api.github.com/repos/About7Sharks/Markdown/git/trees/master?recursive=1')).json()
    let articlesContent = await Promise.all(
      data.tree.map(async (article) => {
        let art = await (await fetch(`https://raw.githubusercontent.com/About7Sharks/Markdown/master/${article.path}`)).text()
        return matter(art)
      })
    )
    return setArticles(articlesContent)
  }
  useEffect(() => {
    getArticles()
  }, []);

  return (<div>
    <div className='blog'>
      <h1>Journal</h1>
      <div className="content">
        {articles.length > 1 ? articles?.map(article => {
          return <JournalCard key={article.data.title}
            title={article.data.title} image={article.data.image}
            summary={article.data.summary} date={article.data.date}
            content={article.content} />
        }) : ""}</div>
    </div>
  </div>)
}
