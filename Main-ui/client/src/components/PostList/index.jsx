import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { fetchPosts } from '../../api/post';
import Post from './Post';
import { Row } from 'reactstrap';

const PostList = () => {
  const [posts, setPosts] = useState([])
  console.log(posts);

  useEffect(() => {
    fetchPosts().then(res => {
      setPosts(res.data)
    })
  }, [])

  return (
    <Grid container spacing={1} alignItems='stretch'>
      {posts.map((post) => (
        <Row key={post._id}  >
          <Post post={post} />
        </Row>
      ))}
    </Grid>
  );
}

export default PostList