<template>
  <div class="tbx-p-content">
    <div class="tbx-p-content__image">
      <img :src="item.img" :alt="item.title" />
    </div>
    <div class="tbx-p-content__description">
      <div class="tbx-p-content__title">{{ item.title }}</div>
      <div class="tbx-p-content__stars">
        <div class="tbx-star"></div>
        <div class="tbx-star"></div>
        <div class="tbx-star"></div>
        <div class="tbx-star"></div>
        <div class="tbx-star tbx-star_outline"></div>
        <div class="tbx-p-content__count">(385)</div>
      </div>
      <ul class="tbx-p-content__list">
        <li v-for="(text, idx) in item.list" :key="idx">{{ text }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface PackageContent {
  img: string;
  title: string;
  list: Array<string>;
}

@Component
export default class TrialboxPackageContent extends Vue {
  @Prop() private item!: PackageContent;
}
</script>

<style scoped lang="sass">
.tbx-star
  height: 21px
  width: 19.5px
  background-size: contain
  background-image: url('~@/assets/img/icons/star.svg')
  background-repeat: no-repeat
  margin-right: 4px
  &_outline
    background-image: url('~@/assets/img/icons/star-outline.svg')
.tbx-p-content
  display: flex
  &__image
    min-width: 33.33%
    max-width: 150px
    margin-right: 1.5rem
    @media (max-width: 833px)
      margin-right: 1rem
  &__description
    padding-right: 2rem
  &__title
    text-transform: uppercase
    font-family: $font-header
    font-size: 1.063rem
    line-height: $line-height-lg
    margin-bottom: 10px
  &__stars
    display: flex
  &__list
    font-size: $font-size-text
    line-height: $line-height-md
    list-style-position: outside
    margin: 0 0 0 1.1rem
    padding: 0.2rem 0 0 0
  &__count
    font-size: 15px
    margin-left: 5px
</style>
