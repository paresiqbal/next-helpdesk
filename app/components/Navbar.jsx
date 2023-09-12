import Link from "next/link";
import Image from "next/image";

// assests
import Logo from "./buah hati.png";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="klinikbuahhati"
        width={40}
        quality={100}
        placeholder="blur"
      ></Image>
      <h1>Klink Buah Hati</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
