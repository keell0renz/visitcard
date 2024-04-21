import { Button } from "./ui/button";
import Link from "next/link";

export default function Share() {
  return (
    <div className="block md:hidden">
      <Button
        asChild
        className="bg-gradient-to-r from-red-800 via-pink-600 to-blue-800 text-white"
      >
        <Link href="/qr">Share</Link>
      </Button>
    </div>
  );
}
