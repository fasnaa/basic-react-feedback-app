
import { useState } from 'react';
import './App.css';
import FeedbackForm from './components/feedbackForm';
import FeedbackList from './components/feedbackList';

function App() {

  const [feedbacks, setFeedbacks] = useState([]);
  const addFeedback = (newFeedback) => {
    setFeedbacks([...feedbacks, newFeedback]);
  }
  const deleteFeedback = (indexToRemove) => {
    setFeedbacks(feedbacks.filter((_, index)=>index !== indexToRemove));
  }
  return (
    <div className="App">
      <FeedbackForm onAdd= {addFeedback}></FeedbackForm>
      <FeedbackList feedbacks={feedbacks} onDelete = {deleteFeedback}></FeedbackList>
    </div>
  );
}

export default App;
