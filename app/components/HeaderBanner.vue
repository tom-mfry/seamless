<template>
  <header class="relative py-5 border-b border-gray-200">
    <div class="flex justify-between items-center mx-10 my-3">
      <!-- Burger Menu Icon -->
      <button class="p-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <!-- Contact Button -->
      <button class="text-gray-700 font-extralight text-sm tracking-widest py-1 px-0.5 uppercase border-b border-gray-400 transition duration-200 ease-in-out mx-8">
        Contact
      </button>
    </div>
    <!-- Logo -->
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <NuxtImg src="/images/seamless-banner.png" alt="Seamless by Hope Logo" class="h-10" />
    </div>
  </header>
</template>

<script setup lang="ts">
// No script needed for this simple component yet
</script>

<style scoped>
/* Scoped styles if needed */
</style>
