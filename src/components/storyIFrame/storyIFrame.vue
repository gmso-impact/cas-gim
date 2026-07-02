<template lang="">
  <div class="h-100 w-100">
    <ScrollDown>test</ScrollDown>

    <!-- <h2 class="text-white">{{ storyTitle }}</h2> -->
    <div class="image-container">
      <img
        v-if="storyImagePath"
        :src="storyImagePath"
        class="w-100 img-fluid"
        alt="Card image cap"
        :width="width"
      />
      <h2>
        {{ storyTitle }}
      </h2>
    </div>

    <div class="scrollable">
      <!-- <h2 class="text-black">{{ storyTitle }}</h2> -->
      <p class="mt-2">{{ storyContent }}</p>
      <p>
        <a :href="storyLinks" target="_blank" rel="noopener noreferrer"
          >Learn More</a
        >
      </p>
      <h3>People Involved</h3>
      <span v-for="person in storyPeople" :key="person"
        >{{ person }}<br
      /></span>
      <br />
      <h3>Countries</h3>
      <span v-for="country in storyCountries" :key="country"
        >{{ country }}<br
      /></span>
    </div>
    <div
      class="flex-column h-100 text-center text-white justify-content-center"
      :class="{ 'd-none': loaded, 'd-flex': !loaded }"
    >
      <div class="h1">{{ storyTitle }}</div>
      <div></div>
      <div class="mt-4">
        <font-awesome-icon class="fa-2x" :icon="['fas', 'spinner']" spin />
      </div>
      <div class="mt-4">
        {{ $t(`Explore`) }}
      </div>
    </div>
  </div>
</template>
<script>
import ScrollDown from "./scrollDown.vue";

import { mapGetters } from "vuex";

import imageSizes from "@/helper/imagesSizes.js";

export default {
  components: {
    ScrollDown,
  },
  data() {
    return {
      loaded: true,
      imageSizes: imageSizes,
    };
  },
  props: {
    story: {
      type: Object,
      required: true,
    },
  },
  watch: {},
  computed: {
    ...mapGetters({
      getBreakpoints: "getBreakpoints",
    }),
    storyLink: function () {
      // Return story in other language
      // if (this.story.fields[`${this.$root.$i18n.locale}-StoryMapLink`]) {
      //   return this.story.fields[`${this.$root.$i18n.locale}-StoryMapLink`];
      // }
      // default to english
      //return this.story.fields["bi-StoryMapLink"];
      return "https://google.com";
    },
    storyTitle: function () {
      //if (this.story.fields[`${this.$root.$i18n.locale}-StoryTitle`]) {
      //  return this.story.fields[`${this.$root.$i18n.locale}-StoryTitle`];
      //} else {
      // default to english
      //return this.story.fields["en-StoryTitle"];
      return this.story.fields["Project/Activity Title"];
      //}
    },
    storyImagePath: function () {
      if (
        !this.story.fields["Card Image"] ||
        !this.story.fields["Card Image"][0]
      ) {
        return null;
      }
      const rootpath = "stories";

      console.log(
        `${rootpath}/${this.story.fields["Card Image"][0].id}-md.${getExt(
          this.story.fields["Card Image"][0].type,
        )}`,
      );

      return `${rootpath}/${this.story.fields["Card Image"][0].id}-md.${getExt(
        this.story.fields["Card Image"][0].type,
      )}`;
    },
    height: function () {
      return this.imageSizes[this.getBreakpoints[0]].height;
    },
    width: function () {
      return this.imageSizes[this.getBreakpoints[0]].width;
    },
    storyContent: function () {
      return this.story.fields["Project/Activity Summary - Story Content"];
    },
    storyLinks: function () {
      return this.story.fields["Links"];
    },
    storyPeople: function () {
      return this.story.fields["Name (from Faculty/Staff Involved)"];
    },
    storyCountries: function () {
      return this.story.fields[
        "Continent/Country/Region (from Continent/Country/Region)"
      ];
    },
    allow: function () {
      const fullscreen =
        this.$route.name === "Kiosk" && this.getBreakpoints.includes("md")
          ? "'none'"
          : "";
      return `fullscreen ${fullscreen}; geolocation;"`;
      //this.$route.name === "Kiosk" && this.getBreakpoints.includes("xxl")
    },
  },
  methods: {
    setIframeLoaded() {
      console.log("iframe loaded");
      setInterval(() => {
        this.loaded = true;
      }, 0);
    },
  },
};

function getExt(type) {
  if (type === "image/jpeg") {
    return "jpg";
  }
  if (type === "image/png") {
    return "png";
  } else {
    console.log(`Bad file extension ${type}`);
  }
}
</script>
<style lang="scss" scoped>
.scrollable {
  max-height: 40%; /* 170px */
  min-height: 40%; /* 170px */
  overflow-y: auto;
  font-size: small;
  background-color: white;
  padding: 0px 10px 10px 10px;
}

.scrollable .p {
  color: black !important;
}

.image-container {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%; /* Adjust to your preferred layout size */
  max-width: 400px;
}

.image-container img {
  width: 100%;
  height: auto;
  display: block;
}

.image-container h2 {
  position: absolute;
  margin: 0;
  color: white; /* Choose a color that contrasts with your image */
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); /* Optional: adds a semi-transparent background for readability */
  padding: 10px 20px;
  border-radius: 5px;
  width: 90%;
}
</style>
