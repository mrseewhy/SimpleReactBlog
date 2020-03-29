import React, { Component } from 'react'
import './App.css';
import Home from './Components/Home'
import Topbar from './Components/Topbar';
import Addpost from './Components/Addpost'

class App extends Component {
  state = {
    blogposts : [{
      heading: 'Post One', body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus nesciunt voluptatum pariatur culpa facere voluptates nulla cupiditate sint autem fuga, expedita, ducimus ea voluptas id magni! Odio consectetur corrupti voluptates."
    },
    {
      heading: 'Post Two', body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus nesciunt voluptatum pariatur culpa facere voluptates nulla cupiditate sint autem fuga, expedita, ducimus ea voluptas id magni! Odio consectetur corrupti voluptates."
    },
    {
      heading: 'Post Three', body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus nesciunt voluptatum pariatur culpa facere voluptates nulla cupiditate sint autem fuga, expedita, ducimus ea voluptas id magni! Odio consectetur corrupti voluptates."
    },]
  }


  addBlogPost = (post) =>{
    this.setState({
      blogposts: [...this.state.blogposts, post]
    })
  }

  render() {
    return (
      <div>
        <Topbar />
        <Home  blogposts={this.state.blogposts}/>
        <Addpost addBlogPost = {this.addBlogPost} />
      </div>
    )
  }
}


export default App;
