import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-24">
      <Image src="/qr.svg" alt="QR Code" width={300} height={300} />
    </main>
  );
}
