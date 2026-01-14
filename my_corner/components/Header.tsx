import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between">
        <Link href="/" className="font-bold">
          Nathan Shalamberidze
        </Link>

        <nav className="flex gap-6 text-sm text-gray-300">
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contacts</Link>
        </nav>
      </div>
    </header>
  );
}
