//storage funciton

export function load(data) {
  return JSON.parse(localStorage.getItem(data));
}

export function save(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
