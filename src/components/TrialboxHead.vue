<template>
  <section class="tbx-head tbx-head_bg-trialbox">
    <div class="tbx-container tbx-head__container">
      <div class="tbx-head__content">
        <h1 class="tbx-head__title">{{ $t("trialbox.head.title") }}</h1>
        <div class="tbx-head__action">
          <a href="#trialbox" class="tbx-btn tbx-head__button">{{
            $t("trialbox.head.button")
          }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TrialboxHead extends Vue {}
</script>

<style scoped lang="sass">
.tbx-head
  display: flex
  min-height: 35.4rem
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  background-color: #f8f8f8
  background-image: url('~@/assets/img/testpaket/testpaket-sm.jpg')
  @media (min-width: 420px)
      background-image: url('~@/assets/img/testpaket/testpaket-md.jpg')
  @media (min-width: 834px)
    background-image: url('~@/assets/img/testpaket/testpaket-lg.jpg')
    min-height: 38rem
    justify-content: flex-end
  &__container
    display: flex
    justify-content: flex-end
    @media (max-width: 833px)
      padding: 0
      position: relative
  &__content
    padding: 2.5rem 2.5rem 1.5rem 2.5rem
    width: 31.25rem
    align-self: center
    justify-self: right
    text-align: center
    background: rgba(255,255,255,.7)
    @media (max-width: 833px)
      position: absolute
      bottom: 0
      width: 100%
  &__action
    margin-top: 2rem
    margin-bottom: 1rem
    @media (max-width: 833px)
      margin-top: 1.5rem
      margin-bottom: 0
  &__button
    display: block
    min-width: 0
    width: 100%
    max-width: 15.6rem
    margin: 1.5rem auto .5rem
    font-weight: 500
    @media (min-width: 834px)
      max-width: 18.1rem
  &__title
    margin: 0 0 1rem 0
    font-family: $font-accent
    font-weight: 400
    line-height: $line-height-sm
    font-size: 2.188rem
    @media (min-width: 834px)
      font-size: 2.625rem
</style>
