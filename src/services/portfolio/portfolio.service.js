import Portfolio from "@/models/portfolio/Portfolio";
import { mapAbout } from "./mappers/about.mapper";
import { mapSkills } from "./mappers/skill.mapper";
import { mapProjects } from "./mappers/project.mapper";
import { mapExperience } from "./mappers/experience.mapper";
import { mapEducation } from "./mappers/education.mapper";
import { mapCertification } from "./mappers/certification.mapper";

export const findPortfolioByUserId = async (userId) => {
  return await Portfolio.findOne({ userId });
};

// export async function findPortfolioByUserId(userId) {
//   const portfolio = await Portfolio.findOne({
//     userId,
//   });

//   if (!portfolio) {
//     throw new Error("Portfolio not found");
//   }

//   return portfolio;
// }



//  hero Function
export async function saveHero(userId, heroData) {
  let portfolio = await findPortfolioByUserId(userId);

  if (!portfolio) {
    portfolio = await Portfolio.create({
      userId,
      hero: heroData,
    });
  } else {
    portfolio.hero = heroData;

    await portfolio.save();
  }

  return portfolio;
}

export async function getHero(userId) {
  const portfolio = await findPortfolioByUserId(userId);

  return portfolio?.hero || {};
}

// about Function

export async function saveAbout(userId, aboutData) {
  let portfolio = await findPortfolioByUserId(userId);

  if (!portfolio) {
    portfolio = await Portfolio.create({
      userId,
      about: aboutData,
    });
  } else {
    portfolio.about = aboutData;
    await portfolio.save();
  }

  return portfolio;
}

export async function getAbout(userId) {
  const portfolio = await findPortfolioByUserId(userId);

  // return portfolio?.about || {};
  return mapAbout(portfolio?.about);
}

// skills Function
export async function getSkills(userId) {
  const portfolio = await findPortfolioByUserId(userId);

  return mapSkills(portfolio?.skills);
}

export async function saveSkill(userId, skillName) {
  const portfolio = await findPortfolioByUserId(userId);

  if (!portfolio) {
    throw new Error("Portfolio not found");
  }

  const exists = portfolio.skills.some(
    (skill) =>
      skill.name.trim().toLowerCase() === skillName.trim().toLowerCase(),
  );

  if (exists) {
    throw new Error("Skill already exists");
  }

  portfolio.skills.push({
    name: skillName.trim(),
  });

  await portfolio.save();

  return portfolio.skills.at(-1);
}

export async function deleteSkill(userId, skillId) {
  const portfolio = await findPortfolioByUserId(userId);

  if (!portfolio) {
    throw new Error("Portfolio not found");
  }

  portfolio.skills = portfolio.skills.filter(
    (skill) => skill._id.toString() !== skillId,
  );

  await portfolio.save();
}

// projects Function
export async function getProjects(userId) {
  const portfolio = await findPortfolioByUserId(userId);

  return mapProjects(portfolio?.projects);
}

export async function saveProject(userId, projectData) {
  const portfolio = await findPortfolioByUserId(userId);

  if (!portfolio) {
    throw new Error("Portfolio not found");
  }

  portfolio.projects.push(projectData);

  await portfolio.save();

  return mapProjects([portfolio.projects.at(-1)])[0];
}

export async function deleteProject(userId, projectId) {
  const portfolio = await findPortfolioByUserId(userId);

  if (!portfolio) {
    throw new Error("Portfolio not found");
  }

  portfolio.projects = portfolio.projects.filter(
    (project) => project._id.toString() !== projectId,
  );

  await portfolio.save();
}

export async function updateProject(userId, projectData) {
  const portfolio = await findPortfolioByUserId(userId);

  if (!portfolio) {
    throw new Error("Portfolio not found");
  }

  const project = portfolio.projects.id(projectData.projectId);

  if (!project) {
    throw new Error("Project not found");
  }

  project.title = projectData.title;
  project.description = projectData.description;
  project.image = projectData.image;
  project.githubUrl = projectData.githubUrl;
  project.liveUrl = projectData.liveUrl;
  project.technologies = projectData.technologies;

  await portfolio.save();

  return mapProjects([project])[0];
}

// experience Function
 //get
export async function getExperience(userId) {
  const portfolio = await findPortfolioByUserId(userId);

  return mapExperience(portfolio.experience);
}
//post
export async function saveExperience(userId, experienceData) {
  const portfolio = await findPortfolioByUserId(userId);

  portfolio.experience.push({
    company: experienceData.company,
    role: experienceData.role,
    location: experienceData.location,
    startDate: experienceData.startDate,
    endDate: experienceData.endDate,
    current: experienceData.current,
    description: experienceData.description,
  });

  await portfolio.save();

  return mapExperience([portfolio.experience.at(-1)])[0];
}
//put
export async function updateExperience(userId, experienceData) {
  const portfolio = await findPortfolioByUserId(userId);

  const experience = portfolio.experience.id(experienceData.experienceId);

  if (!experience) {
    throw new Error("Experience not found");
  }

  experience.company = experienceData.company;

  experience.role = experienceData.role;

  experience.location = experienceData.location;

  experience.startDate = experienceData.startDate;

  experience.endDate = experienceData.current ? "" : experienceData.endDate;

  experience.current = experienceData.current;

  experience.description = experienceData.description;

  await portfolio.save();

  return mapExperience([experience])[0];
}

//delete
export async function deleteExperience(userId, experienceId) {
  const portfolio = await findPortfolioByUserId(userId);

  portfolio.experience = portfolio.experience.filter(
    (item) => item._id.toString() !== experienceId,
  );

  await portfolio.save();
}

// education Function

export async function getEducation(userId) {
  const portfolio = await findPortfolioByUserId(userId);

  return mapEducation(portfolio.education);
}

export async function saveEducation(userId, educationData) {
  const portfolio = await findPortfolioByUserId(userId);

  portfolio.education.push({
    institution: educationData.institution,
    degree: educationData.degree,
    startYear: educationData.startYear,
    endYear: educationData.endYear,
  });

  await portfolio.save();

  return mapEducation([portfolio.education.at(-1)])[0];
}

export async function updateEducation(userId, educationData) {
  const portfolio = await findPortfolioByUserId(userId);

  const education = portfolio.education.id(educationData.educationId);

  if (!education) {
    throw new Error("Education not found");
  }

  education.institution = educationData.institution;

  education.degree = educationData.degree;

  education.startYear = educationData.startYear;

  education.endYear = educationData.endYear;

  await portfolio.save();

  return mapEducation([education])[0];
}

export async function deleteEducation(userId, educationId) {
  const portfolio = await findPortfolioByUserId(userId);

  portfolio.education = portfolio.education.filter(
    (item) => item._id.toString() !== educationId,
  );

  await portfolio.save();
}

// certifications Function

export async function getCertifications(
  userId
) {
  const portfolio =
    await findPortfolioByUserId(
      userId
    );

  return mapCertification(
    portfolio.certifications
  );
}

export async function saveCertification(
  userId,
  certificationData
) {
  const portfolio =
    await findPortfolioByUserId(
      userId
    );

  portfolio.certifications.push({
    title:
      certificationData.title,
    issuer:
      certificationData.issuer,
    issueDate:
      certificationData.issueDate,
    credentialUrl:
      certificationData.credentialUrl,
  });

  await portfolio.save();

  return mapCertification([
    portfolio.certifications.at(-1),
  ])[0];
}

export async function updateCertification(
  userId,
  certificationData
) {
  const portfolio =
    await findPortfolioByUserId(
      userId
    );

  const certification =
    portfolio.certifications.id(
      certificationData.certificationId
    );

  if (!certification) {
    throw new Error(
      "Certification not found"
    );
  }

  certification.title =
    certificationData.title;

  certification.issuer =
    certificationData.issuer;

  certification.issueDate =
    certificationData.issueDate;

  certification.credentialUrl =
    certificationData.credentialUrl;

  await portfolio.save();

  return mapCertification([
    certification,
  ])[0];
}


export async function deleteCertification(
  userId,
  certificationId
) {
  const portfolio =
    await findPortfolioByUserId(
      userId
    );

  portfolio.certifications =
    portfolio.certifications.filter(
      (item) =>
        item._id.toString() !==
        certificationId
    );

  await portfolio.save();
}

// Portfolio Overview

export async function getPortfolioOverview(userId) {
  const portfolio = await Portfolio.findOne({
    userId,
  });

  if (!portfolio) {
    return getEmptyOverview();
  }

  const sections = {
    hero: !!portfolio.hero?.name,

    about: !!portfolio.about?.bio,

    skills: portfolio.skills?.length > 0,

    projects: portfolio.projects?.length > 0,

    experience: portfolio.experience?.length > 0,

    education: portfolio.education?.length > 0,

    certifications: portfolio.certifications?.length > 0,

    templates: !!portfolio.selectedTemplate,

    publish: portfolio.isPublished,
  };

  const completedSections =
    Object.values(sections).filter(Boolean).length;

  const completion = Math.round(
    (completedSections / Object.keys(sections).length) * 100,
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

  let nextStep = "/dashboard/portfolio/hero";

  if (!sections.hero) {
    nextStep = "/dashboard/portfolio/hero";
  } else if (!sections.about) {
    nextStep = "/dashboard/portfolio/about";
  } else if (!sections.skills) {
    nextStep = "/dashboard/portfolio/skills";
  } else if (!sections.projects) {
    nextStep = "/dashboard/portfolio/projects";
  } else if (!sections.experience) {
    nextStep = "/dashboard/portfolio/experience";
  } else if (!sections.education) {
    nextStep = "/dashboard/portfolio/education";
  } else if (!sections.certifications) {
    nextStep = "/dashboard/portfolio/certifications";
  } else if (!sections.templates) {
    nextStep = "/dashboard/templates";
  } else if (!sections.publish) {
    nextStep = "/dashboard/portfolio/publish";
  }

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

  return {
    portfolioName:
      portfolio.hero?.name || "Untitled Portfolio",

    selectedTemplate: portfolio.selectedTemplate,

    slug: portfolio.slug,

    isPublished: portfolio.isPublished,

    views: portfolio.views || 0,

    completion,

    score,

    nextStep,

    sections,

    stats: {
      projects: portfolio.projects?.length || 0,

      skills: portfolio.skills?.length || 0,

      experience: portfolio.experience?.length || 0,

      education: portfolio.education?.length || 0,

      certifications:
        portfolio.certifications?.length || 0,
    },

    insights,
  };
}