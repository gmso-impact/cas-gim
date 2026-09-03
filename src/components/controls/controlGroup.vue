<template lang="">
  <div class="d-flex align-items-center justify-content-between w-100">
    <!-- Left -->
    <div>
      <QRSite
        class="mb-1 mt-3 mx-1 mx-xl-2"
      /><!--v-if="$route.name === 'Kiosk'"-->
    </div>

    <!-- Center -->
    <div class="flex-grow-1 d-flex justify-content-center">
      <departmentButtons />
    </div>

    <!-- Right -->
    <div>
      <QRNewStory
        class="mb-1 mt-3 mx-1 mx-xl-2"
      /><!--v-if="$route.name === 'Kiosk'" -->
    </div>
  </div>
</template>
<script>
import departmentButtons from "./departmentButtons.vue";
//import KioskSwitch from "./kioskSwitch.vue";
//import CampusGroup from "./campusGroup.vue";
//import Language from "./language.vue";
//import TitleNameSwitch from "./titleNameSwitch.vue";
//import ThemeColumn from "./themeColumn.vue";
//import IdTags from "./idTags.vue";
// import Geo from "./geo.vue";
//import IntroVideo from "./introVideo.vue";
import QRSite from "@/components/qr/qrSite.vue";
import QRNewStory from "@/components/qr/qrNewStory.vue";

export default {
  components: {
    departmentButtons,
    //KioskSwitch,
    //CampusGroup,
    //Language,
    //TitleNameSwitch,
    //ThemeColumn,
    //IdTags,
    //IntroVideo,
    QRSite,
    QRNewStory,
    // Geo,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
