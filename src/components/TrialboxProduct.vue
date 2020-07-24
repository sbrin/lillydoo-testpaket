<template>
  <section class="tbx-product">
    <div class="tbx-container tbx-product__container">
      <div class="tbx-product__details">
        <h2 class="tbx-product__title">
          {{ $t("trialbox.product.title") }}
        </h2>
        <div class="tbx-product__sizes">
          <TrialboxProductSizes
            :products="products"
            :active="currentProduct"
            @setCurrentProduct="setCurrentProduct"
          />
        </div>
      </div>
      <div class="tbx-product__image-wrap">
        <img
          class="tbx-product__oekotex"
          src="@/assets/img/testpaket/oekotex_green_de.svg"
          alt="Oeko-Tex Certificate"
        />
        <img
          class="tbx-product__image"
          v-show="currentProduct === item.size"
          v-for="item in products"
          :key="item.size"
          :src="item.img"
          :alt="item.weight"
        />
      </div>
      <div class="tbx-product__details">
        <div class="tbx-product__description">
          <p>{{ $t("trialbox.product.description") }}</p>
          <ul class="tbx-product__list">
            <li v-html="$t('trialbox.product.list1')"></li>
            <li
              class="tbx-product__highlight"
              v-html="$t('trialbox.product.list2')"
            ></li>
            <li v-html="$t('trialbox.product.list3')"></li>
          </ul>
        </div>
        <div class="tbx-product__action">
          <button class="tbx-product__button tbx-btn tbx-btn_wide">
            {{ $t("trialbox.product.button") }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TrialboxProductSizes from "@/components/TrialboxProductSizes.vue";

@Component({
  components: {
    TrialboxProductSizes
  }
})
export default class TrialboxProduct extends Vue {
  currentProduct = "1";

  products = [
    {
      size: "1",
      weight: "2-5 kg",
      img: require("@/assets/img/testpaket/testpaket-10.jpg")
    },
    {
      size: "2",
      weight: "4-8 kg",
      img: require("@/assets/img/testpaket/testpaket-20.jpg")
    },
    {
      size: "3",
      weight: "6-10 kg",
      img: require("@/assets/img/testpaket/testpaket-30.jpg")
    },
    {
      size: "4",
      weight: "9-14 kg",
      img: require("@/assets/img/testpaket/testpaket-40.jpg")
    },
    {
      size: "5",
      weight: "11-16 kg",
      img: require("@/assets/img/testpaket/testpaket-50.jpg")
    }
  ];

  setCurrentProduct(id: string) {
    this.currentProduct = id;
    this.$emit("setCurrentProduct", id);
  }
}
</script>

<style scoped lang="sass">
.tbx-product
  &::after
    display: block
    content: ' '
    clear: both
  @media (min-width: 834px)
    padding-bottom: 3.75rem
  &__container
    overflow: hidden
    // display: flex
    // padding: 1.75rem 1.5rem
    @media (max-width: 833px)
      flex-direction: column
  &__image-wrap
    flex-shrink: 1
    position: relative
    padding-top: 1.4rem
    @media (min-width: 834px)
      padding-top: 0
      float: left
      width: 50%
      padding-right: 1.75rem
      // order: 1
    .tbx-product__image
      width: 100%
      max-width: 588px
  &__oekotex
    position: absolute
    width: 24%
    top: 13%
    left: 9%
    z-index: 10
    box-shadow: -2px 2px 6px -3px rgba(0,0,0,.4)
    border-radius: 3px
    @media (max-width: 833px)
      width: 31%
      left: 6%
  &__sizes
  &__details
    @media (min-width: 834px)
      float: right
      max-width: 30.4rem
      width: 50%
  &__description
    font-size: $font-size-text
    margin-bottom: 3.5rem
    line-height: $line-height-md
    @media (max-width: 833px)
      margin-top: 2.5rem
  &__highlight
    color: $color-primary
  &__title
    font-size: $font-size-header
    line-height: $line-height-header
    margin: 0 0 10px 0
    @media (max-width: 833px)
      font-size: $font-size-header-md
      line-height: $line-height-lg
  &__list
    line-height: $line-height-md
    list-style-position: outside
    margin-bottom: 2rem
    margin-left: 1.1rem
    padding: 0
  &__action
  &__button
    font-size: 1rem
</style>
