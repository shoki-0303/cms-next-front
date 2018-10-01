import React from 'react'
import axios from 'axios'

class PostsPage extends React.Component {
  static async getInitialProps() {
    const res = await axios.get("http://localhost:3001/api/v1/posts")
    const data = res.data
    console.log(data)
    return { data }
  }
  render() {
    console.log(this.props)
    const { data } = this.props
    return (
      <div>
        {data.map((item)=>{
          return (<div>{item.title}</div>)
        })}
      </div>
    );
  }
}

export default PostsPage