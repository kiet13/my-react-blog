import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PostAuthor from '../users/PostAuthor';
import { selectAllPosts, fetchPosts } from './postsSlice';
import styles from './PostsList.module.scss';

const PostExcerpt = ({ post }) => {
  return (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <PostAuthor userId={post.user} />
      <p className="post-content">{post.content.substring(0, 100)}</p>

      <Link to={`/posts/${post.id}`} className="button">
        View Post
      </Link>
    </article>
  )
}

export default function PostsList() {
  const dispatch = useDispatch();
  const postStatus = useSelector(state => state.posts.status);
  const error = useSelector(state => state.posts.error)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch]);


  const posts = useSelector(selectAllPosts);
 

  let content;

  if (postStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (postStatus === 'succeeded') {

    content = posts.map(post => {
      return <PostExcerpt post={post} />
    });
  } else if (postStatus === "failed") {
    content = <div>{error}</div>
  }

  return (
    <section className={styles.PostsList}>
      <h2>Posts</h2>
      {content}
  </section>
  )
}
