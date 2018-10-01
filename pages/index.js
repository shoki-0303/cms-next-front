import React from 'react'
import axios from 'axios'


class Index extends React.Component {
  static async getInitialProps() {
    const res = await axios.get("https://api.tvmaze.com/search/shows?q=batman")
    const data = res.data
    return { data }
  }
  render() {
    return (
      <div>
        {console.log(this.props)}
        <div>hello cms-next</div>
      </div>
    );
  }
}

export default Index