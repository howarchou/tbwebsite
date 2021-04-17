export function save(key: string, value: any) {
  return localStorage.setItem(key, JSON.stringify(value));
}

export function get<T>(key: string): T | null {
  const value = localStorage.getItem(key);
  if (value === null) {
    return null;
  }
  try {
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
}
