import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import VideoPage from './components/videopage/VideoPage';
import Main from './components/mainpage/Main';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/video">
          <VideoPage/>
        </Route>
        <Route path="/">
          <Main/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
