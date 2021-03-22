import momentTimeZone from "moment-timezone";
import axios from "axios"
import i18n from "./i18n"
import dialingCodesList from "./mockData/dialingCodesList"

const base64ToBlob = (base64DataUrl) => {

  //Split the base64DataUrl to extract the base64 and the contentType
  const base64PictureOnly = base64DataUrl.split(",", 2)[1];
  const contentType = base64DataUrl
    .split(",", 2)[0]
    .split(";")[0]
    .split(":")[1];

  //convert the base64 to byteCharacters
  const byteCharacters = atob(base64PictureOnly);

  //Convert the byteCharacters to byteNumbers
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  //Convert the byte numbers to unit 8 array
  const byteArray = new Uint8Array(byteNumbers);

  //Convert the unit 8 array to blob
  const blob = new Blob([byteArray], { type: contentType })
  return blob
}

const numOfYearsToPastDate = (numOfYears) => {
  return new Date(new Date().getTime() - parseInt(numOfYears) * 31556952000.00043)
}

const dateToNumberOfYearsPassed = (date) => {
  return Math.round((new Date().getTime() - date.getTime()) / 31556952000.00043)
}

const timeLeftToJob = (inspectionDateTime) => {
  return (
    new Date(inspectionDateTime) - new Date()
  );
}

const currentTimeInCity = (cityTimezone) => {
  const yourTimezoneOffset = new Date().getTimezoneOffset() / 60;
  const timezoneOffsetInSelectedCity = parseInt(
    momentTimeZone.tz(new Date(), cityTimezone).format("Z")
  );

  const currentTimeInSelectedCity = new Date(
    new Date().getTime() +
    (yourTimezoneOffset + timezoneOffsetInSelectedCity) * 3.6e+6
  );

  return currentTimeInSelectedCity;
}

//To generate password
const generatePassword = () => {
  var length = 8,
    charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

const clearLocalStorageAuth = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("userId")
  localStorage.removeItem("isInspector")
  localStorage.removeItem("typeOfInspector")
  localStorage.removeItem("isInspectorProfileApproved")
  localStorage.removeItem("notificationLastSeen")
  localStorage.removeItem("adminUserId")
  localStorage.removeItem("adminToken")
}

const getUserAbridgedProfile = async (userId) => {
  const response = await axios.get(`/users/get_abridged_profile/${userId}`)
  const profile = response.data
  return profile
}

const getFinetunedLocationDetails = async (address) => {
  const response = await axios
    .post("/quotes/get_location_details", { address })
  const location = response.data
  return location
}

const translateValue = (valueToTranslate, localeObject) => {
  let translatedValue = null
  //Receives valueToTranslate and localeObject from the locale
  //Produces the translated value
  const translationArray = convertObjectToArray(localeObject)
  translationArray.forEach(element => {
    if (Object.keys(element) == valueToTranslate) {
      translatedValue = element[valueToTranslate];
    }
  });
  return translatedValue;
}

const convertObjectToArray = (object) => {
  //Receives object = {a: b, c: d}
  //Produces Array = [{a: b}, {c:d}]
  const newArray = Object.entries(object).map(subArr => {
    const newobj = {}
    newobj[subArr[0]] = subArr[1]
    return newobj
  })
  return newArray
}

const transformObjectToValueTypeArray = (object) => {
  //Receives object = {a: b}
  //Produces Array = [{value:a, type: b}]
  const newArray = Object.entries(object).map(subArr => {
    const newobj = {}
    newobj.value = subArr[0]
    newobj.type = subArr[1]
    return newobj
  })
  return newArray
}

const setStripeLocale = (i18nLocale) => {
  if (i18nLocale == "en") {
    return "en"
  } else if (i18nLocale == "no") {
    return "nb"
  }
  else {
    return "en"
  }
}

const doesUserSequenceIdExist = async (sequenceId) => {
  if (sequenceId) {
    const res = await axios.get(`/users/checkSellerSequenceId/${sequenceId}`)
    return res.data.sequenceIdExists
  }
}

const doesUserSequenceIdMatchEmail = async (sequenceId, email) => {
  if (sequenceId && email) {
    const res = await axios.get(`/users/checkSellerSequenceAndEmailMatch/${sequenceId}/${email}`)
    return res.data.isMatch
  }
}

const getAbridgedDialingCodeList = () => {
  dialingCodesList.sort((a, b) => {
    return a.code - b.code;
  })

  const abridgedDialingCodeList = []
  
  dialingCodesList.forEach(item => {
    if (!abridgedDialingCodeList.includes(item.code)) {
      abridgedDialingCodeList.push(item.code)
    }
  })
  return abridgedDialingCodeList
}

export {
  base64ToBlob,
  numOfYearsToPastDate,
  dateToNumberOfYearsPassed,
  timeLeftToJob,
  currentTimeInCity,
  generatePassword,
  clearLocalStorageAuth,
  getUserAbridgedProfile,
  getFinetunedLocationDetails,
  convertObjectToArray,
  transformObjectToValueTypeArray,
  setStripeLocale,
  translateValue,
  doesUserSequenceIdExist,
  doesUserSequenceIdMatchEmail,
  getAbridgedDialingCodeList
}