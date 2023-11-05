export function getNumberId(): number {
  return Number(String(Date.now()) + Math.floor(Math.random() * 900 + 100))
}
