import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">Oops.</h2>
      <p>We could not found the tickets that you looking for</p>
      <p>
        Go back to all <Link href="/tickets">Tickets</Link>
      </p>
    </main>
  );
}
