<template>
  <div class="d-flex mt-3 ml-4">
    <div class="float-left d-inline-block btn-group-vertical btn-group-sm" role="group" aria-label="Activity Type Filter Buttons">
      <button type="button" class="btn btn-secondary typeStyle mb-1"
      :class="
            isActive('Education Abroad')
              ? 'btn-primary selected'
              : 'btn-secondary'
          "
          @click="setType('Education Abroad')">Education Abroad</button>
      <button type="button" class="btn btn-secondary typeStyle"
      :class="
            isActive('Outreach')
              ? 'btn-primary selected'
              : 'btn-secondary'
          "
          @click="setType('Outreach')">Outreach</button>
    </div>
    <div class="float-right d-inline-block btn-group-vertical btn-group-sm ml-1" role="group" aria-label="Activity Type Filter Buttons">
      <button type="button" class="btn btn-secondary typeStyle mb-1"
      :class="
            isActive('Research')
              ? 'btn-primary selected'
              : 'btn-secondary'
          "
          @click="setType('Research')">Research</button>
      <button type="button" class="btn btn-secondary typeStyle"
      :class="
            isActive('Teaching')
              ? 'btn-primary selected'
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

.typeStyle {
  min-width: 106px;
  width: 106px;
}

</style>
