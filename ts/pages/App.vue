<template>
  <div class="page-container md-layout-column">
    <md-toolbar class="md-primary">
      <md-button v-show="showMenu" class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Login</span>
    </md-toolbar>

    <md-progress-bar v-show="showProgress" class="md-accent" md-mode="query"></md-progress-bar>

    <md-drawer :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">My App name</span>
      </md-toolbar>

      <md-list>
        <md-list-item to="/about" @click="routeChange()" exact>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Home</span>
        </md-list-item>

        <md-list-item to="/home" @click="routeChange()">
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Other page</span>
        </md-list-item>
      </md-list>
    </md-drawer>

    <md-content>
      <router-view @showProgress="showProgress = !showProgress" @showMenu="showMenu = !showMenu" />
    </md-content>
  </div>
</template>

<script>
import Home from './Home';

export default {
  components: {
    Home,
  },
  data: () => ({
    showMenu: false,
    showProgress: false,
    showNavigation: false,
  }),
  methods: {
    routeChange() {
      this.showNavigation = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.page-container {
  height: 100vh;
  overflow: hidden;
  position: relative;
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.md-content {
  padding: 16px;
}
</style>
