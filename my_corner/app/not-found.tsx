import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <Container>
      <div className="py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">404! Page Not Found</h1>
        <Link href="/" className="underline text-sm">
          Return to Home Page.
        </Link>
      </div>
    </Container>
  );
}
