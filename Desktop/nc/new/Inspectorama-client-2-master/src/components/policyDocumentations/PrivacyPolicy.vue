<template>
  <div class="container">
    <div v-html="$t('privacyPolicy.title')"></div>
    <div v-html="$t('privacyPolicy.intro')"></div>
    <div>
      <div v-html="$t('privacyPolicy.informationWeCollect.title')"></div>
      <div v-html="$t('privacyPolicy.informationWeCollect.personalInformationYouGiveUS')"></div>
      <div v-html="$t('privacyPolicy.informationWeCollect.informationWeCollectThruTech')"></div>
      <div v-html="$t('privacyPolicy.informationWeCollect.informationCollectedByMobileApp')"></div>
      <div v-html="$t('privacyPolicy.informationWeCollect.informationYouProvideAbout3rdParty')"></div>
      <div v-html="$t('privacyPolicy.informationWeCollect.info3rdPartiesProvideAboutYou')"></div>
      <div v-html="$t('privacyPolicy.informationWeCollect.infoYouProvideToA3rdParty')"></div>
    </div>
    <div>
      <div v-html="$t('privacyPolicy.howWeUseTheInfoWeCollect.title')"></div>
      <div v-html="$t('privacyPolicy.howWeUseTheInfoWeCollect.body')"></div>
    </div>
    <div>
      <div v-html="$t('privacyPolicy.howWeShareTheInfoWeCollect.title')"></div>
      <div v-html="$t('privacyPolicy.howWeShareTheInfoWeCollect.affiliateCompanies')"></div>
      <div v-html="$t('privacyPolicy.howWeShareTheInfoWeCollect.serviceProfessionalProfile')"></div>
      <div v-html="$t('privacyPolicy.howWeShareTheInfoWeCollect.thirdPartyProvidingServices')"></div>
      <div v-html="$t('privacyPolicy.howWeShareTheInfoWeCollect.banksAndCreditCardCompanies')"></div>
      <div v-html="$t('privacyPolicy.howWeShareTheInfoWeCollect.3rdPartyInfoOnServices')"></div>
      <div v-html="$t('privacyPolicy.howWeShareTheInfoWeCollect.bookingPartners')"></div>
      <div v-html="$t('privacyPolicy.howWeShareTheInfoWeCollect.promotions')"></div>
      <div v-html="$t('privacyPolicy.howWeShareTheInfoWeCollect.socialNetworkAuthentication')"></div>
      <div v-html="$t('privacyPolicy.howWeShareTheInfoWeCollect.administrativeAndLegalReasons')"></div>
      <div v-html="$t('privacyPolicy.howWeShareTheInfoWeCollect.corporateTransactions')"></div>
    </div>
    <div>
      <div v-html="$t('privacyPolicy.howWeProtectTheInfoWeCollect.title')"></div>
      <div v-html="$t('privacyPolicy.howWeProtectTheInfoWeCollect.body')"></div>
    </div>
    <div>
      <div v-html="$t('privacyPolicy.yourChoicesRegardingTheInfoWeCollect.title')"></div>
      <div v-html="$t('privacyPolicy.yourChoicesRegardingTheInfoWeCollect.body')"></div>
    </div>
    <div>
      <div v-html="$t('privacyPolicy.youHaveANyQuestions.title')"></div>
      <div v-html="$t('privacyPolicy.youHaveANyQuestions.body')"></div>
    </div>
    <div>
      <div v-html="$t('privacyPolicy.ourShieldPrivacyPolicy.title')"></div>
      <div v-html="$t('privacyPolicy.ourShieldPrivacyPolicy.outsideUS')"></div>
      <div v-html="$t('privacyPolicy.ourShieldPrivacyPolicy.individualsInTheEU')"></div>
      <div v-html="$t('privacyPolicy.ourShieldPrivacyPolicy.disclosureOfPersonalInfo')"></div>
      <div v-html="$t('privacyPolicy.ourShieldPrivacyPolicy.crossBorderDataTransfers')"></div>
      <div v-html="$t('privacyPolicy.ourShieldPrivacyPolicy.legalBasesForProcessing')"></div>
      <div v-html="$t('privacyPolicy.ourShieldPrivacyPolicy.howToOptOut')"></div>
      <div v-html="$t('privacyPolicy.ourShieldPrivacyPolicy.accessAndCorrection')"></div>
      <div v-html="$t('privacyPolicy.ourShieldPrivacyPolicy.enforcement')"></div>
      <div v-html="$t('privacyPolicy.ourShieldPrivacyPolicy.liability')"></div>
    </div>

    <div>
      <div v-html="$t('privacyPolicy.changeToThisPolicy.title')"></div>
      <div v-html="$t('privacyPolicy.changeToThisPolicy.body')"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  box-sizing: border-box;
  color: black;
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  padding: 50px;
  padding-left: 300px;
  padding-right: 300px;
  width: 100%;
  display: table;
}
</style>

