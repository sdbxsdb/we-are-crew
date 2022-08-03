export const mapUserData = (user) => {
  const { uid, email, xa, displayName } = user
  return { 
    id: uid,
    email: email,
    token: xa,
    name: displayName,
  }
}