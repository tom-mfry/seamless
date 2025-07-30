<template>
  <header class="relative sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm py-4 border-b border-gray-200" id="header">
    <div class="grid grid-cols-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <NuxtLink to="/" class="flex items-center justify-start pl-4 translate-y-[-5px] col-span-4 col-start-1">
        <span class="text-5xl font-serif text-gray-800 tracking-widest">Seamless</span>
      </NuxtLink>

      <!-- Desktop Nav (hidden on mobile) -->
      <nav class="hidden sm:flex items-center justify-end space-x-8 col-span-2 col-start-5">
        <NuxtLink to="/" class="text-sm font-medium text-gray-700 hover:text-gray-900">Home</NuxtLink>
        <NuxtLink to="/info" class="text-sm font-medium text-gray-700 hover:text-gray-900">Info</NuxtLink>
        <NuxtLink to="/contact" class="text-sm font-medium text-gray-700 hover:text-gray-900">Contact</NuxtLink>
      </nav>

      <!-- Mobile Menu Button (visible on mobile) -->
      <div class="flex sm:hidden items-center justify-end col-span-2 col-start-6 pr-4">
        <button @click="toggleMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span class="sr-only">Open main menu</span>
          <svg v-if="!isMenuOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu (collapsible) -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div v-show="isMenuOpen" class="absolute top-full left-0 w-full sm:hidden bg-white border-b border-gray-200 shadow-lg" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink to="/" @click="closeMenu" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</NuxtLink>
          <NuxtLink to="/info" @click="closeMenu" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Info</NuxtLink>
          <NuxtLink to="/contact" @click="closeMenu" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</NuxtLink>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
/* Scoped styles can be added here if needed */
</style>
