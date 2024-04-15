import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-24 space-y-4">
      <Image
        src="/qr.svg"
        alt="QR Code"
        width={300}
        height={300}
        className="mb-3"
      />
      <h1 className="text-2xl font-mono">https://keellorenz.com</h1>
      <h1 className="text-2xl font-mono">@keell0renz</h1>
    </main>
  );
}
