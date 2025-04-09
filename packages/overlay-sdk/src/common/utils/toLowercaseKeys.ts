export const toLowercaseKeys = <T>(map: Map<string, T>): Map<string, T> =>
  new Map(Array.from(map.entries()).map(([k, v]) => [k.toLowerCase(), v]));