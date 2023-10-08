export function FormatEmail(email: string) {
  const str = email.split('');
  const finalArr: string[] = [];
  const len = str.indexOf('@');
  str.forEach((item, pos) => {
    pos >= 1 && pos <= len - 2 ? finalArr.push('*') : finalArr.push(str[pos]);
  });
  return finalArr.join('');
}
