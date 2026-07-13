<template>
  <div
    class="d-flex flex-column overflow-y-auto overflow-x-hidden justify-content-center pt-2 pb-2 pt-xl-2"
  >
    <span class="text-white">
      <RouterLink to="/">
      <span style="color: white;">
        <font-awesome-icon
          :icon="['fas', 'globe']"
          class="mr-2 fa-3x circle-icon"
      /></span>
    </RouterLink>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          class="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center p-2 mr-2"
          :class="
            isActive('Agricultural Biology')
              ? 'btn-primary active'
              : 'btn-outline-secondary'
          "
          @click="setDepartment('Agricultural Biology')"
        >
          <img
            height="60"
            src="icons/CSU_Agsci_Icons-06-1-150x150.png"
            alt="Agricultural Biology"
          />
        </button>
        <button
          type="button"
          class="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center p-2 mr-2"
          :class="
            isActive('Agricultural and Resource Economics')
              ? 'btn-primary active'
              : 'btn-outline-secondary'
          "
          @click="setDepartment('Agricultural and Resource Economics')"
        >
          <img
            height="60"
            src="icons/CSU_Agsci_Icons-08-1-150x150-2.png"
            alt="Agricultural Biology"
          />
        </button>
        <button
          type="button"
          class="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center p-2 mr-2"
          :class="
            isActive('Animal Sciences')
              ? 'btn-primary active'
              : 'btn-outline-secondary'
          "
          @click="setDepartment('Animal Sciences')"
        >
          <img
            height="60"
            src="icons/CSU_Agsci_Icons-07-1-150x150-3.png"
            alt="Animal Sciences"
          />
        </button>
        <button
          type="button"
          class="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center p-2 mr-2"
          :class="
            isActive('Horticulture and Landscape Architecture')
              ? 'btn-primary active'
              : 'btn-outline-secondary'
          "
          @click="setDepartment('Horticulture and Landscape Architecture')"
        >
          <img
            height="60"
            src="icons/CSU_Agsci_Icons-09-1-150x150-3.png"
            alt="Horticulture and Landscape Architecture"
          />
        </button>
        <button
          type="button"
          class="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center p-2 mr-2"
          :class="
            isActive('Soil and Crop Sciences')
              ? 'btn-primary active'
              : 'btn-outline-secondary'
          "
          @click="setDepartment('Soil and Crop Sciences')"
        >
          <img
            height="60"
            src="icons/CSU_Agsci_Icons-10-1-150x150-4.png"
            alt="Soil and Crop Sciences"
          />
        </button>
        <!-- `btn-${story.fields['Department']}` :class="[`bg-${theme}`]"-->
      </div>

      <!-- <span v-on:click="setDepartment('Agricultural Biology')"
                :class="{ active: isActive('AgriculturalBiology') }">
                <img height="60" src="icons/CSU_Agsci_Icons-06-1-150x150.png" /></span>
            <span v-on:click="setDepartment('Agricultural and Resource Economics')"
                :class="{ active: isActive('Agricultural and Resource Economics') }">
                <img class="ml-3" height="60" src="icons/CSU_Agsci_Icons-08-1-150x150-2.png" /></span>
            <span v-on:click="setDepartment('Animal Sciences')"
                :class="{ active: isActive('AnimalSciences') }">
                <img class="ml-3" height="60" src="icons/CSU_Agsci_Icons-07-1-150x150-3.png" /></span>
            <span v-on:click="setDepartment('Horticulture and Landscape Architecture')"
                :class="{ active: isActive('Horticulture and Landscape Architecture') }">
                <img class="ml-3" height="60" src="icons/CSU_Agsci_Icons-09-1-150x150-3.png" /></span>
            <span v-on:click="setDepartment('Soil and Crop Sciences')"
                :class="{ active: isActive('Soil and Crop Sciences') }">
                <img class="ml-3" height="60" src="icons/CSU_Agsci_Icons-10-1-150x150-4.png"/></span> -->
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
  background: #59595b;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 100px;
  vertical-align: middle;
  padding: 10px;
}
</style>
