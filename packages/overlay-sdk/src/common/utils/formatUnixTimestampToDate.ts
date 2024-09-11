export default function formatUnixTimestampToDate(
  unixTimestamp: string | number
) {
  const convert = Number(unixTimestamp);
  const date = new Date(convert * 1000); // convert seconds to milliseconds
  const month = date.getMonth() + 1; // getMonth() returns 0-indexed month, so add 1
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month.toString().padStart(2, "0")}/${day
    .toString()
    .padStart(2, "0")}/${year}`;
}
