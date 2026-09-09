<template lang="">
  <div class="overlay childPoint" v-if="isFilterFrameOpen">
    <div class="controlFrame px-1 py-1 rounded bg-carbon border border-slate">
      <div class="overflow-y-auto overflow-x-hidden pb-5 h-100 w-100">
        <h1 class="text-white text-center mx-1 pt-5">
          {{ $t(`FindStories`) }}
        </h1>
        <DepartmentButtons class="mb-3 mx-1"></DepartmentButtons>
        <TypeButtons class="mb-3 mx-1"></TypeButtons>
      </div>
      <div class="topClose">
        <button
          class="btn btn-black"
          v-on:click="clickCloseFilterFrame()"
          :aria-label="$t(`Close`)"
        >
          <font-awesome-icon :icon="['fas', 'times']" class="mr-2" />
          {{ $t(`Close`) }}
        </button>
      </div>
      <div class="d-none d-xxl-block bottomClose">
        <button
          class="btn btn-black"
          v-on:click="clickCloseFilterFrame()"
          :aria-label="$t(`Close`)"
        >
          <font-awesome-icon :icon="['fas', 'times']" />
          {{ $t(``) }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import DepartmentButtons from "@/components/controls/departmentButtons.vue";
import TypeButtons from "@/components/controls/typeButtons.vue";

export default {
  components: {
    DepartmentButtons,
    TypeButtons
  },
  data() {
    return {};
  },
  props: {},
  computed: {
    ...mapGetters({
      isFilterFrameOpen: "isFilterFrameOpen",
    }),
  },
  methods: {
    ...mapMutations({ clickCloseFilterFrame: "closeFilterFrame" }),
  },
  watch: {},
};
</script>
<style lang="scss" scoped></style>
