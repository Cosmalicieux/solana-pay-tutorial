import BigNumber from "bignumber.js";
import { Console } from "console";
import { ParsedUrlQuery } from "querystring";
import { products } from "./products";
import { productsD } from "./products";

export default function calculatePrice(query: ParsedUrlQuery): BigNumber {
  let amount = new BigNumber(0);
  for (let [id, quantity] of Object.entries(query)) {
    const product = products.find(p => p.id === id)
    if (!product) continue;
    const price = product.priceSol
    const productQuantity = new BigNumber(quantity as string)
    amount = amount.plus(productQuantity.multipliedBy(price))

  }
  let amountD = new BigNumber(0);
  for (let [id, quantity] of Object.entries(query)) {
    const productD = productsD.find(p => p.id === id)
    if (!productD) continue;
    const priceD = productD.priceSol
    const productQuantityD = new BigNumber(quantity as string)
    amountD = amountD.plus(productQuantityD.multipliedBy(priceD))
    
  }

  return amount.plus(amountD)
}
