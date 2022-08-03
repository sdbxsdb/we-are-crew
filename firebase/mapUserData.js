export const mapUserData = (user) => {
  const { uid, email, xa, displayName, dept } = user
  return { 
    id: uid,
    email: email,
    token: xa,
    name: displayName,
    dept: dept
  }
}