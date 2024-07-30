import { useEffect, useState } from "react";
export default function App() {
  const titlearr = [
    "Discover innovative ways to decorate",
    "We are available all across the globe",
    "Manufactured with the best materials",
  ];
  const pararr = [
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  ];
  const [count, setCount] = useState(0);
  const [view, setView] = useState("desktop");
  useEffect(() => {
    if (window.innerWidth < 426) {
      setView("mobile");
    }
  });
  // Function to handle incrementing the index
  const nextItem = () => {
    setCount((count + 1) % pararr.length);
  };

  // Function to handle decrementing the index
  const prevItem = () => {
    setCount((count - 1 + pararr.length) % pararr.length);
  };

  return (
    <>
      <main className="lg:h-screen *:box-border">
        <section className="lg:flex lg:h-4/6">
          <header
            style={{
              backgroundImage:
                "url(" +
                "/" +
                `${view}` +
                "-image-hero-" +
                `${count}` +
                ".jpg" +
                ")",
            }}
            className="relative font-spartan w-screen transition-all duration-75 ease-in-out fade-enter-active aspect-square lg:h-auto lg:w-7/12 bg-cover text-white p-16 flex"
          >
            <div className="text-3xl leading-[0.8] mx-auto lg:mx-0 lg:mr-8">
              room
            </div>
            <nav className="hidden absolue lg:static lg:block">
              <ul className="flex items-center *:mx-5 *:font-semibold">
                <li className="items-center flex flex-col group">
                  <a href="#">home</a>
                  <div className="invisible group-hover:visible w-4 border-b-4"></div>
                </li>
                <li className="items-center flex flex-col group">
                  <a href="#">shop</a>
                  <div className="invisible group-hover:visible w-4 border-b-4"></div>
                </li>
                <li className="items-center flex flex-col group">
                  <a href="#">about</a>
                  <div className="invisible group-hover:visible w-4 border-b-4"></div>
                </li>
                <li className="items-center flex flex-col group">
                  <a href="#">contact</a>
                  <div className="invisible group-hover:visible w-4 border-b-4"></div>
                </li>
              </ul>
            </nav>
          </header>
          <div className="lg:w-5/12 py-10 px-7 lg:p-24 font-spartan relative ">
            <h1 className="text-4xl lg:text-5xl tracking-tighter leading-none font-bold my-4 ">
              {titlearr[count]}
            </h1>
            <p className="text-slate-600 opacity-50 text-md font-semibold">
              {pararr[count]}
            </p>
            <div className="my-6 flex items-center tracking-[0.8em] font-bold hover:text-slate-500 hover:opacity-50">
              <a href="#">SHOP NOW</a>
              <svg
                className="mx-6"
                width="40"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                  fill="#000"
                />
              </svg>
            </div>
            <div className="absolute top-0 translate-y-[-100%] lg:translate-y-0 right-0 lg:bottom-0 flex items-end lg:left-0 w-[27%]">
              <button
                onClick={prevItem}
                className="bg-black hover:bg-stone-600 flex items-center justify-center aspect-square w-3/6 "
              >
                <svg
                  c
                  width="14"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" />
                </svg>
              </button>
              <button
                onClick={nextItem}
                className="bg-black hover:bg-stone-600 flex items-center justify-center aspect-square w-3/6 "
              >
                <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" />
                </svg>
              </button>
            </div>
          </div>
        </section>
        <div className="w-screen lg:h-2/6 lg:flex box-border font-spartan">
          <img className="" src="./image-about-dark.jpg" alt="" />
          <div className="px-6 py-10 lg:p-12">
            <h1 className="text-lg font-bold tracking-[0.3em] my-4">
              ABOUT OUR FURNITURE
            </h1>
            <p className="font-semibold text-slate-500 opacity-60">
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
          <img className="" src="./image-about-light.jpg" alt="" />
        </div>
      </main>
    </>
  );
}
