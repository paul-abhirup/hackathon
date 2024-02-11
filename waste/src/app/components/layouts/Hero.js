import Image from 'next/image';
// import Right from "../components/icons/Right";
export default function Hero() {
  return(
    <section className="hero">
    <div className="py-12">
    <h1 className="text-4xl font-semibold ">World can be much more Cleaner!!!!</h1>
    <p className="my-6 text-gray-500">Glasss is most underrated object in out society thrown about without any treatment for Recycle.
    </p>
    <div className="flex gap-6">
          <button className="bg-green-500 flex gap-4 text-white px-4 py-2 rounded-full ">Recycle Now
          </button>
          <button className="flex gap-2 py-3 text-bold px-3 rounded-full">Learn More</button>
    </div>
    </div>
    <div className="relative">
    <Image src={"/glass1.png"} layout={'fill'} objectFit={'contain'} alt={"Glass"} />
    </div>
    </section>
  );
}
