// json-server --watch --port 4000 ./_data/db.json

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Dashboard</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit adipisci
        perspiciatis nam iusto voluptas? Repudiandae, iusto. Iure et odit ad
        eveniet, unde dolores explicabo ut enim necessitatibus numquam tempora
        quod, at reiciendis ratione distinctio. Eum soluta molestias ex suscipit
        mollitia expedita! Laboriosam corporis officia quia quas repellendus
        quasi doloremque veritatis!
      </p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Update</h2>
      <div className="card">
        <h3>New member of web dev team</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quod
          molestias aliquid accusamus. Numquam labore commodi placeat aliquid
          doloribus minima corporis sequi cum quod rem!
        </p>
      </div>

      <div className="card">
        <h3>New website been deploy</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quod
          molestias aliquid accusamus. Numquam labore commodi placeat aliquid
          doloribus minima corporis sequi cum quod rem!
        </p>
      </div>
    </main>
  );
}
