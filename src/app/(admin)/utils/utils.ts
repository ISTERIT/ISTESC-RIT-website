export function checkIfCorrect(email: string, password: string) {
  return email === process.env.ADMIN_mail && password === process.env.ADMIN_password;
}