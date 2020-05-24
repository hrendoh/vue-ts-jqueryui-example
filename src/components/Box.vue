<template>
  <div
    ref="box"
    class="box position-absolute"
    :style="{ left: x + 'px', top: y + 'px' }"
  ></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import $ from "jquery";
import "jquery-ui";

@Component({
  components: {}
})
export default class Box extends Vue {
  @Prop() private id!: string;
  @Prop({ default: 0 }) private x!: number;
  @Prop({ default: 0 }) private y!: number;
  @Prop() private text!: string;

  mounted() {
    $(this.$refs.box).draggable({
      // eslint-disable-next-line
      stop: function(event: Event, ui: JQueryUI.DraggableEventUIParams) {
        console.log(event, ui);
        console.log(ui.position.top, ui.position.left);
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  cursor: move;
  width: 100px;
  height: 100px;
  background-color: #f00;
}
</style>
