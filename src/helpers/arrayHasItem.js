export default function arrayHasItem(items, item) {
  if (!items || !Array.isArray(items)) return false;
  return items.includes(item);
}
