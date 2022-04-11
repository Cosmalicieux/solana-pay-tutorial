import { useRef } from "react";
import { products } from "../lib/products"
import { productsD } from "../lib/products"
import NumberInputD from "./NumberInputD";
import NumberInput from "./NumberInput";

interface Props {
  submitTarget: string;
  enabled: boolean;
}
export default function Products({ submitTarget, enabled }: Props) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form method='get' action={submitTarget} ref={formRef}>
      <div className='flex flex-col gap-16'>
        <div className="grid grid-cols-2 gap-8">
          {productsD.map(product => {
            return (
              <div className="rounded-md bg-white p-8" key={product.id}>
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="text-sm mb-4 text-gray-800">{product.description}</p>
                <p className="my-4">
                  <span className="mt-4 text-xl font-bold">Start at 0.01</span><span className="mt-4 text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-purple-700 to-cyan-400"> SOL</span>
                   <span className="text-black"></span>
                </p>
                  <NumberInputD name={product.id} />
              </div>
            )
          })}
          {products.map(product => {
            return (
              <div className="rounded-md bg-white text-left p-8" key={product.id}>
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="text-sm text-gray-800">{product.description}</p>
                <p className="my-4">
                  <span className="mt-4 text-xl font-bold">{product.priceSol}</span><span className="mt-4 text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-purple-700 to-cyan-400"> SOL</span>
                  {product.unitName && <span className="text-black"> /{product.unitName}</span>}
                </p>
                <div className="mt-1">
                  <NumberInput name={product.id} formRef={formRef} />
                </div>
              </div>
            )
          })}

        </div>

        <button
          className="text-black items-center px-20 rounded-md py-2 max-w-fit self-center bg-white text-white hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!enabled}
        >
          Checkout
        </button>
      </div>
    </form>
  )
}
