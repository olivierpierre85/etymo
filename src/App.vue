<template>
  <div class="min-h-screen font-urbanist">
    <header class="bg-white shadow-md p-4 fixed w-full top-0 left-0 z-10 flex justify-between items-center font-bold">
      <div class="flex items-end">
        <!-- <img :src="logo" alt="logo" class="max-w-full h-auto mr-2"> -->
        <h1 class="text-4xl text-custom-dark-blue">Etymo*</h1>
      </div>
      <nav>
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-custom-dark-blue focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul :class="{'hidden': !menuOpen, 'flex': menuOpen, 'flex-col': menuOpen, 'space-y-4': menuOpen, 'absolute': menuOpen, 'bg-white': menuOpen, 'top-16': menuOpen, 'right-4': menuOpen, 'p-4': menuOpen, 'border': menuOpen, 'md:flex': true, 'md:space-x-4': true, 'md:space-y-0': true, 'md:flex-row': true, 'md:static': true}">
          <li><button @click="scrollToSection('multilingualism')" class="hover:underline">{{ t('menu_multilingualism') }}</button></li>
          <li><button @click="scrollToSection('about')" class="hover:underline">{{ t('menu_about') }}</button></li>
          <li><button @click="scrollToSection('solutions')" class="hover:underline">{{ t('menu_solutions') }}</button></li>
          <li><button @click="scrollToSection('contact')" class="hover:underline">{{ t('menu_contact') }}</button></li>
          <li>
            <select v-model="currentLanguage" class="hover:underline">
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="nl">Nederlands</option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
    <div class="pt-20 bg-custom-blue">
      <section id="multilingualism" class="my-8 p-4 flex flex-col md:flex-row">
        <div class="flex-1 flex justify-end">
          <div class="w-full md:w-3/4 p-4">
            <h2 class="text-4xl font-semibold pb-8">{{ t('multilingualism_title') }}</h2>
            <div class="text-xl">
              <div v-html="t('multilingualism_content')"></div>
            </div>
          </div>
        </div>
        <div class="flex-1 flex justify-center items-center mt-4 md:mt-0">
          <img :src="image01" alt="Illustration of two people working at a desk" class="max-w-full h-auto rounded-[30px]">
        </div>
      </section>
      <section id="about" class="my-8 p-4 flex justify-center bg-white">
        <div class="w-full md:w-3/4 p-4">
          <h2 class="text-4xl font-semibold pb-8">{{ t('about_title') }}</h2>
            <div class="text-xl">
              <div v-html="t('about_content')"></div>
            </div>
          </div>
      </section>
      <section id="solutions" class="my-8 p-6">
        <div class="w-full md:w-3/4 mx-auto">
          <h2 class="text-4xl font-semibold pb-8 text-center">{{ t('solution_title_main') }}</h2>
          <div class="flex flex-wrap justify-center">
            <div class="w-full md:w-1/2 lg:w-1/4 p-4 text-center">
              <img :src="solutionImage1" alt="Two women talking" class="mb-4 max-w-full h-auto mx-auto rounded-[20px]">
              <h3 class="text-xl font-semibold mb-2">{{ t('solution_title_1') }}</h3>
              <div v-html="t('solution_content_1')"></div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 p-4 text-center">
              <img :src="solutionImage2" alt="Persons holding sticky notes" class="mb-4 max-w-full h-auto mx-auto rounded-[20px]">
              <h3 class="text-xl font-semibold mb-2">{{ t('solution_title_2') }}</h3>
              <div v-html="t('solution_content_2')"></div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 p-4 text-center">
              <img :src="solutionImage3" alt="Learn word spelled with scrabble letters" class="mb-4 max-w-full h-auto mx-auto rounded-[20px]">
              <h3 class="text-xl font-semibold mb-2">{{ t('solution_title_3') }}</h3>
              <div v-html="t('solution_content_3')"></div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 p-4 text-center">
              <img :src="solutionImage4" alt="Person writing on wooden table" class="mb-4 max-w-full h-auto mx-auto rounded-[20px]">
              <h3 class="text-xl font-semibold mb-2">{{ t('solution_title_4') }}</h3>
              <div v-html="t('solution_content_4')"></div>
            </div>
          </div>
        </div>
      </section>
      <!-- Contact Section -->
      <section id="contact" class="my-8 p-6 bg-white">
        <div class="w-full md:w-3/4 mx-auto text-center">
          <h2 class="text-4xl font-semibold pb-8">{{ t('contact_title') }}</h2>
          <div class="flex flex-col md:flex-row justify-around items-center">
            <div class="flex-1 p-4">
              <i class="fas fa-envelope fa-3x mb-2 text-custom-dark-blue"></i>
              <!-- <h3 class="text-xl font-semibold mb-2">Email</h3> -->
              <p>melissa@etymo.be</p>
            </div>
            <div class="flex-1 p-4">
              <a href="https://be.linkedin.com/in/melissawauters">
                <i class="fab fa-linkedin fa-3x mb-2 text-custom-dark-blue"></i>
                <!-- <h3 class="text-xl font-semibold mb-2">LinkedIn</h3> -->
                <p>https://be.linkedin.com/in/melissawauters</p>
              </a>
            </div>
            <div class="flex-1 p-4">
              <i class="fas fa-phone fa-3x mb-2 text-custom-dark-blue"></i>
              <!-- <h3 class="text-xl font-semibold mb-2">Phone</h3> -->
              <p>+32 497 12 97 52</p>
            </div>
          </div>
          <div class="w-full md:w-2/3 mx-auto mt-8">
            <form @submit.prevent="sendEmail" class="bg-gray-100 p-6 rounded-lg shadow-lg">
              <div class="mb-4">
                <label for="name" class="block text-left text-sm font-medium text-gray-700">{{ t('contact_name') }}</label>
                <input type="text" id="name" v-model="form.name" class="mt-1 p-2 w-full border border-gray-300 rounded-md" required>
              </div>
              <div class="mb-4">
                <label for="email" class="block text-left text-sm font-medium text-gray-700">{{ t('contact_email') }}</label>
                <input type="email" id="email" v-model="form.email" class="mt-1 p-2 w-full border border-gray-300 rounded-md" required>
              </div>
              <div class="mb-4">
                <label for="message" class="block text-left text-sm font-medium text-gray-700">{{ t('contact_message') }}</label>
                <textarea id="message" v-model="form.message" rows="4" class="mt-1 p-2 w-full border border-gray-300 rounded-md" required></textarea>
              </div>
              <div>
                <button type="submit" class="bg-custom-dark-blue text-white py-2 px-4 rounded-md hover:bg-blue-700">{{ t('contact_send') }}</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
section p {
  margin-bottom: 1.00rem;
}
</style>

<script>
import emailjs from 'emailjs-com';
import langData from './assets/languages';
const logo = require('@/assets/logo.png');
const image01 = require('@/assets/portrait_melissa.jpg');
const solutionImage1 = require('@/assets/solution-01.webp');
const solutionImage2 = require('@/assets/solution-02.webp');
const solutionImage3 = require('@/assets/solution-03.webp');
const solutionImage4 = require('@/assets/solution-04.webp');

export default {
  data() {
    const browserLanguage = navigator.language || navigator.userLanguage;
    let initialLanguage;

    // Mapping browser language to supported languages
    if (browserLanguage.includes('fr')) {
      initialLanguage = 'fr';
    } else if (browserLanguage.includes('nl')) {
      initialLanguage = 'nl';
    } else {
      initialLanguage = 'en';
    }

    return {
      currentLanguage: initialLanguage,
      logo,
      image01,
      solutionImage1,
      solutionImage2,
      solutionImage3,
      solutionImage4,
      menuOpen: false,
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    t(key) {
      return langData[this.currentLanguage][key] || `[Translation missing for '${key}']`;
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        const headerOffset = 70; // Height of your header
        const sectionTop = section.offsetTop - headerOffset;
        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth'
        });
      }
      this.menuOpen = false; // Close the menu on navigation
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    sendEmail() {
      const serviceID = 'service_44ffhav';
      const templateID = 'template_05bd9p7';
      const publicKey = 'YP4w96vAyA5FfnENy';
      
      emailjs.send(serviceID, templateID, this.form, publicKey)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Email sent successfully!');
          this.form.name = '';
          this.form.email = '';
          this.form.message = '';
        }, (error) => {
          console.log('FAILED...', error);
          alert('Failed to send email. Please try again later.');
        });


    }
  }
}
</script>
