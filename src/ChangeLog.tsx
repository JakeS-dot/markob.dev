import React, { useEffect, useState } from "react";

interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
  html_url: string;
}

async function getGithubChangelog(): Promise<Commit[]> {
  const res = await fetch(
    "https://api.github.com/repos/JakeS-Dot/markob.dev/commits"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch commits");
  }
  return res.json();
}

export default function Changelog() {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getGithubChangelog()
      .then((data) => setCommits(data.slice(0, 4))) // only first 3 commits
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading commits...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="cl-container">      <h2 className="title-line" style={{ marginTop: -10 }}>changelog</h2>
      </div>
      <ul className="change-log-list">
        {commits.map((commit) => (
          <li key={commit.sha}>
            <div className="date-container"> <a href={commit.html_url} target="_blank" rel="noopener noreferrer">
              <u>({new Date(commit.commit.author.date).toLocaleDateString()})</u>
            </a>
            </div>
            <p>{commit.commit.message}</p>
          </li>
        ))}
      </ul>
      <a target="_blank" href="https://github.com/JakeS-dot/markob.dev/commit/eb4b87f11570af0788096cd3851c677ae5ea9dbc">see full log here</a>
    </>
  );
}

