<template>
  <div class="d-flex flex-column h-100 bg-carbon">
    <!--<KioskOverlay v-if="true"></KioskOverlay>-->
    <div
      id="header"
      v-if="$route.name === 'Web' || $route.name === 'Kiosk'"
      class="d-none d-lg-block text-center border-bottom border-slate pt-2"
    >
      <div class="titleContainer ml-2">
        <img src="images/CSU_Logo-01-01-1.png" class="titleImage"/>
        <span class="text-white mb-1 bold">
          College of Agricultural Sciences
        </span>
        <!-- <h1 class="text-white">Global IMPACT Map</h1> -->
      </div>

      <div class="d-flex justify-content-center">
        <img class="mb-3" src="images/Global.svg" style="max-width: 200px; margin-top:-20px;" />
        <!-- <img
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
        /> -->
      </div>

      <div class="mt-auto mb-0 bg-carbon text-white">
        <div class="p-1 bg-carbon" style="max-height:10px;">
          &nbsp;
          <!-- <i>Telling our Stories from Colorado to the World </i> -->
        </div>
      </div>
    </div>
    <div class="flex-grow-1 d-flex flex-row overflow-y-hidden no-gutters h-100">
      <div class="left d-none d-lg-block col-lg-3 col-xl-3 col-xxl-3">
        <StoryListMap></StoryListMap>
      </div>
      <div class="right col-12 col-lg-9 col-xl-9 col-xxl-9">
        <Map></Map>
      </div>
    </div>
    <div
      id="footer"
      v-if="true"
      class="d-none d-lg-block footer bg-carbon text-center text-secondary py-1"
    >
      <ThemeBottom>
        <ControlGroup></ControlGroup>
      </ThemeBottom>
    </div>
  </div>
</template>

<script>
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
  mounted() {
    console.log(this.$route.path);
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
  align-items: left; /* Vertically aligns items in the middle */
  justify-content: left; /* Horizontally centers everything */
  gap: 10px; /* Adds space between the image and text */
}

.titleImage {
  max-width: 200px; /* Adjust size as needed */
  height: auto;
}
</style>
