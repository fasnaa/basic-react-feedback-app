import React, { useState } from 'react';

function FeedbackForm({ onAdd }) {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && comment) {
            onAdd({ name, comment });
            setComment ('');
            setName ('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Leave Feedback </h2>
            <input value={name} type='text' placeholder='Enter your name' onChange={(e) => setName(e.target.value)}></input>
            <textarea value={comment} placeholder='Enter your feedback ' onChange={(e) => setComment(e.target.value)}></textarea>
            <button type='Submit' >Submit</button>
        </form>
    );

}
export default FeedbackForm;