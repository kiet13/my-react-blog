import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import PostsList from './features/posts/PostsList/PostsList';
import SinglePostPage from './features/posts/SinglePostPage/SinglePostPage';
import EditPostForm from './features/posts/EditPostForm/EditPostForm';
import Navigation from './components/Navigation/Navigation';
import AddPostForm from './features/posts/AddPostForm/AddPostForm';


function App() {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <Switch>
          <Route exact path="/">
            <PostsList />
          </Route>
          <Route exact path="/posts/:id">
            <SinglePostPage />
          </Route>
          <Route exact path="/editPost/:id">
            <EditPostForm />
          </Route>
          <Route exact path="/addPost">
            <AddPostForm />
          </Route>
        </Switch>
          
      </div>
    </Router>
    
  );
}

export default App;
