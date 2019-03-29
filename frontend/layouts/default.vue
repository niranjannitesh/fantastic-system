<template>
  <div class="font-sans min-h-screen antialiased text-grey relative">
    <app-header />
    <div class="body-content">
      <nuxt />
    </div>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';

export default {
  components: {
    AppHeader,
    AppFooter,
  }
}
</script>
