import Vue from "vue"
import i18n from "./i18n"
import moment from 'moment'
const setLocale = (locale) => {
    if (locale == "no") {
        locale = "nb"
    }
    moment.locale(locale)
}


// To format the whole date
Vue.filter('formatDate', function (value) {
    if (value) {
        setLocale(i18n.locale)
        return moment(String(value)).format('MMMM Do YYYY hh:mm a')
    }
})

// To show only the Date in a date
Vue.filter('showOnlyDate', function (value) {
    if (value) {
        setLocale(i18n.locale)
        return moment(String(value)).format('MMMM Do YYYY')
    }
})

// To show only the year and month in a date
Vue.filter('showOnlyMonthAndYear', function (value) {
    if (value) {
        setLocale(i18n.locale)
        return moment(String(value)).format('MMMM YYYY')
    }
})

// To show only the year in a date
Vue.filter('showOnlyYear', function (value) {
    if (value) {
        setLocale(i18n.locale)
        return moment(String(value)).format('YYYY')
    }
})

// To show only the time in a date
Vue.filter('showOnlyTime', function (value) {
    if (value) {
        setLocale(i18n.locale)
        return moment(String(value)).format('hh:mm a')
    }
})

// To show date and time in a date
Vue.filter('showDateAndTime', function (value) {
    if (value) {
        setLocale(i18n.locale)
        return moment(String(value)).format('MMMM Do YYYY, h:mm:ss a')
    }
})

//To show only the name of day in a date
Vue.filter('showOnlyNameOfDay', function (value) {
    if (value) {
        setLocale(i18n.locale)
        return moment(String(value)).format('dddd')
    }
})

// To change to all lowercase
Vue.filter('toLowerCase', function (value) {
    if (value) {
        setLocale(i18n.locale)
        return value.toLowerCase()
    }
})

// To change first letter to upper case
Vue.filter('toCapitalizeFirstLetter', function (value) {
    if (value) {
        setLocale(i18n.locale)
        return value.charAt(0).toUpperCase() + value.slice(1)
    }
})

//To convert objectId to timestamp
Vue.filter('objectIdToDate', function (value) {
    if (value) {
        setLocale(i18n.locale)
        const timestamp = value.toString().substring(0, 8)
        return new Date(parseInt(timestamp, 16) * 1000)

    }
})

//Get relative time
Vue.filter('toGetRelativeTime', function (value) {
    if (value) {
        setLocale(i18n.locale)
        return moment(new Date(value), 'MMMM Do YYYY, h:mm:ss a').fromNow()
    }
})









