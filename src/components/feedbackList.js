function FeedbackList({feedbacks , onDelete}){
    return(
        <div>
            <h2>Feedback List</h2>
            {feedbacks.map((fb , index) =>(
                <div key={index} className="feedback-item">
                    <p><strong>{fb.name}  </strong> : {fb.comment}</p>
                    <button onClick={() => onDelete(index)}> Delete </button>
                </div>
            ))}
        </div>
    );
}
export default FeedbackList;