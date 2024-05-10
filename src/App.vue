<template>
  <div class="min-h-screen font-urbanist">
    <header class="bg-white shadow-md p-4 fixed w-full top-0 left-0 z-10 flex justify-between items-center font-bold">
      <h1 class="text-3xl text-custom-dark-blue">Etymo*</h1>
      <nav>
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-custom-dark-blue focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul :class="{'hidden': !menuOpen, 'flex': menuOpen, 'flex-col': menuOpen, 'space-y-4': menuOpen, 'absolute': menuOpen, 'bg-white': menuOpen, 'top-16': menuOpen, 'right-4': menuOpen, 'p-4': menuOpen, 'border': menuOpen, 'md:flex': true, 'md:space-x-4': true, 'md:space-y-0': true, 'md:flex-row': true, 'md:static': true}">
          <li><button @click="scrollToSection('multilingualism')" class="hover:underline">Welcome</button></li>
          <li><button @click="scrollToSection('about')" class="hover:underline">About</button></li>
          <li><button @click="scrollToSection('solutions')" class="hover:underline">Solutions</button></li>
          <li>
            <select v-model="currentLanguage" class="hover:underline">
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
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
              <p>{{ t('multilingualism_content_1') }}</p>
              <p>{{ t('multilingualism_content_2') }}</p>
              <p>{{ t('multilingualism_content_3') }}</p>
            </div>
          </div>
        </div>
        <div class="flex-1 flex justify-center items-center mt-4 md:mt-0">
          <img :src="image01" alt="Illustration of two people working at a desk" class="ml-4 max-w-full h-auto">
        </div>
      </section>
      <section id="about" class="my-8 p-4 flex justify-center bg-white">
        <div class="w-full md:w-3/4 p-4">
          <h2 class="text-4xl font-semibold pb-8">{{ t('about_title') }}</h2>
          <div class="text-xl">
            <div class="text-xl">
              <p class="no-margin">{{ t('about_content_1') }}</p>
              <p class="big-margin">{{ t('about_content_2') }}</p>
              <p class="no-margin">{{ t('about_content_3') }}</p>
              <p class="big-margin">{{ t('about_content_4') }}</p>
              <p class="no-margin">{{ t('about_content_5') }}</p>
              <p class="big-margin">{{ t('about_content_6') }}</p>
              <p class="no-margin">{{ t('about_content_7') }}</p>
              <p class="big-margin">{{ t('about_content_8') }}</p>
              <p>{{ t('about_content_9') }}</p>
            </div>
          </div>
        </div>
      </section>
      <section id="solutions" class="my-8 p-4">
        <div class="w-full md:w-3/4 mx-auto">
          <h2 class="text-4xl font-semibold pb-8 text-center">{{ t('solution_title_main') }}</h2>
          <div class="flex flex-col md:flex-row justify-between">
            <div class="flex-1 p-6">
              <img :src="solutionImage1" alt="Solution 1" class="mb-4 max-w-full h-auto">
              <h3 class="text-xl font-semibold mb-2">{{ t('solution_title_1') }}</h3>
              <p>{{ t('solution_content_1') }}</p>
            </div>
            <div class="flex-1 p-4">
              <img :src="solutionImage2" alt="Solution 2" class="mb-4 max-w-full h-auto">
              <h3 class="text-xl font-semibold mb-2">{{ t('solution_title_3') }}</h3>
              <p>{{ t('solution_content_2') }}</p>
            </div>
            <div class="flex-1 p-4">
              <img :src="solutionImage3" alt="Solution 3" class="mb-4 max-w-full h-auto">
              <h3 class="text-xl font-semibold mb-2">{{ t('solution_title_3') }}</h3>
              <p>{{ t('solution_content_3') }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
p {
  margin-bottom: 0.75rem;
}
.no-margin {
  margin-bottom: 0;
}
.big-margin {
  margin-bottom: 1.5rem;
}
</style>

<script>
import langData from './assets/languages';
const image01 = require('@/assets/illustration-01.png');
const solutionImage1 = require('@/assets/solution-01.png');
const solutionImage2 = require('@/assets/solution-02.png');
const solutionImage3 = require('@/assets/solution-03.png');

export default {
  data() {
    return {
      currentLanguage: 'en',
      image01,
      solutionImage1,
      solutionImage2,
      solutionImage3,
      menuOpen: false
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
    }
  }
}
</script>
