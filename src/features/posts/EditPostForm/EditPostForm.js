import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { postUpdated, selectPostById } from '../postsSlice';
import styles from './EditPostForm.module.scss';

export default function EditPostForm() {
  const { id } = useParams();

  const post = useSelector(state => selectPostById(state, id));

  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.body);

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: id, title: title, body: content }));
      console.log(content);
      history.push(`/posts/${id}`);
    }
  }

  return (
    <section >
      <h2>Edit Post</h2>
      <form className={styles.EditPostForm}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button type="button" className="button" onClick={onSavePostClicked}>
        Save Post
      </button>
  </section>
  )
}
