import React from "react";

export const CommentList = ({ comments }) => {
  if (!comments.length) return <p>No hay comentarios aún.</p>;

  return (
    <ul className="comment-list">
      {comments.map((comment, index) => (
        <li key={index} className="comment-item">
          <strong>{comment.nickName}:</strong>
          <p>{comment.comment}</p>
          <small>{new Date(comment.commentDate).toLocaleString()}</small>
        </li>
      ))}
    </ul>
  );
};
