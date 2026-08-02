import Portfolio from "@/models/portfolio/Portfolio";
import User from "@/models/user/User";


export async function findPortfolioByUserId(userId) {
  return await Portfolio.findOne({
    userId,
  });
}
//overview

export function getEmptyOverview() {
  return {
    portfolioName: "Untitled Portfolio",

    selectedTemplate: null,

    slug: null,

    isPublished: false,

    views: 0,

    completion: 0,

    score: 0,

    nextStep: "/dashboard/portfolio/hero",

    sections: {
      hero: false,
      about: false,
      skills: false,
      projects: false,
      experience: false,
      education: false,
      certifications: false,
      templates: false,
      publish: false,
    },

    stats: {
      projects: 0,
      skills: 0,
      experience: 0,
      education: 0,
      certifications: 0,
    },

    insights: ["Start by creating your Hero section."],
  };
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

  const completedSections = Object.values(sections).filter(Boolean).length;

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
    nextStep = "/dashboard/portfolio/templates";
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
    portfolioName: portfolio.hero?.name || "Untitled Portfolio",

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

      certifications: portfolio.certifications?.length || 0,
    },

    insights,
  };
}




function normalizeSlug(slug) {
  return slug
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function getPortfolioSettings(userId) {
  const user = await User.findById(userId).select(
    "name email image",
  );

  if (!user) {
    throw new Error("User not found");
  }

  let portfolio = await Portfolio.findOne({
    userId,
  });

  if (!portfolio) {
    portfolio = await Portfolio.create({
      userId,
      selectedTemplate: "nova",
      isPublished: false,
    });
  }

  return {
    user: {
      name: user.name,
      email: user.email,
      image: user.image,
    },

    settings: {
      slug: portfolio.slug || "",
      selectedTemplate:
        portfolio.selectedTemplate || "nova",
      isPublished: portfolio.isPublished,
    },
  };
}

export async function updatePortfolioSettings(
  userId,
  slug,
  isPublished,
) {
  const normalizedSlug = normalizeSlug(
    slug || "",
  );

  if (
    normalizedSlug.length < 3 ||
    normalizedSlug.length > 40
  ) {
    throw new Error(
      "Slug must be between 3 and 40 characters",
    );
  }

  const existingPortfolio =
    await Portfolio.findOne({
      slug: normalizedSlug,
      userId: { $ne: userId },
    });

  if (existingPortfolio) {
    throw new Error(
      "This portfolio URL is already taken",
    );
  }

  let portfolio = await Portfolio.findOne({
    userId,
  });

  if (!portfolio) {
    portfolio = await Portfolio.create({
      userId,
    });
  }

  portfolio.slug = normalizedSlug;
  portfolio.isPublished = Boolean(
    isPublished,
  );

  await portfolio.save();

  return {
    slug: portfolio.slug,
    selectedTemplate:
      portfolio.selectedTemplate || "nova",
    isPublished: portfolio.isPublished,
  };
}


//delete portfolio

export async function deletePortfolio(
  userId,
) {
  await Portfolio.findOneAndDelete({
    userId,
  });
}

