import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import i18n from './i18n'
import { store } from "./store/store"
import axios from "axios"

const guardMyRoute = (to, from, next) => {
  const auth = () => {
    return store.getters.isAuthenticated
  }
  if (auth())
    next(); // allow to enter route
  else {
    axios.get("/users/me")
      .then(res => {
        if (res) {
          next()
        }
      })
      .catch(error => {
        next(`/${i18n.locale}/login`)
      })
  }
}

import Home from "./components/Home.vue"
const VehicleInspection = () => import("./components/services/VehicleInspection.vue")
const HomeInspection = () => import("./components/services/HomeInspection.vue")
const HowItWorks = () => import("./components/HowItWorks.vue")
const GetPrice = () => import("./components/services/priceDisplayTemplates/GetPrice.vue")
const CreateSellerInviteCustomer = () => import("./components/services/sellerInvite/CreateSellerInviteCustomer.vue")
const EditSellerInviteCustomer = () => import("./components/services/sellerInvite/EditSellerInviteCustomer.vue")

const VehicleInspectionQuote = () => import("./components/quotes/VehicleInspectionQuote.vue")
const HomeInspectionQuote = () => import("./components/quotes/HomeInspectionQuote.vue")

const AllNotifications = () => import("./components/AllNotifications.vue")

const BlogHome = () => import("./components/blog/BlogHome.vue")
const InspectorBlog = () => import("./components/blog/InspectorBlog.vue")
const BlogArticle = () => import("./components/blog/BlogArticle.vue")
const AllInACategory = () => import("./components/blog/AllInACategory.vue")

const BecomeAnInspector = () => import("./components/inspector/BecomeAnInspector.vue")

const Login = () => import("./components/forms/Login.vue")
const ResetPassword = () => import("./components/forms/ResetPassword.vue")
const Signup = () => import("./components/forms/Signup.vue")
const EnterNewPassword = () => import("./components/forms/EnterNewPassword.vue")

const PersonalInformation = () => import("./components/inspector/inspectorRegistration/PersonalInformation.vue")
const Availability = () => import("./components/inspector/inspectorRegistration/Availability.vue")
const Education = () => import("./components/inspector/inspectorRegistration/Education.vue")
const LanguageProfiency = () => import("./components/inspector/inspectorRegistration/LanguageProfiency.vue")
const References = () => import("./components/inspector/inspectorRegistration/References.vue")
const BackgroundCheck = () => import("./components/inspector/inspectorRegistration/BackgroundCheck.vue")
const UploadDocumentation = () => import("./components/inspector/inspectorRegistration/UploadDocumentation.vue")
const IdVerification = () => import("./components/inspector/inspectorRegistration/IdVerification.vue")

const VehicleSpecialization = () => import("./components/inspector/inspectorRegistration/vehicleInspection/VehicleSpecialization.vue")
const VehicleInspCertifications = () => import("./components/inspector/inspectorRegistration/vehicleInspection/VehicleInspCertifications.vue")
const HomeInspSpecialization = () => import("./components/inspector/inspectorRegistration/homeInspection/HomeInspSpecialization.vue")
const HomeInspCertifications = () => import("./components/inspector/inspectorRegistration/homeInspection/HomeInspCertifications.vue")

const AccountMainView = () => import("./components/account/AccountMainView.vue")
const MyOrders = () => import("./components/account/myOrders/MyOrders.vue")
const MyOrderDetails = () => import("./components/account/myOrders/MyOrderDetails.vue")
const MakeshiftOrderDetails = () => import("./components/account/myOrders/MakeshiftOrderDetails.vue")

const InboxMainView = () => import("./components/inbox/InboxMainView.vue")

const InspectionReportMainView = () => import("./components/inspector/inspectorReport/InspectionReportMainView.vue")

const MyJobs = () => import("./components/inspector/inspectorJob/MyJobs.vue")
const InspectorJobNotification = () => import("./components/inspector/inspectorJob/InspectorJobNotification.vue")

const InspectorCalendar = () => import("./components/inspector/InspectorCalendar.vue")

const PasswordResetLinkSent = () => import("./components/staticStatusPages/PasswordResetLinkSent.vue")
const InspectorRegStatus = () => import("./components/staticStatusPages/InspectorRegStatus.vue")
const BookingSuccessful = () => import("./components/staticStatusPages/BookingSuccessful.vue")
const BookingCanceled = () => import("./components/staticStatusPages/BookingCanceled.vue")

const MainViewVehicleInspectionReport = () => import("./components/reportViewTemplates/vehicleInspectionReport/MainViewVehicleInspectionReport.vue")

const WriteReview = () => import("./components/customerReview/WriteReview.vue")

const ReferAnInspector = () => import("./components/referral/ReferAnInspector.vue")

const Playground = () => import("./components/Playground.vue")

const RegisterAsBusiness = () => import("./components/business/RegisterAsBusiness.vue")

const Help = () => import("./components/help/Help.vue")
const GeneralHelpLanding = () => import("./components/help/generalHelp/GeneralHelpLanding.vue")
const HelpCategoryView = () => import("./components/help/generalHelp/HelpCategoryView.vue")
const HelpTopicView = () => import("./components/help/generalHelp/HelpTopicView.vue")
const HelpArticleView = () => import("./components/help/generalHelp/HelpArticleView.vue")
const InspectorHelpLanding = () => import("./components/help/inspectorHelp/InspectorHelpLanding.vue")
const HelpSearchResults = () => import("./components/help/HelpSearchResults.vue")

const PrivacyPolicy = () => import("./components/policyDocumentations/PrivacyPolicy.vue")
const TermsOfService = () => import("./components/policyDocumentations/TermsOfService.vue")
const CookiePolicy = () => import("./components/policyDocumentations/CookiePolicy.vue")

const JobMarketPlace = () => import("./components/JobMarketPlace.vue")

const VehicleListings = () => import("./components/marketplace/vehicle/VehicleListings.vue")
const VehiclePage = () => import("./components/marketplace/vehicle/VehiclePage.vue")
const CreateVehicleListing = () => import("./components/marketplace/vehicle/CreateVehicleListing.vue")
const EditVehicleListing = () => import("./components/marketplace/vehicle/EditVehicleListing.vue")

const PropertyListings = () => import("./components/marketplace/property/PropertyListings.vue")
const ViewPropertyListing = () => import("./components/marketplace/property/ViewPropertyListing.vue")
const CreatePropertyListing = () => import("./components/marketplace/property/CreatePropertyListing.vue")
const EditPropertyListing = () => import("./components/marketplace/property/EditPropertyListing.vue")

let countRedirect = 0

const routes = [
  {
    path: "*", redirect: (to, fro, next) => {
      const secondPart = to.path.split("/")[1]
      if (i18n.availableLocales.includes(secondPart)) {
        return "/"
      } else {
        countRedirect++
        if (countRedirect == 1) {
          return `/${i18n.locale}${to.path}`
        } else if (countRedirect == 2) {
          return "/"
        }
      }
    }
  },
  {
    path: '/',
    redirect: () => {
      return `/${i18n.locale}`
    }
  },
  {
    path: "/:lang",
    component: {
      render(c) { return c('router-view') }
    },
    beforeEnter: (to, from, next) => {
      const secondPart = to.path.split("/")[1]
      //check if the lang parameter is among the available locales
      if (i18n.availableLocales.includes(secondPart)) {
        //Enter route
        next()
      } else {
        //redirect to correct route
        next(`/${i18n.locale}${to.path}`)
      }
    },
    children: [
      { path: "/", component: Home },
      { path: "blog", component: BlogHome },
      { path: "blog/inspector", component: InspectorBlog },
      { path: "blog/article/:id", component: BlogArticle },
      { path: "blog/articles-in-category", component: AllInACategory },

      { path: "inspector", component: BecomeAnInspector },

      { path: "login", component: Login },
      { path: "signup", component: Signup },
      { path: "resetpassword", component: ResetPassword },
      { path: "enter-new-password/:id/:token", component: EnterNewPassword },
      { path: "all-notifications", component: AllNotifications, beforeEnter: guardMyRoute },

      { path: "services/home-inspection", component: HomeInspection },
      { path: "services/vehicle-inspection", component: VehicleInspection },
      { path: "how-it-works", component: HowItWorks },
      { path: "services/get-price/:inspectionType", component: GetPrice },
      { path: "services/invite-buyer-to-book-inspection/:inspectionType", component: CreateSellerInviteCustomer, beforeEnter: guardMyRoute },
      { path: "services/edit/invite-buyer-to-book-inspection/:inspectionType/:invitationId", component: EditSellerInviteCustomer, beforeEnter: guardMyRoute },

      { path: "quotes/vehicle-inspection-quote/:quoteId", component: VehicleInspectionQuote, beforeEnter: guardMyRoute },
      { path: "quotes/home-inspection-quote/:quoteId", component: HomeInspectionQuote, beforeEnter: guardMyRoute },

      { path: "inspector/personal-information", component: PersonalInformation, beforeEnter: guardMyRoute },
      { path: "inspector/availability", component: Availability, beforeEnter: guardMyRoute },
      { path: "inspector/education", component: Education, beforeEnter: guardMyRoute },
      { path: "inspector/language-proficiency", component: LanguageProfiency, beforeEnter: guardMyRoute },
      { path: "inspector/references", component: References, beforeEnter: guardMyRoute },
      { path: "inspector/background-check", component: BackgroundCheck, beforeEnter: guardMyRoute },
      { path: "inspector/upload-documentaion", component: UploadDocumentation, beforeEnter: guardMyRoute },
      { path: "inspector/id-verification", component: IdVerification, beforeEnter: guardMyRoute },
      { path: "inspector/vehicle/area-of-specialization", component: VehicleSpecialization, beforeEnter: guardMyRoute },
      { path: "inspector/vehicle/certifications", component: VehicleInspCertifications, beforeEnter: guardMyRoute },
      { path: "inspector/home/area-of-specialization", component: HomeInspSpecialization, beforeEnter: guardMyRoute },
      { path: "inspector/home/certifications", component: HomeInspCertifications, beforeEnter: guardMyRoute },

      { path: "account/main-view", component: AccountMainView, beforeEnter: guardMyRoute },

      { path: "account/orders", component: MyOrders, beforeEnter: guardMyRoute },
      { path: "account/order-details/:orderId", component: MyOrderDetails, beforeEnter: guardMyRoute },
      { path: "account/display-order-details/:orderId", component: MakeshiftOrderDetails, beforeEnter: guardMyRoute },

      { path: "inbox", component: InboxMainView, beforeEnter: guardMyRoute },

      { path: "inspector/inspector-report/:jobId", component: InspectionReportMainView, beforeEnter: guardMyRoute },

      { path: "inspector/inspector-jobs", component: MyJobs, beforeEnter: guardMyRoute },
      { path: "inspector/inspector-job-notification", component: InspectorJobNotification, beforeEnter: guardMyRoute },
      { path: "status/sent-password-reset", component: PasswordResetLinkSent },
      { path: "status/inspector-registration/:inspectorId", component: InspectorRegStatus, beforeEnter: guardMyRoute },
      { path: "status/booking-successful", component: BookingSuccessful, beforeEnter: guardMyRoute },
      { path: "status/booking-canceled", component: BookingCanceled, beforeEnter: guardMyRoute },

      { path: "inspector/inspector-calendar", component: InspectorCalendar, beforeEnter: guardMyRoute },

      { path: "view-report/vehicle-inspection/:orderId", component: MainViewVehicleInspectionReport, beforeEnter: guardMyRoute },

      { path: "write-a-review/:orderId", component: WriteReview, beforeEnter: guardMyRoute },

      { path: "refer-an-inspector", component: ReferAnInspector },

      { path: "playground", component: Playground },

      { path: "business/register", component: RegisterAsBusiness },

      { path: "help", component: Help },
      { path: "help/:userType/:category", component: HelpCategoryView },
      { path: "help/:userType/:category/topic/:helpTopic", component: HelpTopicView },
      { path: "help/:userType/:category/topic/:helpTopic/article/:title", component: HelpArticleView },
      { path: "help/general-help", component: GeneralHelpLanding },
      { path: "help/inspector-help", component: InspectorHelpLanding },
      { path: "help/search-results", component: HelpSearchResults },

      { path: "privacy", component: PrivacyPolicy },
      { path: "terms", component: TermsOfService },
      { path: "cookie-policy", component: CookiePolicy },

      { path: "job-market-place", component: JobMarketPlace },

      { path: "market-place/vehicle-listings", component: VehicleListings },
      { path: "market-place/vehicle/:id", component: VehiclePage },
      { path: "market-place/create-vehicle-listing", component: CreateVehicleListing },
      { path: "market-place/edit-vehicle-listing/:id", component: EditVehicleListing },

      { path: "market-place/property-listings", component: PropertyListings },
      { path: "market-place/view-property/:id", component: ViewPropertyListing },
      { path: "market-place/create-property-listing", component: CreatePropertyListing },
      { path: "market-place/edit-property-listing/:id", component: EditPropertyListing },
    ]
  },
]

export default new VueRouter({
  mode: 'history', routes, scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
