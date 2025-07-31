<template>
  <div class="flex flex-col min-h-screen">
    <HeaderBanner />
    <main class="flex-grow flex justify-center">
      <NuxtPage :transition="{
        name: 'page',
        mode: 'out-in'
      }" />
    </main>
    <TheFooter />
  </div>
</template>

<style>
body {
  font-family: 'Cousine', sans-serif;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.3rem)
}
</style>
