export function useLogin(goto?: "landing" | "servers") {
  function auth() {
    window.location.href = `http://localhost:3000/oauth/login${goto && `?goto=${goto}`}`;
  }
  return { auth };
}
