<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  val: {
    type: String,
    default: "",
  },
});

const classes = computed(() => {
  return { newline: props.val.indexOf("\n") === 0 };
});
</script>

<template>
  <span class="char" :class="classes">{{ val }}</span>
</template>

<style scoped lang="scss">
@import "../styles/typer-colors.scss";

.char {
  display: inline-block;
  white-space: pre-wrap;
}

/* TODO: This can be removed in favor of the ':blank' pseudo-class:
         https://drafts.csswg.org/selectors-4/#the-blank-pseudo */
.newline {
  display: inline;
}

/* Keep the following .char styles as low-specificity as possible so they are more easily overridden */
.typed {
  color: $char-typed-color;
  background-color: $char-typed-background-color;
}

.selected {
  color: $char-selected-color;
  background-color: $char-selected-background-color;
}

.erased {
  display: none;
}
</style>
