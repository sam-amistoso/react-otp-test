export function FormatPhone(phone: string) {
  const str = phone.split('');
  const finalArr: string[] = [];
  str.forEach((item, pos) => {
    pos >= 4 && pos <= str.length - 5 ? finalArr.push('*') : finalArr.push(str[pos]);
  });
  return finalArr.join('');
}
