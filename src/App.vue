<template>
  <div id="app">
    <TrialboxHead />
    <TrialboxProduct @setCurrentProduct="setCurrentProduct" />
    <TrialboxHowitworks />
    <TrialboxPackage :currentProduct="currentProduct" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TrialboxHead from "./components/TrialboxHead.vue";
import TrialboxProduct from "./components/TrialboxProduct.vue";
import TrialboxHowitworks from "./components/TrialboxHowitworks.vue";
import TrialboxPackage from "./components/TrialboxPackage.vue";

@Component({
  components: {
    TrialboxHead,
    TrialboxProduct,
    TrialboxHowitworks,
    TrialboxPackage
  }
})
export default class App extends Vue {
  currentProduct = "1";

  setCurrentProduct(id: string) {
    this.currentProduct = id;
  }
}
</script>

<style lang="sass">
@import "@/assets/sass/_reset.sass"

a
  color: $color-primary
  text-decoration: none

h2
  font-weight: 400

.tbx-container
  width: 100%
  padding: 2.75rem 0.938rem
  margin-right: auto
  margin-left: auto
  @media (min-width: 374px)
    max-width:1280px
  @media (min-width: 834px)
    padding: 3.25rem 1.5rem 2.75rem

.tbx-btn
  background: $color-primary
  border: 1px solid $color-primary
  color: $color-light
  display: inline-block
  width: 100%
  max-width: 16rem
  padding: .6875rem 1.25rem .5625rem 1.25rem
  font-weight: 500
  font-size: 1.063rem
  line-height: 1.4375rem
  text-decoration: none
  text-transform: uppercase
  letter-spacing: 0
  transition: .3s ease-in-out
  &:focus
    color: $color-hover
  &:hover
    background-color: #99dfdd
    cursor: pointer
    border-color: #99dfdd
  @media (min-width: 834px)
  &_wide
    max-width: 100%
</style>
