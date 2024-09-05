import { formatUnits } from 'viem';

const BIG_ZERO = 0n;
const BIG_ONE = 1n;

const TRILLION = BIG_ONE * 10n ** 12n;
const BILLION = BIG_ONE * 10n ** 9n;
const MILLION = BIG_ONE * 10n ** 6n;

const parseBigNumberOrZero = (
  input: string | bigint | number | null
) => {
  if (!input) return BIG_ZERO;

  // Remove any commas
  let inputStr = String(input).replace(/,/g, "");

  let result: bigint;

  try {
    result = BigInt(inputStr);
  } catch {
    return BIG_ZERO;
  }

  return result;
};

const toPrecisionTrim = (value: bigint, significantFigures: number) => {
  const valueStr = formatUnits(value, 0);
  const isNegative = valueStr.startsWith("-");
  const absValueStr = isNegative ? valueStr.slice(1) : valueStr;
 
  let formattedValue = Number(absValueStr)
    .toPrecision(significantFigures)
    .replace(/(\.[0-9]*?)0+$/, "$1");

  // Add back commas when necessary
  const parts = formattedValue.split(".");
  parts[0] = Number(parts[0]).toLocaleString();
  formattedValue = parts.join(".");

  formattedValue = formattedValue.endsWith(".")
    ? formattedValue.slice(0, -1)
    : formattedValue;
  return isNegative ? `-${formattedValue}` : formattedValue;
};

export const toScientificNumber = (
  input: string | bigint | number | null | undefined
): string => {
  const value = parseBigNumberOrZero(input || 0);

  // Check if the value is zero
  if (value === BIG_ZERO) {
    return '0';
  }

  // Check if value less than 0.0001 for exponential
  const absValue = BigInt(Math.abs(Number(formatUnits(value, 0))));
  
  if (absValue < 10n ** 4n) {
    const sign = value < 0 ? "-" : "";
    let exponent = 0n;
    let baseValue = absValue;

    // Multiply till base is > 100
    while (baseValue < 100n) {
      baseValue *= 10n;
      exponent--;
    }

    return `${sign}${toPrecisionTrim(baseValue, 3)}e-${-exponent}`;
  }

  // Check if the value is less than 1 million
  if (absValue < MILLION) {
    return toPrecisionTrim(value, 6);
  }

  // Check if the value is less than 1 billion
  if (absValue < BILLION) {
    return `${toPrecisionTrim(value / MILLION, 6)} M`;
  }

  // Check if the value is less than 1 trillion
  if (absValue < TRILLION) {
    return `${toPrecisionTrim(value / BILLION, 6)} B`;
  }

  // Value is greater than or equal to 1 trillion
  return `${toPrecisionTrim(value / TRILLION, 6)} T`;
};

export const toPercentUnit = (input: string | number | null | undefined) => {
  const ONE_HUNDRED = 100;

  if (Number.isNaN(Number(input))) return 0;

  return (Number(input) * ONE_HUNDRED).toFixed(2);
};
