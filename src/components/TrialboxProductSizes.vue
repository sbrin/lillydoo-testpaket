<template>
  <div class="tbx-sizes">
    <div class="tbx-sizes__title">
      {{ $t("trialbox.sizes.title") }}
    </div>
    <div class="tbx-sizes__select">
      <div
        class="tbx-sizes__item"
        :class="{ 'tbx-sizes__item_active': active == item.size }"
        v-for="item in products"
        :key="item.size"
        @click="$emit('setCurrentProduct', item.size)"
      >
        <div class="tbx-sizes__item-size">{{ item.size }}</div>
        <div class="tbx-sizes__item-weight">({{ item.weight }})</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

interface Product {
  size: string;
  weight: string;
  img: string;
}

@Component({
  props: {
    products: {
      type: Array,
      default: []
    },
    active: {
      type: String,
      default: []
    }
  }
})
export default class TrialboxProductSizes extends Vue {
  products!: Array<Product>;
  active!: string;
}
</script>

<style lang="sass">
.tbx-sizes
  margin-bottom: 0.4rem
  &__title
    text-transform: uppercase
    font-size: $font-size-text
  &__select
    margin-top: 7px
    display: flex
    justify-content: space-between
    @media (max-width: 833px)
      height: 140px
      display: grid
      grid-template-columns: 1fr 1fr 1fr
      column-gap: 10px
  &__item
    border: 1px solid $color-border
    color: $color-border
    padding: 7px 5px 7px 5px
    margin-right: 10px
    margin-bottom: 10px
    width: 30%
    text-align: center
    cursor: pointer
    @media (max-width: 833px)
      width: 100%
      display: flex
      justify-content: center
      flex-direction: column
    &:last-child
      margin-right: 0
    &:hover, &_active
      background: $color-primary
      border-color: $color-primary
      color: $color-light
  &__item-size
    font-size: 1.3rem
    line-height: $line-height-xs
    margin-bottom: 4px
  &__item-weight
    text-transform: uppercase
    line-height: $line-height-xs
    font-size: .8rem
</style>
