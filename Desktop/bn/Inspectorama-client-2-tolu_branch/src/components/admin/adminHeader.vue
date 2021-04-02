<template>
  <div>
    <div class="container">
      <div class="top">
        <div class="title">Admin&nbsp;Panel</div>
        <div>
          <span>Logged in as {{adminUser.username}}</span>
          <span class="separator">|</span>
          <span>{{adminUser.updatedAt | formatDate}}</span>
          <span class="separator">|</span>
          <span @click="onLogout()" class="link-logout">
            <u>Log Out</u>
          </span>
        </div>
      </div>
      <div class="bottom">
        <div :class="{active: true}" class="bottom-tab-spacing">
          <router-link to="/dashboard" tag="span">Dashboard</router-link>
        </div>
        <div
          :class="{active: false}"
          @mousemove="showSalesDropDown=true"
          @mouseleave="showSalesDropDown=false"
        >
          <div class="bottom-tab-spacing">Sales</div>
          <div v-if="showSalesDropDown" class="dropdown-content">
            <div class="tab-link" @click="showSalesDropDown=false">
              <router-link to="/#" tag="span">Manage Products</router-link>
            </div>
            <div class="tab-link sub-dropdown">
              <div>
                <span>Orders</span>
                <i class="fa fa-angle-right"></i>
              </div>
              <div @click="showSalesDropDown=false" class="sub-dropdown-content">
                <router-link
                  to="/vehicle-inspection-orders"
                  class="tab-link"
                  tag="span"
                >Vehicle Inspection Orders</router-link>
                <router-link to="/#" class="tab-link" tag="span">Home Inspection Orders</router-link>
              </div>
            </div>
            <div class="tab-link" @click="showSalesDropDown=false">
              <router-link to="/#" tag="span">See All</router-link>
            </div>
          </div>
        </div>
        <div
          :class="{active: false}"
          @mousemove="showCatalogDropDown=true"
          @mouseleave="showCatalogDropDown=false"
        >
          <div class="bottom-tab-spacing">Catalog</div>
          <div
            @click="showCatalogDropDown=false"
            v-if="showCatalogDropDown"
            class="dropdown-content"
          >
            <router-link to="/#" class="tab-link" tag="span">Manage Products</router-link>
            <router-link to="/#" class="tab-link" tag="span">Manage categories</router-link>
            <router-link to="/#" class="tab-link" tag="span">Attributes</router-link>
          </div>
        </div>
        <div
          v-if="!auth"
          :class="{active: false}"
          @mousemove="showCustomersDropDown=true"
          @mouseleave="showCustomersDropDown=false"
        >
          <div class="bottom-tab-spacing">Customers</div>
          <div
            @click="showCustomersDropDown=false"
            v-if="showCustomersDropDown"
            class="dropdown-content"
          >
            <router-link to="/view-customer/:id" class="tab-link" tag="span">View Customers</router-link>
            <router-link to="/view-inspector/:id" class="tab-link" tag="span">View Inspectors</router-link>
          </div>
        </div>
        <div
          v-if="!auth"
          :class="{active: false}"
          @mousemove="showPromotionDropDown=true"
          @mouseleave="showPromotionDropDown=false"
        >
          <div class="bottom-tab-spacing">Promotion</div>
          <div
            @click="showPromotionDropDown=false"
            v-if="showPromotionDropDown"
            class="dropdown-content"
          >
            <router-link to="/#" class="tab-link" tag="span">Price</router-link>
            <router-link to="/#" class="tab-link" tag="span">Shopping</router-link>
          </div>
        </div>
        <div
          :class="{active: false}"
          @mousemove="showNewsletterDropDown=true"
          @mouseleave="showNewsletterDropDown=false"
        >
          <div class="bottom-tab-spacing">Newsletter</div>
          <div
            @click="showNewsletterDropDown=false"
            v-if="showNewsletterDropDown"
            class="dropdown-content"
          >
            <router-link to="/#" class="tab-link" tag="span">Newsletter 1</router-link>
            <router-link to="/#" class="tab-link" tag="span">Newsletter 2</router-link>
          </div>
        </div>
        <div
          :class="{active: false}"
          @mousemove="showInspectionReportDropDown=true"
          @mouseleave="showInspectionReportDropDown=false"
        >
          <div class="bottom-tab-spacing">Inspection Report</div>
          <div
            @click="showInspectionReportDropDown=false"
            v-if="showInspectionReportDropDown"
            class="dropdown-content"
          >
            <router-link to="/inspectors" class="tab-link" tag="span">Inspectors</router-link>
            <router-link to="/view-inspector/:id" class="tab-link" tag="span">View Inspector</router-link>
            <router-link to="/edit-inspector/:id" class="tab-link" tag="span">Edit Inspector</router-link>
            <router-link
              to="/create-new-inspector"
              class="tab-link"
              tag="span"
            >Create New Inspectors</router-link>
          </div>
        </div>
        <div
          :class="{active: false}"
          @mousemove="showSystemDropDown=true"
          @mouseleave="showSystemDropDown=false"
        >
          <div class="bottom-tab-spacing">System</div>
          <div @click="showSystemDropDown=false" v-if="showSystemDropDown" class="dropdown-content">
            <router-link to="/#" class="tab-link" tag="span">System 1</router-link>
            <router-link to="/#" class="tab-link" tag="span">System 2</router-link>
          </div>
        </div>
        <div
          :class="{active: false}"
          @mousemove="showBlogDropDown=true"
          @mouseleave="showBlogDropDown=false"
        >
          <div class="bottom-tab-spacing">Blog</div>
          <div @click="showBlogDropDown=false" v-if="showBlogDropDown" class="dropdown-content">
            <router-link to="/blog/blog-posts" class="tab-link" tag="span">Blog Post</router-link>
            <router-link
              to="/blog/edit-blog-post/:postId"
              class="tab-link"
              tag="span"
            >Edit Blog Post</router-link>
            <router-link
              to="/blog/create-new-blog-post"
              class="tab-link"
              tag="span"
            >Create New Blog Post</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetter } from "vuex";
export default {
  data() {
    return {
      showDashboardDropDown: false,
      showSalesDropDown: false,
      showCatalogDropDown: false,
      showCustomersDropDown: false,
      showPromotionDropDown: false,
      showNewsletterDropDown: false,
      showInspectionReportDropDown: false,
      showSystemDropDown: false,
      showBlogDropDown: false
    };
  },

  computed: {
    adminUser() {
      return this.$store.getters['adminStore/getAdminUser']
    }
  },

  methods: {
    onLogout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  color: white;
  width: 100%;
  display: inline-block;
}

.dropdown-content {
  color: black;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  cursor: pointer;
  font-size: 13px;
  font-weight: lighter;
  width: 200px;
  background-color: #e3eff1;
  border: 1px solid #ccc;
  border-top: 1px solid #2d444f;
  position: absolute;
}

.sub-dropdown {
  position: relative;
}

.sub-dropdown-content {
  top: 0px;
  left: 185px;
  color: black;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  cursor: pointer;
  font-size: 13px;
  font-weight: lighter;
  width: 200px;
  background-color: #e3eff1;
  border: 1px solid #ccc;
  position: absolute;
  display: none;
}

.sub-dropdown:hover .sub-dropdown-content {
  display: block;
}

.tab-link {
  float: none;
  color: black;
  padding: 8px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  border-bottom: 1px dotted #2d444f;
}

.tab-link:last-child {
  border-bottom: none;
}

.tab-link i {
  float: right;
  font-size: 16px;
}

.tab-link:hover {
  background-color: #dddd;
}

.top {
  font-size: 11px;
  padding-left: 30px;
  padding-right: 20px;
  height: 50px;
  width: 100%;
  background-color: #425e66;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
}

.separator {
  color: #aaa;
  padding-left: 2px;
  padding-right: 2px;
}

.title {
  flex: 1;
  font-size: 18px;
  font-weight: bold;
}

.bottom {
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
  cursor: pointer;
  border-top: 1px solid #2d444f;
  border-bottom: 1px solid #2d444f;
  background-color: #666e73;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
}

.top-tab-spacing {
  font-size: 12px;
  padding-left: 8px;
  padding-right: 8px;
}

.bottom-tab-spacing {
  font-size: 13px;
  padding: 6px 14px;
  border-right: 1px solid #aaa;
  border-image: linear-gradient(to top, #aaa, rgba(0, 0, 0, 0)) 1 100%;
}

.bottom-tab-spacing:hover {
  color: #d6e2e5;
}

.link-logout {
  cursor: pointer;
  color: #fcce77;
}

.link-logout:hover {
  color: #ea7601;
}

.active {
  border: solid;
  border-color: #a04300 #ed6502 #ed6502 #a04300;
  border-top: none;
  border-bottom: none;
  border-right: none;
  font-weight: bold;
  background-image: linear-gradient(#a04300, #a04300, #ea7601, #ea7601);
}

.active:hover,
.active .bottom-tab-spacing:hover {
  color: #d6e2e5;
}
</style>