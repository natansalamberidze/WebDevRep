export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-red-600 text-yellow-300">
      {children}
    </div>
  );
} 