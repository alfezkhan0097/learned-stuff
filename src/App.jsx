import { useState } from "react"

export default function App() {
  const [check, setCheck] = useState('press')
  const str = "lg:hidden group/he peer/as ml-auto"
  const clicked = () => {
    if (check == 'press') {
      setCheck('pressed')
    }
    else (
      setCheck('press')
    )
  }
  return (
    <>
      <header className="border-box bg-mobsvg bg-center lg:bg-gradsvg lg:bg-left-bottom bg-auto w-screen lg:w-screen h-svh lg:h-[526px] px-8 py-12  lg:px-36 lg:py-12 rounded-bl-[96px] relative overflow-hidden *:text-white flex flex-col">
        <div className="flex">
          <div className="text-4xl font-bold font-overpass">Bloggr</div>
          <div className={`${check} ${str}`}>
            <button onClick={clicked} className=" flex items-center text-blue-600 p-3">
              <svg className="block group-[.pressed]/he:hidden" width="32" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" ><path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" /></g></svg>
              <svg className="hidden group-[.pressed]/he:block" width="26" height="26" xmlns="http://www.w3.org/2000/svg"><path d="M23.607.98l1.414 1.413L14.414 13l10.607 10.607-1.414 1.414L13 14.414 2.393 25.021.98 23.607 11.586 13 .98 2.393 2.393.98 13 11.586 23.607.98z" fill="#FFF" fill-rule="evenodd" /></svg>
            </button>
          </div>
          <nav className="absolute hidden peer-[.pressed]/as:block lg:static w-[72%] h-auto bg-white lg:bg-transparent top-32 left-2 p-4 lg:p-0 lg:flex lg:top-0 lg:justify-between lg:items-center lg:w-11/12 mx-12 rounded-xl shadow-2xl lg:shadow-none">
            <ul className="flex flex-col items-center text-black lg:grid lg:grid-cols-3 lg:*:text-slate-200 lg:*:text-opacity-70 *:font-semibold *:font-ubuntu *:text-md">
              <li className="group/li realtive flex lg:grid grid-cols-2 gap-2 items-center h-[52px] "><a className="group-hover/li:text-slate-400 lg:group-hover/li:text-white group-hover/li:underline decoration-2" href="#">Product</a><img className="scale-[1.2] group-hover/li:rotate-180 lg:group-hover/li:filter lg:group-hover/li:brightness-[400%]" src="/icon-arrow-dark.svg" /> <div className="hidden absolute font-ubuntu hover:block group-hover/li:block shadow-2xl min-w-[160px] group-hover/li:top-24 bg-white text-black p-5 rounded-lg text-left"><ul className="*:font-normal ">
                <li className="hover:font-medium"><a href="#">Overview</a></li>
                <li className="hover:font-medium"><a href="#">Pricing</a></li>
                <li className="hover:font-medium"><a href="#">Features</a></li>
                <li className="hover:font-medium"><a href="#">Integration</a></li></ul></div> </li>

              <li className="group/li realtive lg:grid flex lg:grid-cols-2 gap-2 items-center h-[52px] "><a className="group-hover/li:text-slate-400 lg:group-hover/li:text-white group-hover/li:underline decoration-2" href="#">Company</a><img className="scale-[1.2] group-hover/li:rotate-180 group-hover/li:filter lg:group-hover/li:brightness-[400%]" src="/icon-arrow-dark.svg" /> <div className=" hidden absolute font-ubuntu hover:block group-hover/li:block shadow-2xl min-w-[160px] group-hover/li:top-24 bg-white text-black p-5 rounded-lg text-left"><ul className="*:font-normal ">
                <li className="hover:font-medium"><a href="#">About</a></li>
                <li className="hover:font-medium"><a href="#">Team</a></li>
                <li className="hover:font-medium"><a href="#">Blog</a></li>
                <li className="hover:font-medium"><a href="#">Careers</a></li></ul></div> </li>

              <li className="group/li realtive flex lg:grid grid-cols-2 gap-2 items-center h-[52px] "><a className="group-hover/li:text-slate-400 lg:group-hover/li:text-white group-hover/li:underline decoration-2" href="#">Contact</a><img className="scale-[1.2] group-hover/li:rotate-180 group-hover/li:filter lg:group-hover/li:brightness-[400%]" src="/icon-arrow-dark.svg" /> <div className=" hidden absolute font-ubuntu hover:block group-hover/li:block shadow-2xl min-w-[160px] group-hover/li:top-24 bg-white text-black p-5 rounded-lg text-left"><ul className="*:font-normal ">
                <li className="hover:font-medium"><a href="#">Newsletter</a></li>
                <li className="hover:font-medium"><a href="#">Linkdin</a></li>
                <li className="hover:font-medium"><a href="#">Linkdout</a></li>
                <li className="hover:font-medium"><a href="#">LinkinBetween</a></li></ul></div> </li>
            </ul>
            <div className="flex flex-col lg:flex-row">
              <button className="transition-all duration-150 text-slate-800 lg:text-slate-100 text-opacity-70 font-semibold px-8 py-3">Login</button>
              <button className="transition-all duration-150 bg-white text-red-400 font-semibold text-opacity-70 hover:bg-red-300 rounded-3xl hover:text-white px-8 py-3">Sign Up</button>
            </div>
          </nav>
        </div>
        <div className="flex flex-grow flex-col justify-center items-center">
          <h1 className="text-[2rem] text-center lg:text-6xl font-overpass">An alright publishing platform</h1>
          <h1 className="text-lg text-center font-overpass font-light text-slate-100 text-opacity-70 m-6">Grow your audience and build something new</h1>
          <div>
            <button className="border-[2px] transition-all duration-150 border-white rounded-3xl px-4 py-2 m-2 font-semibold hover:bg-red-300 hover:text-white hover:border-red-300"><a href="#">Start for free</a></button>
            <button className="border-[2px] transition-all duration-150 border-white rounded-3xl px-4 py-2 m-2 font-semibold  hover:bg-white hover:text-red-400"><a href="#">learn more</a></button>
          </div>
        </div>
      </header>
      <main className="w-screen lg:w-screen border-box *:border-box">
        <div className="relative font-overpass flex flex-col items-center">
          <h1 className="text-3xl lg:text-4xl my-24 lg:my-0 font-semibold text-darkone lg:absolute top-32">Design for the future</h1>
          <div className="lg:mt-16 w-full flex flex-col-reverse lg:flex-row">
            <div className="w-full lg:w-[58%] text-center lg:text-left pt-16 px-8 lg:pt-36 lg:px-36 mb-48" >
              <div className="text-2xl mt-16 font-bold text-darkone my-8">
                Introducing an extensible editor
              </div>
              <p className="text-bodycol text-sm leading-relaxed">Bloggr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
                The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
                videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
                change the looks of a blog.</p>
              <div className="text-2xl mt-16 font-bold text-darkone my-8">
                Robust content management
              </div>
              <p className="text-bodycol text-sm leading-relaxed">Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
            </div>
            <div className="h-[300px] lg:h-auto lg:w-[42%] overflow-hidden bg-cmob lg:bg-bgone bg-cover" >
            </div>
          </div>
        </div>
        <div className="w-screen lg:w-full flex flex-col lg:flex-row h-[680px] lg:h-[360px] bg-gradient-to-r my-12 from-[color:hsl(237,17%,21%)] to-[hsl(237,23%,32%)] rounded-bl-[92px] rounded-tr-[92px] ">
          <div className="h-2/6 lg:h-full lg:w-3/6 lg:bg-bgcircle bg-bottom lg:bg-right-bottom relative "><img className="absolute top-[-180px] lg:top-[-68px] lg:left-24" src="/illustration-phones.svg" alt="" /></div>
          <div className="h-4/6 w-full flex flex-col px-5 lg:px-0 items-center lg:items-start lg:h-full lg:w-3/6 text-center lg:text-left lg:py-24 font-overpass lg:pr-48 *:text-white ">
            <h1 className="text-4xl py-4">State of the Art Infrastructure</h1>
            <p className="text-lg lg:text-md leading-loose font-thin ">With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
              This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
          </div>
        </div>
        <div className="font-overpass flex flex-col items-center mb-24">
          <div className="lg:mt-16 w-full flex flex-col lg:flex-row">
            <div className="h-[300px] lg:h-auto lg:w-[50%] overflow-hidden bg-blap lg:bg-blaptop bg-center lg:bg-right bg-cover" >
            </div>
            <div className="w-full lg:w-[50%] text-center lg:text-left pt-16 px-8 lg:pt-36 lg:pl-12 lg:pr-48 lg:mb-48" >
              <div className="text-[2rem] lg:text-2xl mt-16 font-bold text-darkone my-8">
                Free, open, simple
              </div>
              <p className="text-lg text-bodycol lg:text-sm leading-relaxed">Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
              </p>
              <div className=" text-[2rem] lg:text-2xl mt-16 font-bold text-darkone my-8">
                Powerful tooling
              </div>
              <p className="text -lg text-bodycol lg:text-sm leading-relaxed">Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-screen bg-footerbg h-screen lg:h-[328px] rounded-tr-[96px] text-white flex flex-col lg:flex-row">
        <div className="text-[2.4rem] lg:w-[32%] text-center p-12 font-bold font-sans">Bloggr</div>
        <div className="w-full text-sm lg:py-16 flex flex-col items-center lg:items-start lg:flex-row ">
          <ul className="my-4 flex flex-col items-center lg:block *:text-footercol *:py-[0.35rem] *:font-normal font-bold lg:mr-48">
            Product
            <li className="mt-4 hover:underline decoration-2"><a href="#">Overview</a></li>
            <li className=" hover:underline decoration-2"><a href="#">Pricing</a></li>
            <li className=" hover:underline decoration-2"><a href="#">Marketplace</a></li>
            <li className=" hover:underline decoration-2"><a href="#">Features</a></li>
            <li className=" hover:underline decoration-2"><a href="#">Integration</a></li>
          </ul>
          <ul className="my-4 flex flex-col items-center lg:block *:text-footercol *:py-[0.35rem] *:font-normal font-bold lg:mr-48">
            Company
            <li className="mt-4 hover:underline decoration-2"><a href="#">About</a></li>
            <li className=" hover:underline decoration-2"><a href="#">Team</a></li>
            <li className=" hover:underline decoration-2"><a href="#">Blog</a></li>
            <li className=" hover:underline decoration-2"><a href="#">Careers</a></li>
          </ul>
          <ul className="my-4 flex flex-col items-center lg:block *:text-footercol *:py-[0.35rem] *:font-normal font-bold lg:mr-48">
            Connect
            <li className="mt-4 hover:underline decoration-2"><a href="#">Contact</a></li>
            <li className=" hover:underline decoration-2"><a href="#">Newsletter</a></li>
            <li className=" hover:underline decoration-2"><a href="#">Linkedln</a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}