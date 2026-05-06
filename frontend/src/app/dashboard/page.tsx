"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [sourceData, setSourceData] = useState("");
  const [analyzed, setAnalyzed] = useState(false);

  function handleAnalyze() {
    if (!sourceData.trim()) return;
    setAnalyzed(true);
  }

  return (
    <div className="min-h-screen p-8">
      <h2 className="text-2xl font-bold mb-6">Data Workspace</h2>
      <div className="max-w-2xl space-y-4 mb-8">
        <div>
          <label className="block text-sm font-medium mb-1">Paste CSV or JSON</label>
          <textarea
            value={sourceData}
            onChange={(e) => setSourceData(e.target.value)}
            rows={6}
            className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
            placeholder="Paste your data here..."
          />
        </div>
        <button
          onClick={handleAnalyze}
          className="px-4 py-2 bg-[#6366F1] text-white rounded-md hover:bg-[#4F46E5] transition"
        >
          Analyze
        </button>
      </div>

      {analyzed && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Insights</p>
            <p className="text-lg font-semibold">Trend up 15%</p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Trend chart</p>
            <p className="text-lg font-semibold">Line chart generated</p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Outliers detected</p>
            <p className="text-3xl font-bold text-[#6366F1]">3</p>
          </div>
        </div>
      )}
    </div>
  );
}
