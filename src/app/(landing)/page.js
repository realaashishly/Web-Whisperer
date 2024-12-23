import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-4">Web Whisperer</h1>
      <p className="text-lg text-center mb-8">
        A powerful tool for seamless communication and collaboration.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Real-time Chat</h2>
          <p>Connect instantly with your team.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Time Efficiency</h2>
          <p>Save time with streamlined workflows.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Modern UI Design</h2>
          <p>Enjoy a sleek and intuitive interface.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Responsive Design</h2>
          <p>Access from any device, anywhere.</p>
        </div>
      </div>
      <Link href="/app" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Launch App
      </Link>
    </div>
  );
}