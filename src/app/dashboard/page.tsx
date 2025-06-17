export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
      </div>
      <div className="h-[1000px] bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center">
        <p className="text-gray-600 text-lg">BOX</p>
      </div>
      <div className="h-[1000px] bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center">
        <p className="text-gray-600 text-lg">BOX</p>
      </div>
    </div>
  );
}
