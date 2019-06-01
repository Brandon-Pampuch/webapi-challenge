import React from "react";
import axios from "axios";
import styled from "styled-components";



const PageWrapper = styled.div`
    
`

const Wrapper = styled.div`
display:flex;
flex-direction:column;
margin: 0 auto;
text-align:left;
width: 500px;
`

const PostWrapper =styled.div`
border: 2px solid black;
padding: 10px 20px;
margin-bottom: 10px;
box-shadow: 0 0.4rem 0.4rem rgba(0,0,0, .4);
background: white;
`

const Button = styled.button`
padding: 5px 10px;
font-size: 16px;
border: 1px solid black;
border-radius: 5px;
background-color: #0f919d;
color: white;
`

class Home extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/projects")
      .then(res => {
        console.log(res);
        this.setState({
          ...this.state,
          posts: res.data.projects
        });

      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <PageWrapper>
        <h1>Projects</h1>
        <Wrapper>
        {this.state.posts.map(post => {
          return <PostWrapper><p>{post.name}</p><Button>read more</Button></PostWrapper>;
        })}
        </Wrapper>
      </PageWrapper>
    );
  }
}

export default Home;
