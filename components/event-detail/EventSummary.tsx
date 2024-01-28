import classes from './EventSummary.module.css';

export default function EventSummary({Title}: {Title: string}) { 
  return (
    <section className={classes.summary}>
      <h1>{Title}</h1>
    </section>
  );
}