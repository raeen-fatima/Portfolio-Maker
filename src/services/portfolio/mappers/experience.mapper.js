export function mapExperience(experience = []) {
  return experience.map((item) => ({
    _id: item._id?.toString() || "",
    company: item.company ?? "",
    role: item.role ?? "",
    location: item.location ?? "",
    startDate: item.startDate ?? "",
    endDate: item.endDate ?? "",
    current: item.current ?? false,
    description: item.description ?? "",
  }));
}