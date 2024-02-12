function RandomEmail() {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const emailLength = 10;

  let randomEmail = '';
  for (let i = 0; i < emailLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomEmail += characters.charAt(randomIndex);
  }

  return randomEmail + '@assesment.com';
}
