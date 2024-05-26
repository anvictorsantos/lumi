import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/invoices")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      {typeof backendData === "undefined" ? (
        <p>Loading…</p>
      ) : (
        backendData.map((invoice, i) => <p key={i}>{invoice.description}</p>)
      )}
    </div>
  );
}

export default App;
