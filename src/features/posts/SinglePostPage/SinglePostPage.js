import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import PostAuthor from '../../users/PostAuthor';
import { selectPostById } from '../postsSlice';
import styles from './SinglePostPage.module.scss';

export default function SinglePostPage() {
  const { id } = useParams();
  console.log(id);
  const post = useSelector(state => selectPostById(state, id));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className={styles.SinglePostPage}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        {/* <PostAuthor userId={post.user} /> */}
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  )
}
