import React from 'react';

const Home = ({blogposts}) => {

    const bloglist = blogposts.map((blogpost,i)=> { 
        const {heading, body} = blogpost
       return(
        <div className="blog-body" key={i}>
        <h1>{heading}</h1>
       <p>{body}</p>
        </div>
       )
       
    })

    return (
        <div>
            {bloglist}
        </div>
    );
}

export default Home;
