export function getPortfolioProgress(portfolio) {
  const sections = {
    hero: !!portfolio.hero?.name,

    about: !!portfolio.about?.bio,

    skills: portfolio.skills?.length > 0,

    projects: portfolio.projects?.length > 0,

    experience: portfolio.experience?.length > 0,

    education: portfolio.education?.length > 0,

    certifications:
      portfolio.certifications?.length > 0,

    templates: !!portfolio.selectedTemplate,

    publish: portfolio.isPublished,
  };

  const completedSections =
    Object.values(sections).filter(Boolean)
      .length;

  const completion = Math.round(
    (completedSections /
      Object.keys(sections).length) *
      100
  );

  let score = 0;

  if (sections.hero) score += 10;

  if (sections.about) score += 10;

  if (sections.skills) score += 10;

  if (sections.projects) score += 20;

  if (sections.experience) score += 15;

  if (sections.education) score += 10;

  if (sections.certifications) score += 10;

  if (sections.templates) score += 5;

  if (sections.publish) score += 10;

  let nextStep =
    "/dashboard/portfolio/hero";

  if (!sections.hero) {
    nextStep =
      "/dashboard/portfolio/hero";
  } else if (!sections.about) {
    nextStep =
      "/dashboard/portfolio/about";
  } else if (!sections.skills) {
    nextStep =
      "/dashboard/portfolio/skills";
  } else if (!sections.projects) {
    nextStep =
      "/dashboard/portfolio/projects";
  } else if (!sections.experience) {
    nextStep =
      "/dashboard/portfolio/experience";
  } else if (!sections.education) {
    nextStep =
      "/dashboard/portfolio/education";
  } else if (!sections.certifications) {
    nextStep =
      "/dashboard/portfolio/certifications";
  } else if (!sections.templates) {
    nextStep =
      "/dashboard/portfolio/templates";
  } else if (!sections.publish) {
    nextStep =
      "/dashboard/portfolio/publish";
  }

  return {
    sections,
    completion,
    score,
    nextStep,
  };
}