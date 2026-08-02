export function mapSkills(skills = []) {
  return skills
    .map((skill) => ({
      _id: skill._id?.toString() || "",
      name: skill.name ?? "",
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}