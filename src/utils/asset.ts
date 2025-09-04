export const asset = (p: string) => {
  const base = (import.meta as any).env?.BASE_URL ?? "/";
  return `${String(base).replace(/\/$/, "")}/${String(p).replace(/^\//, "")}`;
};
export const assets = (arr?: string[]) => (arr ? arr.map(asset) : arr);
