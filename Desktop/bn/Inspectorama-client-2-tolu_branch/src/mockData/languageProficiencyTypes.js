import i18n from "../i18n"
export default (locale) => {
    if(locale){
        i18n.locale = locale
    }
    return [
        { type: i18n.t('languageProficiency.proficiencyTypes.Beginner'), value: "Beginner" },
        {  type: i18n.t('languageProficiency.proficiencyTypes.Elementary'), value: "Elementary" },
        {  type: i18n.t('languageProficiency.proficiencyTypes.Intermediate'), value: "Intermediate"  },
        {  type: i18n.t('languageProficiency.proficiencyTypes.Advanced'), value: "Advanced"  },
        {  type: i18n.t('languageProficiency.proficiencyTypes.Native'), value: "Native" }
    ]
}