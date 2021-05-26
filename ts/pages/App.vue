<template>
  <div class="page-container md-layout-column">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">{{ this.lol }}</span>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">My App name</span>
      </md-toolbar>

      <md-list>
        <md-list-item to="/" @click="routeChange()" exact>
          <md-icon>home</md-icon>
          <span class="md-list-item-text">Home</span>
        </md-list-item>

        <md-list-item to="/about" @click="routeChange()">
          <md-icon>send</md-icon>
          <span class="md-list-item-text">About</span>
        </md-list-item>
      </md-list>
    </md-drawer>

    <md-content>
      <router-view />
    </md-content>
  </div>
</template>

<script>

export default {
  data() {
    return {
      showNavigation: false,
      lol: 1,
    };
  },
  methods: {
    routeChange() {
      routeChangeEvent(this);
    },
  },
};

function routeChangeEvent(data) {
  data.showNavigation = false;
}
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
