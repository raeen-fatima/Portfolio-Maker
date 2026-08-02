export function mapEducation(education = []) {
  return education.map((item) => ({
    _id: item._id?.toString() || "",
    institution: item.institution ?? "",
    degree: item.degree ?? "",
    startYear: item.startYear ?? "",
    endYear: item.endYear ?? "",
  }));
}