import i18n from "../i18n"
export default (locale) => {
    if(locale){
        i18n.locale = locale
    }
    return [
        // { type: i18n.t('vehicleSpecialization.vehicleTypes.motorcyle'), value: "Motorcycle" },
        { type: i18n.t('vehicleSpecialization.vehicleTypes.car'), value: "Car" },
        { type: i18n.t('vehicleSpecialization.vehicleTypes.van'), value: "Van" },
        { type: i18n.t('vehicleSpecialization.vehicleTypes.bus'), value: "Bus" },
        { type: i18n.t('vehicleSpecialization.vehicleTypes.lightCommercial'), value: "Light Commercial" },
        { type: i18n.t('vehicleSpecialization.vehicleTypes.mediumTruck'), value: "Medium Truck" },
        // { type: i18n.t('vehicleSpecialization.vehicleTypes.truck'), value: "Truck" },
        // { type: i18n.t('vehicleSpecialization.vehicleTypes.trailer'), value: "Trailer" },
        // { type: i18n.t('vehicleSpecialization.vehicleTypes.heavyDutyTractor'), value: "Heavy-Duty Tractor" }
    ]
}