// Components
import TicketsList from "./TicketsList";

export default function tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickects</h2>
          <p>
            <small>Currently open tickets</small>
          </p>
        </div>
      </nav>

      <TicketsList />
    </main>
  );
}
