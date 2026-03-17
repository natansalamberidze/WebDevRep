export default function Footer() {
  return (
    <footer className="border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-3 py-3 text-sm text-red-700">
        {new Date().getFullYear()} Nathan Shalamberidze
      </div>
    </footer>
  );
}
