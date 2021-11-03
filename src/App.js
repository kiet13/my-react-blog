import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import PostsList from './features/posts/PostsList/PostsList';
import SinglePostPage from './features/posts/SinglePostPage/SinglePostPage';
import EditPostForm from './features/posts/EditPostForm/EditPostForm';


function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <h1>My blog</h1>
            <PostsList />
          </Route>
          <Route exact path="/posts/:id">
            <SinglePostPage />
          </Route>
          <Route exact path="/editPost/:id">
            <EditPostForm />
          </Route>
        </Switch>
          
      </div>
    </Router>
    
  );
}

export default App;
