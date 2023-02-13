export function randomHexColor() {
  return `#${Math.floor(Math.random() * 12777215)
    .toString(16)
    .padStart(6, '0')}`;
}
