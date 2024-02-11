

const { loadComponents } = require("next/dist/server/load-components")

export default function HomeMenu() {
  return(
    <section children="">
    <div>
    </div>
    <div className="text-center mb-4">
    <h3 className="uppercase text-gray-500 font-semibold">Check Out</h3>
    <h2 classname="text-green font-bold text-4xl italic"> Recycle Items</h2>
    </div>

   <div className="grid grid-cols-3 gap-4" >
              <div className="bg-gray-300 p-4 rounded-lg text-center">
                <img src="/beer.png" alt="Glass" />
                <h4 className="font-semibold text-xl my-3">Coke bottle</h4>
                <p className="text-gray-500 text-sm">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="mt-4 bg-green-500 text-white rounded-full px-4 py-2">Add to get Rs.5</button>
              </div>


              <div className="bg-gray-300 p-4 rounded-lg text-center">
                <img src="/mason.png" alt="Glass" />
                <h4 className="font-semibold text-xl my-3">MAson jar</h4>
                <p className="text-gray-500 text-sm">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="mt-4 bg-green-500 text-white rounded-full px-4 py-2">Add to get Rs.5</button>
              </div>



              <div className="bg-gray-300 p-4 rounded-lg text-center">
                <img src="/mason.png" alt="Glass" />
                <h4 className="font-semibold text-xl my-3">pepsi bottle</h4>
                <p className="text-gray-500 text-sm">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="mt-4 bg-green-500 text-white rounded-full px-4 py-2">Add to get Rs.5</button>
              </div>


              <div className="bg-gray-300 p-4 rounded-lg text-center">
                <img src="/mason.png" alt="Glass" />
                <h4 className="font-semibold text-xl my-3">fanta bottle</h4>
                <p className="text-gray-500 text-sm">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="mt-4 bg-green-500 text-white rounded-full px-4 py-2">Add to get Rs.5</button>
              </div>


              <div className="bg-gray-300 p-4 rounded-lg text-center">
                <img src="/mason.png" alt="Glass" />
                <h4 className="font-semibold text-xl my-3">Coke bottle</h4>
                <p className="text-gray-500 text-sm">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="mt-4 bg-green-500 text-white rounded-full px-4 py-2">Add to get Rs.5</button>
              </div>


              <div className="bg-gray-300 p-4 rounded-lg text-center">
                <img src="/mason.png" alt="Glass" />
                <h4 className="font-semibold text-xl my-3">Coke bottle</h4>
                <p className="text-gray-500 text-sm">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="mt-4 bg-green-500 text-white rounded-full px-4 py-2">Add to get Rs.5</button>
              </div>

    </div>
    </section>
  )
} 