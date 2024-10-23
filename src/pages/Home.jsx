// import React, { useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Mousewheel, Keyboard } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/mousewheel';
// import 'swiper/css/keyboard';
// import { gsap } from 'gsap';
// import '@google/model-viewer';

// export default function Home() {
//   useEffect(() => {
//     const car = document.querySelector('model-viewer');
//     const loading = document.getElementById('loading');
//     const title = document.querySelectorAll('.title');

//     // Fade out the loading screen when the model is loaded
//     car.addEventListener('load', () => {
//       gsap.to(loading, { duration: 1, autoAlpha: 0 });
//     });

//     // GSAP animation setup for title
//     gsap.to(title, { duration: 1, delay: 0.5, ease: 'Power4.easeOut', autoAlpha: 1, yPercent: 0 });
//   }, []);

//   return (
//     <div id="page" className="h-full bg-gradient-to-r from-transparent to-slate-200/30 bg-slate-200 text-slate-900 relative overflow-hidden select-none">
//       <div id="loading" className="absolute inset-0 z-50 bg-slate-200/80 flex items-center justify-center">
//         <svg className="animate-spin h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//           <g fill="none" stroke="currentColor" strokeWidth="2">
//             <circle className="opacity-20" cx="12" cy="12" r="11" />
//             <path d="M23 12c0 6.1-4.9 11-11 11" />
//           </g>
//         </svg>
//       </div>

//       <model-viewer
//         src="https://cdn.glitch.global/ccaf12bb-59b0-46bb-bd74-b9467ca22e3d/scene.gltf?v=1674149863924"
//         exposure="1"
//         camera-orbit="0deg 10deg 20%"
//         shadow-intensity="3"
//         className="absolute left-0 top-0 w-full h-full z-30 pointer-events-none"
//       ></model-viewer>

//       <Swiper
//         className="swiper absolute left-0 top-0 w-full h-full z-40"
//         direction="vertical"
//         speed={1500}
//         grabCursor={true}
//         touchRatio={2}
//         threshold={1}
//         mousewheel={{ forceToAxis: true }}
//         keyboard={{ enabled: true }}
//         modules={[Mousewheel, Keyboard, Navigation]} // Import modules like this in JSX
//         onSlideChange={(swiper) => {
//           const car = document.querySelector('model-viewer');
//           const exposure1 = '1';
//           const exposure2 = '0.4';
//           const exposure3 = '1';

//           if (swiper.activeIndex === 0) {
//             gsap.to(car, { duration: 1.5, attr: { exposure: exposure1 } });
//           } else if (swiper.activeIndex === 1) {
//             gsap.to(car, { duration: 1.5, attr: { exposure: exposure2 } });
//           } else if (swiper.activeIndex === 2) {
//             gsap.to(car, { duration: 1.5, attr: { exposure: exposure3 } });
//           }
//         }}
//       >
//         <SwiperSlide className="flex flex-col justify-end p-[5vw]">
//           <div id="inner-1" className="flex flex-col items-start gap-4 lg:gap-8 w-full sm:w-2/3 lg:w-1/3">
//             <h1 className="text-[clamp(26px,4vw,60px)] font-light uppercase leading-none">
//               Datsun <br /><span className="font-bold">240K GT</span>
//             </h1>
//             <p>Introducing a masterpiece, the combination of all Datsun’s great automotive innovations.</p>
//             <strong className="hidden lg:block">From 30,500 €</strong>
//             <div className="flex flex-wrap gap-2">
//               <a href="#section-2" className="uppercase px-6 py-3 md:px-12 md:py-4 rounded-full text-xs md:text-base tracking-wider text-white bg-blue-700 hover:bg-blue-600 active:bg-blue-900 transition-colors grow text-center">
//                 Learn more
//               </a>
//               <p className="uppercase px-6 py-3 md:px-12 md:py-4 rounded-full text-xs md:text-base tracking-wider bg-transparent hover:bg-slate-50/50 active:bg-white transition-colors grow text-center">
//                 Contact us
//               </p>
//             </div>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide className="flex flex-col items-end justify-end lg:justify-center relative px-[5vw] py-[5vh]">
//           <div id="inner-2" className="flex flex-col items-start gap-5 lg:gap-8 w-full sm:w-2/3 lg:w-1/3 bg-zinc-900/20 p-[2.5vw] mb-8 sm:box-content rounded-xl text-white backdrop-blur-lg">
//             <h2 className="text-[clamp(22px,3vw,36px)] leading-[110%]">
//               A compact car with an exceptional power-to-weight ratio
//             </h2>
//             <p className="mb-10 lg:mb-7">In addition to all the usual Datsun free extras...</p>
//             <a href="#section-3" className="uppercase px-12 py-4 rounded-full text-xs md:text-base tracking-wider text-white bg-blue-700 hover:bg-blue-600 active:bg-blue-900 transition-colors absolute bottom-0 translate-y-1/2">
//               Personalise
//             </a>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide className="flex flex-col items-center relative px-[5vw] py-[5vh]">
//           <div id="inner-3" className="relative flex flex-col items-center gap-4 text-white">
//             <h4 className="text-[clamp(22px,3vw,36px)]">Paint</h4>
//             <div className="flex gap-8">
//               <button aria-label="White" data-color="#CBD5E1" className="relative rounded-full w-[40px] h-[30px] bg-gradient-to-r from-slate-50 to-slate-500 outline-none hover:scale-110 transition-all"></button>
//               <button aria-label="Blue" data-color="#355F99" className="relative rounded-full w-[40px] h-[30px] bg-gradient-to-r from-blue-500 to-blue-900 outline-none hover:scale-110 transition-all"></button>
//               <button aria-label="Red" data-color="#923939" className="relative rounded-full w-[40px] h-[30px] bg-gradient-to-r from-red-400 to-red-800 outline-none hover:scale-110 transition-all"></button>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>

//       <picture className="absolute left-0 top-1/2 w-full h-full z-0">
//         <img src="background-image-url.jpg" alt="Landscape" className="w-full h-full object-cover" />
//       </picture>
//     </div>
//   );
// };

// Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper';

// Import Swiper styles
import 'swiper/css';

export default function Home() {
  return (
    <Swiper
      modules={[Keyboard]}
      keyboard={{ enabled: true }}
    >
      {/* Your swiper slides */}
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
    </Swiper>
  );
};
