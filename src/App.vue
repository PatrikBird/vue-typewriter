<script setup>
import VueTyper from "./vue-typer/components/VueTyper.vue";
const textModel = [
  "Arya Stark",
  "Jon Snow",
  "Daenerys Targaryen",
  "Melisandre",
  "Tyrion Lannister",
];
</script>

<template>
  <vue-typer
    :text="textModel"
    :repeat="Infinity"
    :shuffle="false"
    initial-action="typing"
    :pre-type-delay="70"
    :type-delay="70"
    :pre-erase-delay="2000"
    :erase-delay="250"
    erase-style="select-all"
    :erase-on-complete="false"
    caret-animation="blink"
  ></vue-typer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
