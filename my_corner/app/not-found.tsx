import Link from "next/link";
import Container from "@/app/Container";

export default function NotFound() {
  return (
    <Container>
      <div className="py-24 text-center">
        <h1 className="mb-4 text-4xl font-bold">404! Page Not Found</h1>
        <Link href="/" className="text-sm underline">
          Return to Home Page.
        </Link>
      </div>
    </Container>
  );
}
