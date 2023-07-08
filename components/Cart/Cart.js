import React from "react";
import { FaTimes } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
const Cart = ({cart, setCart}) => {
  return (
    <aside className={`fixed top-0  ${cart?"right-0":"-right-full"} duration-700 max-w-md w-full h-full bg-[#13263d] px-5 py-[60px] border-l border-[#516782]`}>
      <div>
        <FaTimes onClick={()=>setCart(false)} className="text-white text-xl cursor-pointer absolute top-5 left-5 hover:text-red-600 transition" />
      </div>

      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div class="mx-auto max-w-3xl">
          <div class="text-center">
            <h1 class="text-xl font-bold text-white sm:text-3xl">My Cart</h1>
          </div>

          <div class="mt-8">
            <ul class="space-y-4">
              <li class="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                  alt=""
                  class="h-16 w-16 rounded object-cover"
                />

                <div>
                  <h3 class="text-sm text-white">Basic Tee 6-Pack</h3>

                  <dl class="mt-0.5 space-y-px text-[10px] text-slate-100/70">
                    <div>
                      <dt class="inline">Size:</dt>
                      <dd class="inline">XXS</dd>
                    </div>

                    <div>
                      <dt class="inline">Color:</dt>
                      <dd class="inline">White</dd>
                    </div>
                  </dl>
                </div>

                <div class="flex flex-1 items-center justify-end gap-2">
                  <form>
                    <label for="Line3Qty" class="sr-only">
                      {" "}
                      Quantity{" "}
                    </label>

                    <input
                      type="number"
                      min="1"
                      value="1"
                      id="Line3Qty"
                      class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </form>

                  <button>
                    <AiOutlineDelete className="text-white text-2xl transition hover:text-red-600" />
                  </button>
                </div>
              </li>
            </ul>

            <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div class="w-screen max-w-lg space-y-4">
                <dl class="space-y-0.5 text-sm text-white">
                  <div class="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>£250</dd>
                  </div>

                  <div class="flex justify-between">
                    <dt>VAT</dt>
                    <dd>£25</dd>
                  </div>

                  <div class="flex justify-between">
                    <dt>Discount</dt>
                    <dd>-£20</dd>
                  </div>

                  <div class="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>£200</dd>
                  </div>
                </dl>

                <div class="flex justify-end">
                  <a
                    href="#"
                    class="block rounded bg-orange-500 px-5 py-3 text-sm text-gray-100 transition hover:bg-orange-600"
                  >
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Cart;
