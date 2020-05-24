<template>
  <div id="app" class="position-relative">
    <button class="float-center" v-on:click="addBox">Add BOX</button>
    <Box
      v-for="box in boxes"
      :key="box.id"
      :id="box.id"
      :x="box.x"
      :y="box.y"
    ></Box>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Box from "./components/Box.vue";

type box = {
  id: string;
  x: number;
  y: number;
};

@Component({
  components: {
    Box
  }
})
export default class App extends Vue {
  boxes: box[] = [];
  addBox() {
    this.boxes.push({
      id: Math.random() + "",
      x: 10,
      y: 10
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
