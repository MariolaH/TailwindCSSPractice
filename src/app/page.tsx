import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <Link href="./sand"><button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 py-4 rounded">Click me</button></Link>
    </div>
  );
}
