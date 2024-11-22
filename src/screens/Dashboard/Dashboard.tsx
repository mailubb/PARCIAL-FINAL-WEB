import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { getApiContent } from "../../services/poetry";

interface Poem {
  id: string;
  title: string;
  excerpt: string;
}

interface DashboardProps {
  onViewPoem: (id: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onViewPoem }) => {
  const [poems, setPoems] = useState<Poem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPoems = async () => {
      try {
        const data = await getApiContent<Poem[]>();
        setPoems(data); // 
        setLoading(false);
      } catch (err) {
        console.error("Error fetching poems:", err);
        setError("Failed to load poems.");
        setLoading(false);
      }
    };

    fetchPoems();
  }, []); // 

  if (loading) {
    return <p>Loading...</p>; 
  }

  if (error) {
    return <p>{error}</p>; 
  }

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Poem Dashboard</h1>
      <div className="poem-list">
        {poems.map((poem) => (
          <div key={poem.id} className="poem-card">
            <h2 className="poem-title">{poem.title}</h2>
            <p className="poem-excerpt">{poem.lines}</p>
            <button className="poem-button" onClick={() => onViewPoem(poem.id)}>
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

