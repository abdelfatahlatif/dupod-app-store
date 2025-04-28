import React, { useState } from 'react';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';

interface Comment {
  id: number;
  author: string;
  content: string;
  rating: number;
  replies?: Comment[];
}

interface Props {
  appId: string;
}

const AppComments: React.FC<Props> = ({ appId }) => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: 'Alice',
      content: 'Amazing app!',
      rating: 5,
      replies: [{ id: 11, author: 'Bob', content: 'Totally agree!', rating: 0 }]
    },
    {
      id: 2,
      author: 'Charlie',
      content: 'Needs improvement.',
      rating: 2,
      replies: [],
    }
  ]);

  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState<number>(0);
  const [replyTo, setReplyTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState('');

  const handleAddComment = () => {
    const comment: Comment = {
      id: Date.now(),
      author: 'You',
      content: newComment,
      rating,
      replies: [],
    };
    setComments([comment, ...comments].slice(0, 5));
    setNewComment('');
    setRating(0);
  };

  const handleReply = (parentId: number) => {
    const updated = comments.map((c) => {
      if (c.id === parentId) {
        const reply: Comment = {
          id: Date.now(),
          author: 'You',
          content: replyText,
          rating: 0,
        };
        return { ...c, replies: [...(c.replies || []), reply] };
      }
      return c;
    });
    setComments(updated);
    setReplyTo(null);
    setReplyText('');
  };

  const avgRating =
    comments.length > 0
      ? (comments.reduce((sum, c) => sum + c.rating, 0) / comments.length).toFixed(1)
      : 'N/A';

  return (
    <div className="mb-5">
      <h4 title={appId}>Comments </h4>
      <div className="mb-3">
        <strong>Average Rating: <span className="ms-2">({avgRating})</span></strong>
        <Rating value={parseFloat(avgRating)} readOnly cancel={false} />
      </div>

      <div className="mb-4">
        <InputTextarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={3}
          cols={50}
          placeholder="Leave a comment..."
        />
        <div>
        <span>Rate:</span>
          <span>            
            <Rating value={rating} cancel={false} onChange={(e) => setRating(e.value ?? 0)} />
          </span>
        </div>
        <div className='mt-2'>
          <Button label="Submit" className="btn btn-primary" onClick={handleAddComment} />
        </div>
      </div>

      {comments.map((c) => (
        <div key={c.id} className="mb-4 border-bottom pb-2">
          <div>
            <strong>{c.author}</strong> - <Rating value={c.rating} readOnly cancel={false} />
          </div>
          <div>{c.content}</div>
          <Button
            label="Reply"
            size="small"
            className=" btn btn-primary"
            link
            onClick={() => setReplyTo(c.id)}
          />
          {c.replies?.map((reply) => (
            <div key={reply.id} className="ms-4 mt-2 border-start ps-3 text-muted">
              <strong>{reply.author}</strong>: {reply.content}
            </div>
          ))}
          {replyTo === c.id && (
            <div className="mt-2 ms-4">
              <InputTextarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                rows={2}
                cols={50}
                placeholder="Your reply..."
              />
              <br />
              <Button
                label="Submit Reply"
                className="mt-1 btn btn-primary"
                size="small"
                onClick={() => handleReply(c.id)}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AppComments;
