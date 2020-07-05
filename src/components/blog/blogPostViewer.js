import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import BackBTN from '../navigation/backbutton'
export class BlogPostViewer extends Component {
        constructor(props) {
            super(props);
            this.state = {
                id: props.match.params.id,
                fetchingServices: true,
                addingService: false,
                article:{}
            }
            this.fetchServices = this.fetchServices.bind(this);
        }

        fetchServices() {
            fetch('../content/'+this.state.id+'.md').then(res=>{
                res.text().then(data=>{
                    this.setState({
                        fetchingServices: false,
                        article:matter(data)
                      });                    
                })
            })
        }
       
    componentWillMount(){
       this.fetchServices();
    }

      
     render(){
        return (
            <div className="content">
             <BackBTN/>
             <ReactMarkdown className="article" linkTarget='_blank' source={this.state.article.content}/>
            </div>
          )
     }
  }
  
  export default BlogPostViewer

