"use client";
import { useState, useEffect, useContext } from 'react';

import CommentList from './CommentList';
import NewComment from './NewComment';
import classes from './Comments.module.css';
import { toast } from 'react-toastify';

function Comments({eventID}: {eventID: string}) {

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isFetchingComments, setIsFetchingComments] = useState(false);

  useEffect(() => {
    if (showComments) {
      setIsFetchingComments(true);
      fetch('/api/comments/' + eventID)
        .then((response) => response.json())
        .then((data) => {
          setComments(data.comments)
          setIsFetchingComments(false);
        });
    }
  }, [showComments, eventID]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData: any) {

    fetch('/api/comments/' + eventID, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then((data) => {
          throw new Error(data.message || 'Something went wrong!');
        });
      })
      .then((data) => {
        toast.success('Comment added successfully!') 
      })
      .catch((error) => {
        toast.error(error.message || 'Something went wrong!')
      });

  }

  console.log(comments)
  return (
    <section className={classes.comments}>
      <button type="button" onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isFetchingComments && <CommentList items={comments} />}
      {showComments && isFetchingComments && <p>Loading...</p>}
    </section>
  );
}

export default Comments;