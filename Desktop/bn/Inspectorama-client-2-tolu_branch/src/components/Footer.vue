<template>
  <div>
    <div style="background-color:#1d1d1d;">
      <div style="justify-content:center; display:flex;">
        <div class="footer">
          <div class="row">
            <div class="footerlinks-box">
              <div class="column">
                <p>{{$t('footer.column1.title')}}</p>
                <ul class="footerlinks-box-content">
                  <li class="mouse-pointer">
                    <router-link :to="`/${$i18n.locale}/help`" tag="div">{{$t('footer.column1.body.line1')}}</router-link>
                  </li>
                </ul>
              </div>
              <div class="column text-center">
                <p>{{$t('footer.column2.title')}}</p>
                <ul class="footerlinks-box-content">
                  <li v-for="(city, index) in displayCitiesInCountry" :key="index">
                    <a href="#">{{city}}</a>
                  </li>
                  <li>
                    <select name="countryType" v-model="selectedCountry">
                      <option
                        v-for="(countryObj, index) in citiesPresentIn"
                        :key="index"
                      >{{countryObj.country}}</option>
                    </select>
                  </li>
                </ul>
              </div>
              <div class="column text-center">
                <p>{{$t('footer.column3.title')}}</p>
                <ul class="footerlinks-box-content">
                  <li>
                    <router-link :to="`/${$i18n.locale}/services/vehicle-inspection`">{{$t('footer.column3.body.line1')}}</router-link>
                  </li>
                  <li>
                    <router-link :to="`/${$i18n.locale}/services/home-inspection`">{{$t('footer.column3.body.line2')}}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div class="footer__bottom-right">
            <router-link :to="`/${$i18n.locale}/privacy`" tag="span">{{$t('footer.base.privacy')}}</router-link>&nbsp;&nbsp;
            <router-link :to="`/${$i18n.locale}/cookie-policy`" tag="span">{{$t('footer.base.cookies')}}</router-link>&nbsp;&nbsp;
            <router-link :to="`/${$i18n.locale}/terms`" tag="span">{{$t('footer.base.terms')}}</router-link>&nbsp;&nbsp;
          </div>
          <div class="footer__bottom-left">
            <span>{{$t('footer.base.allRights')}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      citiesPresentIn: [
        {
          country: "Norway",
          cities: ["Oslo", "Kongsberg", "Stavanger"]
        },
        {
          country: "United States",
          cities: ["New York", "Los Angeles", "Miami"]
        },
        {
          country: "United Kingdom",
          cities: ["London", "Manchester", "Sheffield"]
        }
      ],
      selectedCountry: "Norway"
    };
  },

  computed: {
    displayCitiesInCountry() {
      let citiesInSelectedCountry = [];
      this.citiesPresentIn.forEach(item => {
        if (item.country == this.selectedCountry) {
          citiesInSelectedCountry = item.cities;
        }
      });
      return citiesInSelectedCountry;
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.footer {
  font-family: sans-serif, Arial, Helvetica;
  font-size: 14px;
  color: #888;
  padding: 20px 50px;
  width: 100%;
  max-width: 1700px;
  display: table;
}

.footer__bottom-left,
.footer__bottom-right {
  font-size: 13px;
  padding: 10px;
}

.footer__bottom-left {
  float: right;
}

.footer__bottom-right {
  float: left;
}

.footer__bottom-right span:hover {
  cursor: pointer;
  text-decoration: underline;
}

.mouse-pointer:hover {
  cursor: pointer;
  text-decoration: underline;
}

/* Clear floats after the columns */
.row::after {
  content: "";
  clear: both;
  display: table;
}

.column {
  float: left;
  width: 33%;
}

.text-center {
  padding-left: 8%;
}

hr {
  border: 0.5px solid #888;
}

li {
  list-style: none;
  padding-top: 5px;
  padding-bottom: 5px;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  cursor: pointer;
  text-decoration: underline;
}

p {
  color: white;
  font-size: 17px;
}

.footerlinks-box-content {
  padding: 0;
  padding-top: 10px;
  display: block;
}

.footerlinks-box {
  padding: 30px 0px;
  width: 100%;
  display: inline-block;
}

select {
  padding: 8px;
  color: inherit;
  border: 1px solid #cacaca;
  outline: none;
  background-color: transparent;
}

/* For tablets: */
@media only screen and (max-width: 820px) {
  .footer {
    padding: 10px 20px;
  }

  .footerlinks-box-content {
    display: none;
  }

  .column p {
    padding: 10px 0px;
    text-align: center;
  }

  .column {
    width: 100%;
  }

  .text-center {
    padding-left: 0%;
  }

  .footer__bottom-left,
  .footer__bottom-right {
    float: none;
    padding: 20px;
    text-align: center;
  }
}

/* For mobile phones: */
@media only screen and (max-width: 520px) {
  .footer {
    padding: 10px;
  }

  .footer__bottom-left,
  .footer__bottom-right {
    float: none;
    padding: 20px;
  }
}
</style>
