<template>
  <portal to="screen">
    <transition name="screen">
      <VueSimplebar v-if="show" :key="screenName" class="SScreen">
        <div v-if="title" class="header">
          <p class="header-title">{{ title }}</p>
        </div>

        <div class="content">
          <slot />
        </div>
      </VueSimplebar>
    </transition>
  </portal>
</template>

<script>
import VueSimplebar from 'simplebar-vue'

export default {
  components: {
    VueSimplebar
  },

  props: {
    name: { type: String, required: true },
    title: { type: String, default: null }
  },

  computed: {
    screenName () {
      return this.$store.state.screen.name
    },

    show () {
      return this.name === this.screenName
    }
  }
}
</script>

<style lang="postcss" scoped>
@import "@/assets/styles/variables";

.SScreen {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: var(--z-index-screen);
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, .5);
  transition: opacity .25s;
}

.SScreen.screen-enter,
.SScreen.screen-leave-to {
  opacity: 0;

  .header {
    opacity: 0;
    transform: translateY(8px);
  }
}

.header {
  padding: 64px 64px 0;
  transition: opacity .25s, transform .25s;
}

.header-title {
  text-align: center;
  font-size: 20px;
}
</style>
