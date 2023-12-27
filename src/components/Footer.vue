<template>
  <header
    class="bg-white flex-col border-t-2 shadow border-[#e8e8d2] h-36 flex items-center justify-center font-serif text-xl"
  >
    <img
      src="../images/bg3.webp"
      class="object-cover absolute w-[100vw] h-36 left-0 opacity-[0.2] pointer-events-none"
      alt="bg-3"
    />
    <div class="z-10 mt-3 flex gap-32 text-lg">
      <div class="flex flex-col text-[#a7a16a]">
        <h1 class="font-bold">Jed Edison Donaire</h1>
        <h2>University of the Philippines</h2>
        <p class="font-bold">
          Contact me <span class="font-normal"> | 966 278 1586 </span>
        </p>
      </div>
      <div class="flex flex-col text-[#a7a16a]">
        <h1>API @ TheMealDB</h1>
        <h2>United Kingdom</h2>
        <h3>themealdb.com</h3>
      </div>
      <div class="flex flex-col text-[#a7a16a]">
        <h1>Follow Me</h1>
        <div className="flex items-center justify-center xl:justify-start ">
          <a
            href="https://github.com/yunjin08"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="text-[2rem] bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/donaire-jed-edison-291a76282/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="text-[2rem] bx bxl-linkedin-square"></i>
          </a>
          <a
            href="https://www.facebook.com/donairejededison/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="text-[2rem] bx bxl-facebook"></i>
          </a>
        </div>
      </div>
    </div>
    <p
      class="text-sm font-bold w-full flex items-center justify-center mt-5 text-[#a7a16a]"
    >
      &#169; 2023. Jed Edison Donaire
    </p>
  </header>
</template>
