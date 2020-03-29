import React, { Component } from 'react'

export class Addpost extends Component {
    state={
        heading : "",
        body: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBlogPost(this.state)
    }

    render() {
        return (
            <div className= "form-center">
                <form onSubmit={this.handleSubmit}>
                    <div className="heading">
                    <label htmlFor="heading"></label>
                    <input type="text" id="heading" onChange= {this.handleChange} />
                    </div>
                    <div>
                    <label htmlFor="heading"></label>
                    <textarea name="" id="body" cols="30" rows="10"
                    onChange= {this.handleChange}
                    ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Addpost
