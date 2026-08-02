export function mapCertification(
  certifications = []
) {
  return certifications.map((item) => ({
    _id: item._id?.toString() || "",
    title: item.title ?? "",
    issuer: item.issuer ?? "",
    issueDate: item.issueDate ?? "",
    credentialUrl:
      item.credentialUrl ?? "",
  }));
}