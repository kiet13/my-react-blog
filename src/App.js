import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import PostsList from './features/posts/PostsList/PostsList';
import SinglePostPage from './features/posts/SinglePostPage/SinglePostPage';


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
        </Switch>
          
      </div>
    </Router>
    
  );
}

export default App;
