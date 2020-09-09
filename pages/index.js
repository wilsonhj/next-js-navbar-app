import axios from 'axios';
import React, { Component } from 'react';
import Link from 'next/link';

class Index extends Component {
  constructor(props){
    super(props);
  }
  static async getInitialProps(){
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const { data } = res;
    return { posts: data };
    console.log(data[0]);
  }
  componentDidMount(){
    console.log("Fetching data in componentDidMount");
  }
  render() { 
    const {posts} = this.props;
    return ( 
      <div>
        <h1>Next.js Index Page</h1>
        {posts.map(post => (
        <ul key={post.id}>
          <li key={post.id}>
            <Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        </ul>
        ))
      }
      </div>
    );
  }
}

// const Index = ({ posts }) => { // Implicit return everything in arrow function
//   return (
//     <div>
//       <h1>Next.js Index Page</h1>
//       {posts.map(post => (
//         <ul>
//           <li key={post.id}>{post.title}</li>
//         </ul>
//         ))
//       }
//     </div>
//   );
// };
// Index.getInitialProps = async () => {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   const { data } = res;
//   return { posts: data };
//   console.log(data[0]);
// };

export default Index;
