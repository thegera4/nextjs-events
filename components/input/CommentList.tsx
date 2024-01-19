import classes from './CommentList.module.css';

function CommentList({items}: any) {
  return (
    <ul className={classes.comments}>
      {items.map((item: any) => (
        <li key={item._id}>
          <p>{item.comment}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;