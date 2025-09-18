<template>
  <div class="w-full flex items-center justify-center">
    <div class="max-w-lg w-full text-center mx-auto">
      <div class="p-8 bg-green-50 border border-green-200 rounded-lg">
        <svg class="mx-auto h-16 w-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <h1 class="text-2xl font-light tracking-widest uppercase mb-4 text-green-800">
          Thank You!
        </h1>
        <p class="text-green-700 mb-6">
          Your message has been sent successfully. Hope will get back to you within 24 hours.
        </p>
        <NuxtLink 
          to="/" 
          class="inline-block py-3 px-6 bg-black text-white hover:bg-gray-800 transition-colors"
        >
          Return Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
