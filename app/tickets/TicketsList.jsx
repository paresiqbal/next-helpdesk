async function getTickets() {
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 20,
    },
  });

  return res.json();
}

export default async function TicketsList() {
  const tickets = await getTickets();
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <h3>{ticket.title} </h3>
          <p>{ticket.body.slice(0, 200)}...</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} Priority
          </div>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There is no open tickets</p>
      )}
    </>
  );
}
