import { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState(null);

  const analyze = async () => {
    const res = await axios.post("http://localhost:5000/api/review", {
      prUrl: url,
    });

    setData(res.data);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>🚀 PR Review AI</h1>

      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Paste PR URL or any text"
        style={{ width: "400px", padding: "10px" }}
      />

      <button onClick={analyze} style={{ marginLeft: "10px" }}>
        Analyze
      </button>

      {data && (
        <div style={{ marginTop: "20px" }}>
          <h2>📊 Risk Level: {data.riskLevel}</h2>
          <h3>Score: {data.riskScore}/100</h3>

          <h2>🧠 Summary</h2>
          <p>{data.summary}</p>

          <h2>⚠ Issues</h2>
          <ul>
            {data.issues.map((i, idx) => (
              <li key={idx}>{i}</li>
            ))}
          </ul>

          <h2>🧪 Missing Tests</h2>
          <ul>
            {data.missingTests.map((t, idx) => (
              <li key={idx}>{t}</li>
            ))}
          </ul>

          <h2>✅ Checklist</h2>
          <ul>
            {data.checklist.map((c, idx) => (
              <li key={idx}>{c}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}