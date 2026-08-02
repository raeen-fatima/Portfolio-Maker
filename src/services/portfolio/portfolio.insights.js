export function getPortfolioInsights(sections) {
  const insights = [];

  if (!sections.hero) {
    insights.push("Complete your Hero section.");
  }

  if (!sections.projects) {
    insights.push("Add projects to showcase your work.");
  }

  if (!sections.experience) {
    insights.push("Add experience to improve credibility.");
  }

  if (!sections.education) {
    insights.push("Add education details.");
  }

  if (!sections.certifications) {
    insights.push("Add certifications to stand out.");
  }

  if (!sections.publish) {
    insights.push("Publish your portfolio when ready.");
  }

  return insights;
}