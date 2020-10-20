import React, { useEffect, useState } from "react";

function PillsList() {
  const [pills, setPills] = useState([]);
  const loadPills = async () => {
    const res = await fetch("/api/pills");
    const pills = await res.json();
    console.log("!!!!!: loadPills -> pills", pills);
  };
  useEffect(() => {
    loadPills();
  }, []);

  return (
    <div>
      <header>Stoic Pills</header>
    </div>
  );
}

export default PillsList;
