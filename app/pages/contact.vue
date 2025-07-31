<template>
  <div class="w-full">
    <Head>
      <Title>Contact - Seamless by Hope</Title>
      <Meta name="description" content="Get in touch with Seamless by Hope for your bridal seamstress needs." />
    </Head>

    <div class="form max-w-lg w-full text-center mx-auto pt-8 pb-8">
      <h1 class="text-2xl font-light tracking-widest uppercase mb-8">
        Contact Hope
      </h1>

      <form
        name="contact"
        method="POST"
        action="/thank-you"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit="handleSubmit"
        class="space-y-6 px-4 sm:px-6 lg:px-8"
      >
        <input type="hidden" name="form-name" value="contact" />
        
        <!-- Honeypot field for spam protection -->
        <p class="hidden">
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </p>

        <div>
          <label for="name" class="sr-only">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            class="form-input"
            placeholder="Full Name"
          />
        </div>

          <div class="">
            <label for="email" class="sr-only">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              class="form-input"
              placeholder="Email address"
            />
          </div>
          <div class="">
            <label for="phone" class="sr-only">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              class="form-input"
              placeholder="Phone Number"
            />
          </div>

        <ClientOnly>
          <div class="pb-1">
            <label for="wedding-date" class="sr-only">Wedding Date</label>
            <date-picker
              v-model:value="weddingDate"
              format="DD-MM-YYYY"
              value-type="format"
              placeholder="Wedding Date"
              :editable="false"
              :clearable="false"
              input-class="appearance-none relative block w-full px-3 py-3 border-b border-gray-300 bg-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm rounded-none"
            />
            <input type="hidden" name="wedding-date" :value="weddingDate" />
          </div>
        </ClientOnly>

        <div class="text-center">
          <label class="text-gray-700 font-light text-sm tracking-widest uppercase">Which services do you require?</label>
          <div class="mt-4 space-y-4 mx-10">
            <div class="flex items-center">
              <input 
                id="service-steaming" 
                name="service-steaming" 
                type="checkbox" 
                class="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
              >
              <label for="service-steaming" class="ml-3 block text-sm text-gray-800">
                Dress Steaming
              </label>
            </div>
            <div class="flex items-center">
              <input 
                id="service-cleaning" 
                name="service-cleaning" 
                type="checkbox" 
                class="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
              >
              <label for="service-cleaning" class="ml-3 block text-sm text-gray-800">
                Wedding Dress Cleaning
              </label>
            </div>
            <div class="flex items-center">
              <input 
                id="service-bridesmaid" 
                name="service-bridesmaid" 
                type="checkbox" 
                class="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
              >
              <label for="service-bridesmaid" class="ml-3 block text-sm text-gray-800">
                Bridesmaid Dress Alterations
              </label>
            </div>
          </div>
        </div>

        <div>
          <label for="message" class="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            rows="3"
            required
            class="form-input"
            placeholder="Tell Hope about your wedding dress and the alterations you will require. Or, ask her any question."
          ></textarea>
        </div>

        <div>
          <label for="dress-link" class="sr-only">Dress Website Link</label>
          <input
            id="dress-link"
            name="dress-link"
            type="url"
            class="form-input"
            placeholder="Website link your your dress"
          />
        </div>

        <div>
          <button
            type="submit"
            :disabled="isSubmitting"
            class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="isSubmitting" class="flex items-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
            <span v-else>Submit</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';

const weddingDate = ref(new Date());
const isSubmitting = ref(false);

const handleSubmit = (event: Event) => {
  isSubmitting.value = true;
  // Netlify will handle the form submission
  // The loading state will be cleared when the page redirects
};
</script>

<style scoped>
.form-input {
  @apply appearance-none relative block w-full px-3 py-3 border-b border-gray-300 bg-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm rounded-none;
}
.mx-datepicker {
  width: 100%;
}
</style>