async function analyzePR(prData) {
  return {
    summary: "AI not enabled yet",
    risk: "Unknown",
    missingTests: [],
    styleIssues: [],
    securityConcerns: [],
    checklist: [],
  };
}

module.exports = { analyzePR };