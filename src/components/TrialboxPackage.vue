<template>
  <section clas="tbx-package">
    <div class="tbx-container tbx-package__content">
      <div class="tbx-package__title">{{ $t("trialbox.contents.title") }}</div>
      <div class="tbx-package__row">
        <TrialboxPackageContent class="tbx-package__item" :item="packages[0]" />
        <TrialboxPackageContent
          class="tbx-package__item"
          :item="packages[currentPackage]"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TrialboxPackageContent from "@/components/TrialboxPackageContent.vue";

@Component({
  components: { TrialboxPackageContent },
  props: {
    currentProduct: {
      type: String,
      default: "1"
    }
  }
})
export default class TrialboxPackage extends Vue {
  @Prop() private currentProduct!: string;
  packages = [
    {
      img: require("@/assets/img/testpaket/lillydoo-little-blowballs-design-preview-tp.png"),
      title: this.$t("trialbox.contents.diapers.title"),
      list: [
        this.$t("trialbox.contents.diapers.list1"),
        this.$t("trialbox.contents.diapers.list2"),
        this.$t("trialbox.contents.diapers.list3")
      ]
    },
    {
      img: require("@/assets/img/testpaket/water-wipes-15-small.png"),
      title: this.$t("trialbox.contents.wasser.title"),
      list: [
        this.$t("trialbox.contents.wasser.list1"),
        this.$t("trialbox.contents.wasser.list2")
      ]
    },
    {
      img: require("@/assets/img/testpaket/sensitive-wipes-15-small.jpg"),
      title: this.$t("trialbox.contents.sens.title"),
      list: [
        this.$t("trialbox.contents.sens.list1"),
        this.$t("trialbox.contents.sens.list2")
      ]
    }
  ];

  get currentPackage() {
    return ["1", "2", "3"].includes(this.currentProduct) ? 1 : 2;
  }
}
</script>

<style scoped lang="sass">
.tbx-package
  &__content
    padding-bottom: 5.75rem
  &__title
    padding-top: 1.2rem
    padding-bottom: 5.5rem
    text-align: center
    font-size: $font-size-header
    line-height: $line-height-header
    @media (max-width: 833px)
      padding-top: 1rem
      padding-bottom: 3rem
      font-size: $font-size-header-md
      line-height: $line-height-lg
  &__row
    display: flex
    margin: 0 -1.5rem
    @media (max-width: 833px)
      margin: 0
      flex-direction: column
  &__item
    width: 50%
    margin: 0 1.5rem
    @media (max-width: 833px)
      width: 100%
      margin: 0 0 2.5rem 0
    // &:first-child
    //   margin-left: 0
    // &:last-child
    //   margin-right: 0
</style>
