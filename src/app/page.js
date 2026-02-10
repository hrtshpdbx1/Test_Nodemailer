
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl"> Homepage</h1>
     <Link className="underline" href="/form">Formulaire </Link>
    </div>
  );
}
