export function usePath(arr: string[]) {
  const type = window.location.pathname.split("/").filter(Boolean)[1];
  const is404 = !type || !arr.includes(type);
  return { is404, type };
}
