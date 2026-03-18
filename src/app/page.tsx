import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">VScan Mail</h1>
      <Link href="/login">
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Login
        </button>
      </Link>
      <Link href="/register1">
        <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Register
        </button>
      </Link>
    </main>
  );
}
