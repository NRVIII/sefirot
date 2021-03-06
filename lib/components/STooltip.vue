<template>
  <div class="STooltip">
    <div class="content" @mouseenter="on = true" @mouseleave="on = false">
      <slot />
    </div>

    <transition name="fade">
      <div v-show="on" class="tip" :class="classes">
        {{ text }}
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api'

export default defineComponent({
  props: {
    text: { type: String, required: true },
    position: { type: String, default: 'top' }
  },

  setup (props) {
    const on = ref(false)

    const classes = computed(() => {
      return {
        top: props.position === 'top',
        right: props.position === 'right',
        bottom: props.position === 'bottom',
        left: props.position === 'left'
      }
    })

    return {
      on,
      classes
    }
  }
})
</script>

<style lang="postcss" scoped>
@import "@/assets/styles/variables";

.STooltip {
  position: relative;
  display: inline-block;
}

.tip {
  position: absolute;
  border-radius: 4px;
  padding: 0 12px;
  line-height: 32px;
  text-align: center;
  font-size: 12px;
  color: var(--c-text-dark-1);
  background-color: rgba(0, 0, 0, .9);
  transition: opacity .25s, transform .25s;
}

.tip.fade-enter,
.tip.fade-leave-to {
  opacity: 0;

  &.top    { transform: translate(-50%, 8px); }
  &.right  { transform: translate(0, -50%); }
  &.bottom { transform: translate(-50%, -8px); }
  &.left   { transform: translate(0, -50%); }
}

.tip.top {
  top: -40px;
  left: 50%;
  transform: translate(-50%, 0);
}

.tip.right {
  top: 50%;
  left: 100%;
  transform: translate(8px, -50%);
}

.tip.bottom {
  bottom: -40px;
  left: 50%;
  transform: translate(-50%, 0);
}

.tip.left {
  top: 50%;
  right: 100%;
  transform: translate(-8px, -50%);
}
</style>
