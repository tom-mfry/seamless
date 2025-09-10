<template>
  <div class="w-full">
    <div class="relative w-full h-screen">
      <NuxtImg 
        src="/images/bridal-sea-cropped.png" 
        alt="A bride looking out at the sea" 
        class="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div class="relative z-10 flex flex-col items-center justify-center h-5/6 px-4 text-center">
        <div class="relative">
          <h1 class="text-white text-4xl md:text-7xl font-serif tracking-widest font-thin">
            bespoke alterations
          </h1>
          <div class="absolute top-full left-1/2 -translate-x-1/2 w-full mt-[35px]">
            <NuxtLink 
              to="/contact" 
              class="py-3 px-6 border border-white uppercase tracking-widest bg-white text-black text-sm hover:bg-stone-300 hover:border-stone-300  hover:text-black transition-colors"
              >
              Contact
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup lang="ts"></script>

<style scoped></style>
