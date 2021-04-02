import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import AdminDashboard from "./components/admin/AdminDashboard.vue"

import AdminHome from "./components/admin/AdminHome.vue"
import AdminLogin from "./components/admin/AdminLogin.vue"
import CreateAdminUser from "./components/admin/system/permissions/CreateAdminUser.vue"
import EditAdminUser from "./components/admin/system/permissions/EditAdminUser.vue"
import AdminUsers from "./components/admin/system/permissions/AdminUsers.vue"
import ViewAdminRoles from "./components/admin/system/permissions/ViewAdminRoles.vue"
import EditAdminRole from "./components/admin/system/permissions/EditAdminRole.vue"
import CreateAdminRole from "./components/admin/system/permissions/CreateAdminRole.vue"
import ResetAdminPassword from "./components/admin/system/permissions/ResetAdminPassword.vue"
import EnterNewAdminPassword from "./components/admin/system/permissions/EnterNewAdminPassword.vue"

import CreateNewCustomer from "./components/admin/customers/CreateNewCustomer.vue"
import EditCustomer from "./components/admin/customers/EditCustomer.vue"
import Customers from "./components/admin/customers/Customers.vue"
import ViewCustomer from "./components/admin/customers/ViewCustomer.vue"

import CreateNewInspector from "./components/admin/inspectors/CreateInspector.vue"
import EditInspector from "./components/admin/inspectors/EditInspector.vue"
import Inspectors from "./components/admin/inspectors/Inspectors.vue"
import ViewInspector from "./components/admin/inspectors/ViewInspector.vue"

import CreateVehicleInspService from "./components/admin/services/vehicleInspectionServices/CreateVehicleInspService.vue"
import EditVehicleInspService from "./components/admin/services/vehicleInspectionServices/EditVehicleInspService.vue"
import VehicleInspServices from "./components/admin/services/vehicleInspectionServices/VehicleInspServices.vue"
import ViewVehicleInspService from "./components/admin/services/vehicleInspectionServices/ViewVehicleInspService.vue"

import GetVehicleInspQuote from "./components/admin/sales/vehicleInspectionSales/GetVehicleInspQuote.vue"
import CreateVehicleInspOrder from "./components/admin/sales/vehicleInspectionSales/CreateVehicleInspOrder.vue"
import EditVehicleInspOrder from "./components/admin/sales/vehicleInspectionSales/EditVehicleInspOrder.vue"
import VehicleInspOrders from "./components/admin/sales/vehicleInspectionSales/VehicleInspOrders.vue"
import ViewVehicleInspOrder from "./components/admin/sales/vehicleInspectionSales/ViewVehicleInspOrder.vue"

import NewAdminUserCreated from "./components/admin/adminStaticStatusPages/NewAdminUserCreated.vue"
import ResetPasswordLinkSent from "./components/admin/adminStaticStatusPages/ResetPasswordLinkSent.vue"

import AddNewCountryPresentIn from "./components/admin/utilities/countriesPresent/AddNewCountryPresentIn.vue"
import ViewAllCountriesPresentIn from "./components/admin/utilities/countriesPresent/ViewAllCountriesPresentIn.vue"

import CreateNewBlogPost from "./components/admin/blog/posts/CreateNewBlogPost.vue"
import EditBlogPost from "./components/admin/blog/posts/EditBlogPost.vue"
import BlogPosts from "./components/admin/blog/posts/BlogPosts.vue"

const adminRoutes = [
    // { path: "/redirect-me", redirect: { name: "home" } },

    { path: "*", redirect: "/" },

    { path: "/", component: AdminHome },
    { path: "/login", component: AdminLogin },
    { path: "/dashboard", component: AdminDashboard },
    { path: "/create-admin-user", component: CreateAdminUser },
    { path: "/edit-admin-user/:id", component: EditAdminUser },
    { path: "/admin-users", component: AdminUsers },
    { path: "/view-admin-roles", component: ViewAdminRoles },
    { path: "/edit-admin-role", component: EditAdminRole },
    { path: "/create-admin-role", component: CreateAdminRole },
    { path: "/reset-admin-password", component: ResetAdminPassword },
    { path: "/enter-new-admin-password/:id/:token", component: EnterNewAdminPassword },

    { path: "/create-new-customer", component: CreateNewCustomer },
    { path: "/edit-customer/:id", component: EditCustomer },
    { path: "/customers", component: Customers },
    { path: "/view-customer/:id", component: ViewCustomer },

    { path: "/create-new-inspector", component: CreateNewInspector },
    { path: "/edit-inspector/:id", component: EditInspector },
    { path: "/inspectors", component: Inspectors },
    { path: "/view-inspector/:id", component: ViewInspector },

    { path: "/create-vehicle-inspection-service", component: CreateVehicleInspService },
    { path: "/edit-vehicle-inspection-service", component: EditVehicleInspService },
    { path: "/vehicle-inspection-services", component: VehicleInspServices },
    { path: "/view-vehicle-inspection-service", component: ViewVehicleInspService },

    { path: "/get-vehicle-inspection-quote", component: GetVehicleInspQuote },
    { path: "/create-vehicle-inspection-order", component: CreateVehicleInspOrder },
    { path: "/edit-vehicle-inspection-order", component: EditVehicleInspOrder },
    { path: "/vehicle-inspection-orders", component: VehicleInspOrders },
    { path: "/view-vehicle-inspection-order", component: ViewVehicleInspOrder },

    { path: "/status/new-admin-user-created", component: NewAdminUserCreated },
    { path: "/status/password-reset-link-sent", component: ResetPasswordLinkSent },

    { path: "/utilities/countries-present/add-new-country-present-in", component: AddNewCountryPresentIn },
    { path: "/utilities/countries-presentview-all-countries", component: ViewAllCountriesPresentIn },

    { path: "/blog/create-new-blog-post", component: CreateNewBlogPost },
    { path: "/blog/edit-blog-post/:postId", component: EditBlogPost },
    { path: "/blog/blog-posts", component: BlogPosts }

]

export default new VueRouter({
    mode: 'history', routes: adminRoutes, scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
