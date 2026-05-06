import Link from "next/link";
import { BarChart3 } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <BarChart3 className="w-16 h-16 text-[#6366F1] mb-6" />
      <h1 className="text-4xl font-bold text-[#6366F1] mb-4">DClaw Data</h1>
      <p className="text-lg text-gray-600 mb-8">Natural language data analysis</p>
      <Link
        href="/dashboard"
        className="px-6 py-3 bg-[#6366F1] text-white rounded-lg hover:bg-[#4F46E5] transition"
      >
        Go to Dashboard
      </Link>
    </main>
  );
}
