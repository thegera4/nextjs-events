import classes from './CommentList.module.css';

interface CommentListProps {
  items: Array<{
    id: string;
    comment: string;
    name: string;
  }>;
}

export default function CommentList({items}: CommentListProps) {
  return (
    <ul className={classes.comments}>
      {items.map((item) => (
        <li key={item.id}>
          <p>{item.comment}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}