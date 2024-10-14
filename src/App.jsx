
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NewsPost from './NewsPost/NewsPost';
import NoMatch from './NoMatch/NoMatch';
import PostComments from './PostComment/PostComments';

function App() {

  return (
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<NewsPost />} />
            <Route path="/news_post" element={<NewsPost />} />
            <Route path="/post/:postId" element={<PostComments/>} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Router>
      </div>
  )
}

export default App
