export function paginate<T>(data: T[], page: number, pageSize: number): { data: T[]; total: number } {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return {
    data: data.slice(start, end),
    total: data.length,
  };
}