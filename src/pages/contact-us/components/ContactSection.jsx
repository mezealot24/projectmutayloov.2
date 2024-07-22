import React from "react";

export const ContactSection = () => {
  return (
    <div className="lg:flex lg:justify-center lg:items-center lg:px-16 lg:py-4  ">
      <div className="flex flex-col px-4 py-8 mx-auto lg:mx-auto w-full text-base max-w-[480px] lg:max-w-screen-2xl">
        <div className="text-4xl font-medium tracking-tight leading-10 text-neutral-900 lg:w-full">
          Contact Us
        </div>
        <div className="flex lg:grid lg:grid-cols-3 lg:gap-6 flex-col mt-8 lg:mt-8 lg:w-full  bg-white">
          <div className="flex flex-col items-center px-8 py-4  bg-gray-100">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cfca7eaa11631b67e8dd872780d8661a9644f10c34866254515ccb9640e0668?"
              className="w-8 aspect-square"
            />
            <div className="mt-4 font-bold uppercase leading-[100%] text-zinc-500">
              Address
            </div>
            <div className="self-stretch mt-2 font-semibold leading-7 text-center text-neutral-900">
              123 mutayloo, Bangkok, Thailand
              <br />
            </div>
          </div>
          <div className="flex flex-col items-center px-8 py-4 mt-4 lg:mt-0 text-center bg-gray-100">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f122a72f18b84a086be78199c790ff3987673ca7d10818484920acefa93ba0ed?"
              className="w-8 aspect-square"
            />
            <div className="mt-4 font-bold uppercase leading-[100%] text-zinc-500">
              Contact Us
            </div>
            <div className="self-stretch mt-2 font-semibold leading-7 text-neutral-900">
              +66 98 765 4321
              <br />
            </div>
          </div>
          <div className="flex flex-col items-center px-8 py-4 mt-4 lg:mt-0 text-center whitespace-nowrap bg-gray-100">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e105c5180fe744b0070643111db4dc1cd95e5ef8e0477a4da47196b1e8c10a63?"
              className="w-8 aspect-square"
            />
            <div className="mt-4 font-bold uppercase leading-[100%] text-zinc-500">
              Email
            </div>
            <div className="self-stretch mt-2 font-semibold leading-7 text-neutral-900">
              email@mutayloo.com
              <br />
            </div>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:w-full lg:m-auto lg:mt-4">
          <div className="lg:flex lg:flex-col lg:text-start">
            <form className="flex flex-col grow self-stretch text-base font-bold leading-4 text-zinc-500 max-md:mt-8 max-md:max-w-full" >
              <label htmlFor="fullName" className="mt-8 text-xs font-bold leading-3 uppercase text-zinc-500">
              Full Name
              </label>
              <input
                type="text"
                id="yourName"
                placeholder="Your name"
                className="justify-center px-4 py-2 mt-3 bg-white rounded-md border border-solid border-stone-300 leading-[162.5%] text-zinc-500"
              />
              <label htmlFor="email" className="lg:mt-6 mt-4 text-xs font-bold leading-3 uppercase text-zinc-500">
              Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                className="justify-center px-4 py-2 mt-3 bg-white rounded-md border border-solid border-stone-300 leading-[162.5%] text-zinc-500"
              />
              <label htmlFor="message" className="lg:mt-6 mt-4 text-xs font-bold leading-3 uppercase text-zinc-500">
              Message
              </label>
              <input
                type="text"
                id="message"
                placeholder="Your message"
                className="justify-center text-start px-4 py-2 mt-3 bg-white rounded-md border border-solid border-stone-300 leading-[162.5%] text-zinc-500 h-full"
              />
            </form>
            <button className="justify-center lg:justify-start lg:px-0 px-10 py-1.5 mt-4 font-medium tracking-tight leading-7 text-center text-white bg-purple-600 rounded-lg">
              Send Message
            </button>
          </div>
          <div>
            <div className="lg:flex lg:flex-col lg:ml-5 lg::w-full">
              <div className="lg:flex lg:flex-col lg:grow lg:shrink lg:justify-center lg:w-full">
                <div className="shrink-0 mt-8 bg-zinc-300 h-[500px] lg:w-full" />
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
};

{/* <div className="flex justify-center items-center px-16 py-8 max-md:px-5">
  <div className="flex flex-col w-full max-w-screen-2xl max-md:max-w-full">
    <div className="text-4xl font-medium tracking-tight leading-10 text-neutral-900 max-md:max-w-full">
      Contact Us
    </div>
    <div className="mt-10 bg-white max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex grow justify-center items-center px-8 py-4 w-full text-base bg-gray-100 max-md:px-5 max-md:mt-6 max-md:max-w-full">
            <div className="flex flex-col items-center max-w-full w-[293px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d647edea317edeeaea5308fe6e98ed5930c6956c3a063972dca6e08c8761071?"
                className="w-8 aspect-square"
              />
              <div className="mt-4 font-bold uppercase leading-[100%] text-zinc-500">
                Address
              </div>
              <div className="self-stretch mt-2 font-semibold leading-7 text-center text-neutral-900">
                123 mutayloo, Bangkok, Thailand
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex grow justify-center items-center px-8 py-4 w-full text-base text-center bg-gray-100 max-md:px-5 max-md:mt-6 max-md:max-w-full">
            <div className="flex flex-col items-center max-w-full w-[293px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f122a72f18b84a086be78199c790ff3987673ca7d10818484920acefa93ba0ed?"
                className="w-8 aspect-square"
              />
              <div className="mt-4 font-bold uppercase leading-[100%] text-zinc-500">
                Contact Us
              </div>
              <div className="self-stretch mt-2 font-semibold leading-7 text-neutral-900">
                +66 98 765 4321
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex grow justify-center items-center px-8 py-4 w-full text-base text-center whitespace-nowrap bg-gray-100 max-md:px-5 max-md:mt-6 max-md:max-w-full">
            <div className="flex flex-col items-center max-w-full w-[293px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e105c5180fe744b0070643111db4dc1cd95e5ef8e0477a4da47196b1e8c10a63?"
                className="w-8 aspect-square"
              />
              <div className="mt-4 font-bold uppercase leading-[100%] text-zinc-500">
                Email
              </div>
              <div className="self-stretch mt-2 font-semibold leading-7 text-neutral-900">
                email@mutayloo.com
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow self-stretch text-base font-bold leading-4 text-zinc-500 max-md:mt-8 max-md:max-w-full">
            <div className="text-xs uppercase max-md:max-w-full">Full Name</div>
            <div className="justify-center px-4 py-2 mt-3 bg-white rounded-md border border-solid border-stone-300 leading-[162.5%] text-zinc-500 max-md:max-w-full">
              Your Name
            </div>
            <div className="mt-6 text-xs uppercase max-md:max-w-full">
              Email address
            </div>
            <div className="justify-center px-4 py-2 mt-3 bg-white rounded-md border border-solid border-stone-300 leading-[162.5%] text-zinc-500 max-md:max-w-full">
              Your Email
            </div>
            <div className="mt-6 text-xs uppercase max-md:max-w-full">
              message
            </div>
            <div className="justify-center p-4 mt-3 leading-7 bg-white rounded-md border border-solid border-stone-300 max-md:max-w-full">
              Your message
            </div>
            <div className="justify-center self-start px-10 py-1.5 mt-6 font-medium tracking-tight leading-7 text-center text-white bg-purple-600 rounded-lg max-md:px-5">
              Send Message
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center max-md:mt-8 max-md:max-w-full">
            <div className="shrink-0 bg-zinc-300 h-[500px] max-md:max-w-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>; */}
