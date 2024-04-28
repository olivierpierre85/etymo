<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow-md p-4 fixed w-full top-0 left-0 z-10 flex justify-between items-center">
      <h1 class="text-xl font-bold">Etymo*</h1>
      <nav>
        <ul class="flex space-x-4">
          <li><button @click="scrollToSection('welcome')">Welcome</button></li>
          <li><button @click="scrollToSection('about')">About</button></li>
          <li><button @click="scrollToSection('contact')">Contact</button></li>
        </ul>
      </nav>
      <select v-model="currentLanguage">
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="es">Español</option>
      </select>
    </header>
    <div class="pt-20">
      <section id="welcome" class="my-8 p-4">
        <h2 class="text-2xl font-semibold">Welcome to My Page</h2>
        <p>This is a simple one-pager with a sticky header.</p>
      </section>
      <section id="about" class="my-8 p-4">
        <h2 class="text-2xl font-semibold">About Us</h2>
        <p>Here's a little bit about our project or company.</p>
      </section>
      <section id="contact" class="my-8 p-4">
        <h2 class="text-2xl font-semibold">Contact</h2>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
        <p>{{ t('contact') }}</p>
      </section>
    </div>
  </div>
</template>

<style scoped>
/* Additional styling can go here */
</style>

<script>
import langData from './assets/languages';

export default {
  data() {
    return {
      currentLanguage: 'en'  // default language
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
    }
  }
}
</script>