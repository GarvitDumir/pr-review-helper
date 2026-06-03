const axios = require("axios");

function parsePRUrl(url) {
  const match = url.match(
    /github\.com\/([^/]+)\/([^/]+)\/pull\/(\d+)/
  );

  if (!match) {
    throw new Error(
      "Invalid PR URL. Use format: https://github.com/owner/repo/pull/123"
    );
  }

  return {
    owner: match[1],
    repo: match[2],
    pullNumber: match[3],
  };
}

async function fetchPRData(prUrl) {
  const { owner, repo, pullNumber } = parsePRUrl(prUrl);

  try {
    // Get PR details
    const pr = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/pulls/${pullNumber}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "PR-Review-Helper",
        },
      }
    );

    // Get changed files
    const files = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/pulls/${pullNumber}/files`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "PR-Review-Helper",
        },
      }
    );

    return {
      title: pr.data.title || "No title",
      body: pr.data.body || "",
      files: files.data.map((f) => ({
        filename: f.filename,
        additions: f.additions,
        deletions: f.deletions,
        changes: f.changes,
        patch: f.patch || "",
      })),
    };
  } catch (err) {
    console.log("STATUS:", err.response?.status);
    console.log("DATA:", err.response?.data || err.message);

    if (err.response?.status === 404) {
      throw new Error("PR not found (invalid or deleted PR)");
    }

    if (err.response?.status === 403) {
      throw new Error("GitHub rate limit exceeded");
    }

    throw new Error("Failed to fetch PR from GitHub");
  }
}

module.exports = { fetchPRData };