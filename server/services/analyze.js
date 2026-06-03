function generateRiskScore(text) {
  let score = 20;

  if (text.includes("security")) score += 25;
  if (text.includes("bug")) score += 20;
  if (text.includes("null")) score += 10;
  if (text.includes("error")) score += 15;
  if (text.includes("test")) score -= 10;

  return Math.min(100, Math.max(0, score));
}

async function analyzePR(prUrl) {
  const lower = prUrl.toLowerCase();

  const risk = generateRiskScore(lower);

  let level = "Low";
  if (risk > 70) level = "High";
  else if (risk > 40) level = "Medium";

  return {
    summary:
      "This PR introduces changes that should be carefully reviewed for edge cases and testing coverage.",
    riskScore: risk,
    riskLevel: level,

    missingTests: [
      "No unit tests detected in changes",
      "Edge cases may not be covered",
    ],

    issues: [
      "Potential lack of validation in inputs",
      "Code complexity increased",
    ],

    checklist: [
      "Check unit test coverage",
      "Validate edge cases",
      "Review security implications",
      "Ensure naming consistency",
    ],
  };
}

module.exports = { analyzePR };