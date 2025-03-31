import { toPercentUnit, toScientificNumber } from "./toScientificNumber";

export const formatPriceWithCurrency = (price: string | number, priceCurrency: string): string => {
  const formattedPrice = priceCurrency === '%' 
      ? toPercentUnit(price) 
      : toScientificNumber(price);

  return priceCurrency === 'BERA'  ? formattedPrice + ' BERA' : priceCurrency === '%' ? formattedPrice + priceCurrency : priceCurrency + formattedPrice
}
