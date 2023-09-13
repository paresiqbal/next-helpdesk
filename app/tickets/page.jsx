// Components
import TicketsList from "./TicketsList";

// React
import { Suspense } from "react";

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

      <Suspense>
        <TicketsList />
      </Suspense>
    </main>
  );
}
