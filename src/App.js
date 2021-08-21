import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AlbumList from './components/AlbumList';
import AlbumDetail from './components/AlbumDetail';
function App() {
  return (
   <div className="App">
    <Router>
    <Switch>
      <Route path="/" exact component={AlbumList}  />
      <Route path="/albums/:albumId/:userId" exact component={AlbumDetail} />
      <Route>404 not found </Route>
      </Switch>
    </Router>
   </div>
  );
}

export default App;
