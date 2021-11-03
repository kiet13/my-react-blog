import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postAdded } from '../postsSlice';
import { useHistory } from 'react-router-dom';

export default function AddPostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('0');
  const history = useHistory();

  const dispatch = useDispatch();

  const onTitleChanged = e => setTitle(e.target.value)
  const onBodyChanged = e => setBody(e.target.value)
  const onSavePostClicked = () => {
    if (title && body && userId) {
      dispatch(postAdded(title, body, userId));
      setTitle('');
      setBody('');
      history.push("/");
    }
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postBody">Body:</label>
        <textarea
          id="postBody"
          name="postBody"
          value={body}
          onChange={onBodyChanged}
        />

        <div type="button" className="button" onClick={onSavePostClicked}>
          Save Post
        </div>
      </form>
    </section>
  )
}