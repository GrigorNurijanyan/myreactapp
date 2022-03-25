import history from "../router/History";

export function redirect(path) {
  history.push(path);
}

export function pageLink(path) {
  return path;
}
