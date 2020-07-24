<template>
  <section class="tbx-howitworks">
    <div class="tbx-container tbx-howitworks__content">
      <h2 class="tbx-howitworks__title">
        {{ $t("trialbox.howitworks.title") }}
      </h2>
      <div class="tbx-howitworks__row">
        <div class="tbx-howitworks__column">
          <div class="tbx-howitworks__icon">
            <img
              src="@/assets/img/icons/icon-present.svg"
              :alt="$t('trialbox.howitworks.step-testpaket')"
            />
          </div>
          <div class="tbx-howitworks__step-title">
            {{ $t("trialbox.howitworks.step-testpaket") }}
          </div>
          <div
            class="tbx-howitworks__step-description"
            v-html="$t('trialbox.howitworks.step-testpaket.description')"
          ></div>
        </div>
        <div class="tbx-howitworks__column">
          <div class="tbx-howitworks__icon">
            <img
              src="@/assets/img/icons/icon-lock.svg"
              :alt="$t('trialbox.howitworks.step-flexi')"
            />
          </div>
          <div class="tbx-howitworks__step-title">
            {{ $t("trialbox.howitworks.step-flexi") }}
          </div>
          <div class="tbx-howitworks__step-description">
            {{ $t("trialbox.howitworks.step-flexi.description") }}
            <div class="tbx-howitworks__more">
              <a href="#" v-html="$t('trialbox.howitworks.more')"></a>
            </div>
          </div>
        </div>
        <div class="tbx-howitworks__column">
          <div class="tbx-howitworks__icon">
            <img
              src="@/assets/img/icons/icon-box.svg"
              :alt="$t('trialbox.howitworks.step-monats')"
            />
          </div>
          <div class="tbx-howitworks__step-title">
            {{ $t("trialbox.howitworks.step-monats") }}
          </div>
          <div class="tbx-howitworks__step-description">
            {{ $t("trialbox.howitworks.step-monats.description") }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TrialboxHowitworks extends Vue {}
</script>

<style scoped lang="sass">
.tbx-howitworks
  background: $color-dark
  line-height: $line-height-sm
  text-transform: none
  padding-bottom: 1.6rem
  text-align: center
  display: flex
  justify-content: space-between
  @media (max-width: 833px)
    padding-bottom: 0
  &__content
    @media (max-width: 833px)
      padding-bottom: 0
  &__title
    line-height: $line-height-header
    font-size: $font-size-header
    margin-bottom: 10px
    @media (max-width: 833px)
      font-size: $font-size-header-md
      line-height: $line-height-lg
  &__row
    display: flex
    justify-content: space-around
    padding: 4.25rem 0 0 0

    @media (max-width: 833px)
      flex-direction: column
      padding: 1.75rem 0 0 0
  &__column
    flex-basis: 0
    flex-grow: 1
    margin: 0 1rem
    @media (max-width: 833px)
      margin: 0
  &__icon
    img
      @media (max-width: 833px)
        width: 90px
  &__step-title
    font-size: 1.063rem
    font-weight: 700
    line-height: $line-height-lg
    text-transform: uppercase
    margin-bottom: 0.7rem
    margin-top: 0.6rem
    @media (max-width: 833px)
      margin-bottom: 0.5rem
  &__step-description
    font-size: $font-size-text
    margin-bottom: 30px
    line-height: $line-height-md
    @media (max-width: 833px)
      margin-bottom: 60px
  &__more
    font-size: $font-size-text
    line-height: $line-height-md
    padding-top: 1.7rem
</style>
