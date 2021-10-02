<script setup>
import { computed } from "vue";

const ANIMATION_CLASS_PREFIX = "vue-typer-caret-";

const props = defineProps({
  animation: {
    type: String,
    default: "blink",
    validator: (value) =>
      /^solid$|^blink$|^smooth$|^phase$|^expand$/.test(value),
  },
});

const animationClass = computed(() => ANIMATION_CLASS_PREFIX + props.animation);
</script>

<template>
  <span class="caret custom" :class="animationClass"></span>
</template>

<style scoped lang="scss">
@import "../styles/typer-colors.scss";
@import "../styles/caret-animations.scss";

span.caret {
  &:empty:before {
    content: "\200b"; // zero width space character
  }
}

/* Keep the following .caret styles as low-specificity as possible so they are more easily overridden */
span {
  display: inline-block;
  width: 1px;
}

.idle {
  background-color: $caret-idle-color;
}

.typing {
  background-color: $caret-typing-color;
}

.selecting {
  display: none;
  background-color: $caret-selecting-color;
}

.erasing {
  background-color: $caret-erasing-color;
}

.complete {
  display: none;
  background-color: $caret-complete-color;
}
</style>
