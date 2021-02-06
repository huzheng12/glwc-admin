<template>
  <div>
    <slot v-if="routerType" />
    <router-view v-else />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      routerType: (state) => state.app.routerType,
    }),
  },
};
</script>

<style>
</style>