<template>
  <div class="w-full transition-opacity duration-1000" :class="{ 'opacity-0': !isMounted }">
    <Head>
      <Title>Contact - Seamless by Hope</Title>
      <Meta name="description" content="Get in touch with Seamless by Hope for your bridal seamstress needs." />
    </Head>

    <div class="form max-w-lg w-full text-center mx-auto">
      <h1 class="text-2xl font-light tracking-widest uppercase mb-8">
        Contact Hope
      </h1>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        class="space-y-6"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        <div>
          <label for="name" class="sr-only">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            class="appearance-none relative block w-full px-3 py-3 border-b border-gray-300 bg-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Full Name"
          />
        </div>
        <div>
          <label for="email" class="sr-only">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            class="appearance-none relative block w-full px-3 py-3 border-b border-gray-300 bg-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </div>
        <div>
          <label for="message" class="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            rows="3"
            required
            class="appearance-none relative block w-full px-3 py-3 border-b border-gray-300 bg-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Tell Hope about your wedding dress and the alterations you will require. Or, ask her any question."
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})
</script>

<style scoped>
  .form {
    margin-top: 250px;
  }
</style>
