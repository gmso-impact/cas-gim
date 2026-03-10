<template>
  <div class="d-flex flex-column h-100 bg-carbon">
    <!--<KioskOverlay v-if="true"></KioskOverlay>-->
    <div
      id="header"
      v-if="$route.name === 'Web'"
      class="d-none d-lg-block text-center border-bottom border-slate pt-3"
    >
      <img
        src="impact_white.svg"
        alt="CSU Impact"
        class="title-img d-none d-md-inline-block"
        v-on:click="toggleHelpFrame"
      />

      <!-- <div class="row p-0 text-center border border-white" style="min-height: 100px;">
          <div class="col-3 border border-white">
            <img src="images/rice-field-7890204-640.jpg" class="img-fluid border border-white" alt="" style="width: 100%; height:100px; border: solid 1px red;">
          </div>
          <div class="col-3 border border-grey">
            <img src="image2.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-3 border border-white">
            <img src="image3.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-3 border border-grey">
            <img src="image4.jpg" class="img-fluid" alt="">
          </div>
        </div> -->

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
        <div class="p-2" style="background-color: #59595b">
          from local to global
        </div>
      </div>
    </div>
    <div class="flex-grow-1 d-flex flex-row overflow-y-hidden no-gutters h-100">
      <div class="left d-none d-lg-block col-lg-2 col-xl-3 col-xxl-3">
        <StoryListMap></StoryListMap>
      </div>
      <!-- <div
        class="d-none d-lg-block d-xxl-none h-100 col-2 col-xl-1 col-xl-1 border-right border-slate"
      >
        <ControlGroup></ControlGroup>
      </div> -->
      <div class="d-none d-xxl-block h-100 col-2 border-right border-slate">
        <ControlGroupXXL></ControlGroupXXL>
      </div>
      <div class="right col-12 col-lg-12 col-xl-12 col-xxl-7">
        <!-- right col-12 col-lg-8 col-xl-8 col-xxl-7-->
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
import ControlGroupXXL from "@/components/controls/controlGroupXXL.vue";

//import KioskOverlay from "@/components/kioskOverlay/index.vue";
import { mapMutations } from "vuex";

export default {
  name: "Main",
  components: {
    StoryListMap,
    Map,
    ControlGroup,
    ControlGroupXXL,
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
