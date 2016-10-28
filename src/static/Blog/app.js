import React from 'react';
import {render} from 'react-dom';
import ReactMarkdown from 'react-markdown';

export default class Blog extends React.Component {
	constructor(){
		super();
		this.state = {posts :[]}
	}

	componentWillMount(){
		$.ajax({
			dataType: "json",
			url: "/api/blog-posts-list",
			success: (data)=>{
				this.setState({posts:data});
			},
			error : ()=>{
				console.log("API called didn't work")
			}
		});
	}

  render() {
  	let blogPosts = this.state.posts.map((post)=>{
  		return <div><h2>{post.title}</h2><ReactMarkdown source={post.content} /></div>

  	})

    return (
      // Add your component markup and other subcomponent references here.
      <div className="container" style={{color: "snow"}}>
      <h1>Blog</h1>
      	{blogPosts}
      </div>
    );
  }
}