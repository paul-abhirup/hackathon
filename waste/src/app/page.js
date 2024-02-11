import Hero from "./components/layouts/Hero";
import HomeMenu from "./components/layouts/HomeMenu";

export default function Home() {
  return (
    <>
    <Hero />
    <HomeMenu />
    
    <section className="text-center my-16">
    
        <h3 className="uppercase text-gray-500 font-semibold">Our Story</h3>
        <h2 classname="text-green-500 text-4xl"> About Us</h2>

        <p className="text-gray-500 my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>


        <h2 classname="text-green-500 font-bold text-4xl"> Contact Us</h2>
        <a className="text-4xl mt-8 " href="tel:+34-94934934934">
        +44 4848 4494 
        </a>

    </section>
   
    </>
  );
}
