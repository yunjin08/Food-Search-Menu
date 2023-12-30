<template>
  <header
    class="bg-white shadow-md h-12 flex items-center justify-center font-serif text-xl"
  >
    <img
      src="../images/bg3.webp"
      class="object-cover absolute w-[100vw] h-12 left-0 opacity-[0.3] pointer-events-none"
      alt="bg-3"
    />
    <p>Welcome to NoshNest Website</p>
  </header>
  <div
    class="bg-[#f9f9f2] text-[#454010] shadow-md h-20 flex justify-between items-stretch px-12"
  >
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-1"
    >
      <p class="calligraphy-paragraph text-4xl font-bold">NoshNest</p>
    </router-link>
    <div
      class="flex items-center justify-center gap-1 border-[1.5px] border-[#403b0a] shadow font-serif h-[3rem] mt-4 rounded-3xl overflow-hidden"
    >
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
      >
        Meals by letter
      </router-link>
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
      >
        Meals by Ingredients
      </router-link>
    </div>
    <div class="flex items-center justify-center">
      <router-link
        to="/"
        class="border-[1px] border-[#403b0a] shadow px-2 py-1 rounded-2xl font-medium"
        >Add A Recipe</router-link
      >
    </div>
  </div>
</template>
