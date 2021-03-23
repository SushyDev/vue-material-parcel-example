<template>
  <div>
    <p>{{ lol }}</p>
    <md-button class="md-primary" @click="switchTheme()">{{ this.$material.theming.theme == 'default' ? 'Dark' : 'Light' }}</md-button>
    <md-button class="md-accent" @click="switchTheme()">{{ this.$material.theming.theme == 'default' ? 'Dark' : 'Light' }}</md-button>
  </div>
</template>

<script>
import data from './App.vue';

export default {
  created() {
    this.$emit('showMenu');
  },
  data() {
    return {
      lol: data.data().lol,
    };
  },
  methods: {
    switchTheme() {
      const current = this.$material.theming.theme;
      this.$material.theming.theme = current == 'default' ? 'dark' : 'default';
    },
  },
};
</script>
