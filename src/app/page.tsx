import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            next.js project
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                <Link href="/about">go About page</Link>
              </h3>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                <Link href="/dashboard">go Dashboard page</Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
