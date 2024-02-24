import classes from './WelcomeInstructions.module.css'

export default function WelcomeInstructions() {

  return (
    <section className={classes.container}>
        <h1>Welcome to GoNext Events!</h1>
        <p>
        This project is still being updated and improved, for now, this is what you can do:
        </p> 
        <ul>
            <li>
                <p>
                <strong>SEE A LIST OF ALL EVENTS: </strong> 
                Click the <strong>All Events</strong> link in the header.
                </p>
            </li>
            <li>
                <p>
                <strong>FILTER EVENTS: </strong> 
                Select a year and a month in the search bar and click <strong>Find Events</strong> to filter 
                the list of events by date.
                </p>
            </li>
            <li>
                <p>
                <strong>SEE EVENT DETAILS: </strong> 
                Click the <strong>Explore Event</strong> button on each event card.
                </p>
            </li>
            <li>
                <p>
                <strong>LOGIN: </strong> Click the <strong>Login</strong> link in the header. 
                You can register a new account or use the test account. The login token is stored in a cookie
                and sent with some requests to the server.
                </p>
            </li>
            <li>
                <p>
                <strong>CREATE EVENTS: </strong> 
                Once logged in, a <strong>Create Event</strong> link will appear in the header. Click there.
                </p>
            </li>
            <li>
                <p>
                <strong>DELETE EVENTS: </strong> 
                If you are logged in, you will see a <strong>Delete Event</strong> button in the details page. 
                This button will only be visible if you are the creator of the event.
                </p>
            </li>
        </ul>
    </section>
  )
}