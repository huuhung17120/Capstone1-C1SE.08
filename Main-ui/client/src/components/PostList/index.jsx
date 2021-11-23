import React, {useEffect, useState} from 'react';
import { Grid } from '@material-ui/core';
import { fetchPosts } from '../../api/post';
import Post from './Post';

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
        <Grid key={post._id} item xs={12} sm={12} >
         <Post post={post}/>
        </Grid>
      ))}
    </Grid>
  );
}

export default PostList