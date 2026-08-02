export function mapAbout(about = {}) {
  const {
    bio,
    location,
    email,
    phone,
    github,
    linkedin,
    instagram,
    image,
  } = about;

  return {
    bio: bio ?? "",
    location: location ?? "",
    email: email ?? "",
    phone: phone ?? "",
    github: github ?? "",
    linkedin: linkedin ?? "",
    instagram: instagram ?? "",
    image: image ?? "",
  };
}