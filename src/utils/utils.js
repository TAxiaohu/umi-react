export function handleAvatarPreview(url) {
  const { location: { origin } } = window;
  if (!url) {
    return '@/assets/defaultAvatar.png';
  }
  if (url && url.includes('http')) {
    return url;
  }
  return `${origin}/api/files/${url}`;
}

/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export function isUrl(path) {
  return reg.test(path);
}