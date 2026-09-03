<template>
  <div
    class="d-flex flex-column overflow-y-auto overflow-x-hidden justify-content-center pt-0 pb-0 pt-xl-0"
  >
    <span class="text-white">
      <RouterLink to="/">
        <span style="color: white">
          <font-awesome-icon
            :icon="['fas', 'globe']"
            class="mr-2 fa-3x circle-icon"
        /></span>
      </RouterLink>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          class="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center p-1 mr-2"
          :class="
            isActive('Agricultural Biology')
              ? 'btn-primary agBio'
              : 'btn-outline-secondary'
          "
          @click="setDepartment('Agricultural Biology')"
        >
          <img height="80" src="icons/2-1.png" alt="Agricultural Biology" title="Agricultural Biology" />
        </button>
        <button
          type="button"
          class="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center p-1 mr-2"
          :class="
            isActive('Agricultural and Resource Economics')
              ? 'btn-primary agResEcon'
              : 'btn-outline-secondary'
          "
          @click="setDepartment('Agricultural and Resource Economics')"
        >
          <img
            height="80"
            src="icons/5-1.png"
            alt="Agricultural and Resource Economics"
            title="Agricultural and Resource Economics"
          />
        </button>
        <button
          type="button"
          class="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center p-1 mr-2"
          :class="
            isActive('Animal Sciences')
              ? 'btn-primary animalSciences'
              : 'btn-outline-secondary'
          "
          @click="setDepartment('Animal Sciences')"
        >
          <img height="80" src="icons/3-1.png" alt="Animal Sciences" title="Animal Sciences" />
        </button>
        <button
          type="button"
          class="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center p-1 mr-2"
          :class="
            isActive('Horticulture and Landscape Architecture')
              ? 'btn-primary hortLandArch'
              : 'btn-outline-secondary'
          "
          @click="setDepartment('Horticulture and Landscape Architecture')"
        >
          <img
            height="80"
            src="icons/4-1.png"
            alt="Horticulture and Landscape Architecture"
            title="Horticulture and Landscape Architecture"
          />
        </button>
        <button
          type="button"
          class="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center p-1 mr-2"
          :class="
            isActive('Soil and Crop Sciences')
              ? 'btn-primary soilCropSciences'
              : 'btn-outline-secondary'
          "
          @click="setDepartment('Soil and Crop Sciences')"
        >
          <img height="80" src="icons/5-2.png" alt="Soil and Crop Sciences" title="Soil and Crop Sciences" />
        </button>
        <!-- `btn-${story.fields['Department']}` :class="[`bg-${theme}`]"-->
      </div>
    </span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["setDepartment"]),
    isActive: function (department) {
      return (
        this.$route.query.department &&
        this.$route.query.department.toLowerCase() === department.toLowerCase()
      );
    },
  },
};
</script>

<style lang="css" scoped>
.isActive {
  border: solid 3px white;
  border-radius: 50%;
}

.circle-icon {
  background: #323E48;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 100px;
  vertical-align: middle;
  padding: 16px;
}

.agBio {
  background-color: #323E48 !important;
  border: solid 1px #feb015 !important;
}

.agResEcon {
  background-color: #323E48 !important;
  border: solid 1px #2E953E !important;
}
.animalSciences {
  background-color: #323E48 !important;
  border: solid 1px #00AEEF !important;
}
.hortLandArch {
  background-color: #323E48 !important;
  border: solid 1px #F15625 !important;
}
.soilCropSciences {
  background-color: #323E48 !important;
  border: solid 1px #82C341 !important;
}

</style>
