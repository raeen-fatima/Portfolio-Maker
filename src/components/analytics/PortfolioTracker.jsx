"use client";

import { useEffect } from "react";

function getVisitorId() {
  const key = "folioforge_visitor_id";
  let visitorId = localStorage.getItem(key);

  if (!visitorId) {
    visitorId = crypto.randomUUID();
    localStorage.setItem(key, visitorId);
  }

  return visitorId;
}

function getDevice() {
  const width = window.innerWidth;
  if (width < 768) return "Mobile";
  if (width < 1024) return "Tablet";
  return "Desktop";
}

function getBrowser() {
  const agent = navigator.userAgent;
  if (agent.includes("Edg/")) return "Edge";
  if (agent.includes("Firefox/")) return "Firefox";
  if (agent.includes("Chrome/")) return "Chrome";
  if (agent.includes("Safari/")) return "Safari";
  return "Other";
}

function getReferrer() {
  if (!document.referrer) return "Direct";

  try {
    return new URL(document.referrer).hostname.replace("www.", "");
  } catch {
    return "Other";
  }
}

export default function PortfolioTracker({ slug, portfolio }) {
  useEffect(() => {
    const visitorId = getVisitorId();
    const baseEvent = {
      slug,
      visitorId,
      device: getDevice(),
      browser: getBrowser(),
      referrer: getReferrer(),
    };

    const sendEvent = (eventType, label = "") => {
      fetch("/api/portfolio/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...baseEvent, eventType, label }),
        keepalive: true,
      }).catch(() => {});
    };

    sendEvent("view");

    const projectLinks = new Map();
    for (const project of portfolio.projects || []) {
      if (project.liveUrl) projectLinks.set(project.liveUrl, project.title);
      if (project.githubUrl) projectLinks.set(project.githubUrl, project.title);
    }

    const handleClick = (event) => {
      const link = event.target.closest("a");
      if (!link) return;

      const href = link.href;
      const rawHref = link.getAttribute("href") || "";
      const projectTitle = projectLinks.get(href) || projectLinks.get(rawHref);

      if (projectTitle) sendEvent("project_click", projectTitle);
      if (portfolio.hero?.resumeUrl && href === portfolio.hero.resumeUrl) {
        sendEvent("resume_download", "Resume");
      } else if (href.includes("github.com")) {
        sendEvent("github_click", "GitHub");
      } else if (href.includes("linkedin.com")) {
        sendEvent("linkedin_click", "LinkedIn");
      } else if (rawHref.startsWith("mailto:") || rawHref === "#contact") {
        sendEvent("contact_click", "Contact");
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [portfolio, slug]);

  return null;
}
