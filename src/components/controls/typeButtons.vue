<template>
  <div class="d-flex mt-3 ml-4 activity-filter">
    <div class="float-left d-inline-block btn-group-vertical btn-group-sm flex-fill" role="group" aria-label="Activity Type Filter Buttons">
      <button type="button" class="btn btn-secondary mb-1"
      :class="
            isActive('Education Abroad')
              ? 'btn-secondary selected'
              : 'btn-secondary'
          "
          @click="setType('Education Abroad')">Education Abroad</button>
      <button type="button" class="btn btn-secondary"
      :class="
            isActive('Outreach')
              ? 'btn-secondary selected'
              : 'btn-secondary'
          "
          @click="setType('Outreach')">Outreach</button>
    </div>
    <div class="float-right d-inline-block btn-group-vertical btn-group-sm flex-fill ml-1" role="group" aria-label="Activity Type Filter Buttons">
      <button type="button" class="btn btn-secondary mb-1"
      :class="
            isActive('Research')
              ? 'btn-secondary selected'
              : 'btn-secondary'
          "
          @click="setType('Research')">Research</button>
      <button type="button" class="btn btn-secondary"
      :class="
            isActive('Teaching')
              ? 'btn-secondary selected'
              : 'btn-secondary'
          "
          @click="setType('Teaching')">Teaching</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["setType", "resetMap"]),
    isActive: function (type) {
      return (
        this.$route.query.type &&
        this.$route.query.type.toLowerCase() === type.toLowerCase()
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
  background: #323e48;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 100px;
  vertical-align: middle;
  padding: 16px;
}

.circle-btn {
  border-radius: 50%;
}

.selected {
  background-color: #323e48 !important;
  border: solid 1px #D9782D !important;
}

.activity-filter {
  width: 300px !important; /* adjust as needed */
  /* border: solid 1px red !important; */
}

.btn-group-vertical {
width: 130px !important;
}

</style>
