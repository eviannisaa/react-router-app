import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

export function PageLayout() {
     return (
          <div className="w-full min-h-screen bg-white text-black">
               <header className="flex justify-between items-center px-4 md:px-8 lg:px-32 py-4 border-b border-black/5 shadow-[0_1px_1px_0_rgba(0,0,0,0.05)]">
                    <h1 className="text-2xl font-extrabold">Frontend.</h1>
                    <span className="text-base font-normal flex gap-1">
                         Layout 1
                         <span className="hidden lg:block">Desktop</span>
                         <span className="hidden md:block lg:hidden">
                              Tablet
                         </span>
                         <span className="md:hidden">Mobile</span>
                    </span>
               </header>

               <div className="px-4 md:px-8 lg:px-32 flex flex-col gap-4 py-4">
                    <div className="w-full relative">
                         <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-20 h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 rounded-full bg-white/10 shadow-xl flex items-center justify-center border border-black/10 hover:bg-neutral-100/20 transition cursor-pointer">
                              <svg
                                   width="20"
                                   height="20"
                                   fill="none"
                                   stroke="white"
                                   strokeWidth="2"
                                   viewBox="0 0 24 24"
                                   className="hidden md:block"
                              >
                                   <path d="M15 18l-6-6 6-6" />
                              </svg>
                              <svg
                                   width="16"
                                   height="16"
                                   fill="none"
                                   stroke="white"
                                   strokeWidth="2"
                                   viewBox="0 0 24 24"
                                   className="md:hidden"
                              >
                                   <path d="M15 18l-6-6 6-6" />
                              </svg>
                         </button>

                         <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-20 h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 rounded-full bg-white/10 shadow-xl flex items-center justify-center border border-black/10 hover:bg-neutral-100/20 transition cursor-pointer">
                              <svg
                                   width="20"
                                   height="20"
                                   fill="none"
                                   stroke="white"
                                   strokeWidth="2"
                                   viewBox="0 0 24 24"
                                   className="hidden md:block"
                              >
                                   <path d="M9 18l6-6-6-6" />
                              </svg>
                              <svg
                                   width="16"
                                   height="16"
                                   fill="none"
                                   stroke="white"
                                   strokeWidth="2"
                                   viewBox="0 0 24 24"
                                   className="md:hidden"
                              >
                                   <path d="M9 18l6-6-6-6" />
                              </svg>
                         </button>

                         <Swiper
                              modules={[Navigation]}
                              navigation={{
                                   nextEl: ".swiper-button-next-custom",
                                   prevEl: ".swiper-button-prev-custom",
                              }}
                              slidesPerView={1}
                              loop={true}
                              className="rounded-2xl overflow-hidden"
                         >
                              {slides.map((slide, i) => (
                                   <SwiperSlide key={i}>
                                        <div className="relative h-44 md:h-96 lg:h-125 w-full">
                                             <img
                                                  src={slide.img}
                                                  className="w-full h-full object-cover"
                                             />
                                             <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                  <div className="flex flex-col">
                                                       <h2 className="text-white/80 text-base md:text-3xl lg:text-5xl font-bold">
                                                            {slide.title}
                                                       </h2>
                                                       <h2 className="text-white/80 text-base md:text-3xl lg:text-5xl font-bold">
                                                            {slide.subtitle}
                                                       </h2>
                                                  </div>
                                             </div>
                                        </div>
                                   </SwiperSlide>
                              ))}
                         </Swiper>
                    </div>
                    <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                         {cards.map((item, i) => (
                              <div
                                   key={i}
                                   className="border border-neutral-200 rounded-xl p-5 shadow-xs hover:shadow-sm transition bg-neutral-100 flex flex-col gap-4"
                              >
                                   <h3 className="font-bold text-lg">
                                        {item.title}
                                   </h3>
                                   <p className="text-base font-normal text-neutral-500">
                                        {item.text}
                                   </p>
                                   <p className="text-sm font-medium text-neutral-500">
                                        Last updated 5 mins ago
                                   </p>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
}

const cards = [
     {
          title: "Frontend",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id quo numquam quaerat debitis. Natus.",
     },
     {
          title: "Mockup",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id quo numquam quaerat debitis. Natus.",
     },
     {
          title: "Design",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id quo numquam quaerat debitis. Natus.",
     },
     {
          title: "Test",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id quo numquam quaerat debitis. Natus.",
     },
];

const slides = [
     {
          img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
          title: "Frontend",
          subtitle: "— Mockup",
     },
     {
          img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
          title: "Creative",
          subtitle: "— Mockup",
     },
     {
          img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
          title: "Interface",
          subtitle: "— Mockup",
     },
];
