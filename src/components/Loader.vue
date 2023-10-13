<template>
  <div
    :class="{ absolute: absolute, fixed: fixed }"
    :style="{
      width: `${size}rem`,
      height: `${size}rem`,
      zIndex: zIndex,
    }"
    class="spinner-border text-primary"
    role="status"
  ></div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 2,
    },
    absolute: {
      type: Boolean,
      default: false,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    zIndex: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
/** 가운데 정렬 */
.spinner-border {
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  &.absolute {
    position: absolute;
  }
  &.fixed {
    position: fixed;
  }
}
</style>
