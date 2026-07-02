<template>
  <div class="d-flex flex-column h-100 bg-carbon">
    <!--<KioskOverlay v-if="true"></KioskOverlay>-->
    <div
      id="header"
      v-if="$route.name === 'Web'"
      class="d-none d-lg-block text-center border-bottom border-slate pt-2"
    >
      <!-- <div class="titleContainer">
      <img src="images/CSU_Logo-01-01-1.png" class="titleImage"/>
      <span class="text-white mb-1 bold">
        College of Agricultural Sciences
      </span> -->
      <h1 class="text-white">Global IMPACT Map</h1>
      <!-- </div> -->

      <div class="d-flex justify-content-center">
        <img
          src="images/quinoa.jpg"
          class="img-fluid"
          alt="Image 3"
          style="width: 25%"
        />
        <img
          src="images/barley.jpg"
          class="img-fluid"
          alt="Image 2"
          style="width: 25%"
        />
        <img
          src="images/wheat.png"
          class="img-fluid"
          alt="Image 4"
          style="width: 25%"
        />
        <img
          src="images/rice.jpg"
          class="img-fluid"
          alt="Image 1"
          style="width: 25%"
        />
      </div>

      <div class="mt-auto mb-0 bg-carbon text-white">
        <div class="p-2" style="background-color: #323e48">
          <!-- 323E48 #59595b -->
          <strong><i>from local to global</i></strong>
        </div>
      </div>
    </div>
    <div class="flex-grow-1 d-flex flex-row overflow-y-hidden no-gutters h-100">
      <div class="left d-none d-lg-block col-lg-3 col-xl-3 col-xxl-3">
        <StoryListMap></StoryListMap>
      </div>
      <!-- <div
        class="d-none d-lg-block d-xxl-none h-100 col-2 col-xl-1 col-xl-1 border-right border-slate"
      >
        <ControlGroup></ControlGroup>
      </div> -->
      <!-- <div class="d-none d-xxl-block h-100 col-2 border-right border-slate">
        <ControlGroupXXL></ControlGroupXXL>
      </div> -->
      <div class="right col-12 col-lg-9 col-xl-9 col-xxl-9">
        <Map></Map>
      </div>
    </div>
    <div
      id="footer"
      v-if="true"
      class="footer bg-carbon text-center text-secondary py-3"
    >
      <ThemeBottom>
        <ControlGroup></ControlGroup>
      </ThemeBottom>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import StoryListMap from "@/components/storyList/storyListMap.vue";
import Map from "@/components/map/map.vue";
import ControlGroup from "@/components/controls/controlGroup.vue";
//import ControlGroupXXL from "@/components/controls/controlGroupXXL.vue";

//import KioskOverlay from "@/components/kioskOverlay/index.vue";
import { mapMutations } from "vuex";

export default {
  name: "Main",
  components: {
    StoryListMap,
    Map,
    ControlGroup,
    //ControlGroupXXL,
    //KioskOverlay,
  },
  methods: {
    ...mapMutations({
      clickCloseHelpFrame: "closeHelpFrame",
      toggleHelpFrame: "toggleHelpFrame",
    }),
  },
};
</script>

<style lang="scss" scoped>
.titleContainer {
  display: flex; /* Enables flexbox */
  align-items: center; /* Vertically aligns items in the middle */
  justify-content: center; /* Horizontally centers everything */
  gap: 10px; /* Adds space between the image and text */
}

.titleImage {
  max-width: 200px; /* Adjust size as needed */
  height: auto;
}
</style>
