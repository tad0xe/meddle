<template>
  <div class="container">
    <div class="container-content">
      <div class="row1">
        <h2>
          Vehicle Information
        </h2>

        <div class="hr-tag" />

        <div class="row1-content">
          <div class="summary text-red" v-if="$v.form.$error">
            Form has errors
          </div>

          <div class="input-group">
            <div class="column-left">
              <label>Headline</label>
              <input
                type="text"
                placeholder=""
                v-model="form.headline"
                @blur="$v.form.headline.$touch"
                :class="
                  $v.form.$error && !$v.form.headline.required
                    ? 'error-input'
                    : null
                "
              />
            </div>
            <div class="column-right">
              <label>Price</label>
              <div class="flex">
                <select v-model="form.price.currency" class="currency-input">
                  <option
                    v-for="currency in CountryCurrency"
                    :key="currency.country"
                    :value="currency.currency"
                  >
                    {{ currency.currency }}
                  </option>
                </select>
                <input
                  type="text"
                  class="price-input"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  v-model="form.price.value"
                  :class="
                    $v.form.$error && !$v.form.price.value.required
                      ? 'error-input'
                      : null
                  "
                />
              </div>
            </div>
          </div>

          <div class="input-group">
            <div class="column-left">
              <label>Vehicle Identification Number (VIN)</label>
              <input
                type="email"
                placeholder=""
                v-model="form.vehicleSpecifications.vin"
                @blur="$v.form.vehicleSpecifications.vin.$touch"
                :class="
                  $v.form.$error && !$v.form.vehicleSpecifications.vin.required
                    ? 'error-input'
                    : null
                "
              />
            </div>
            <div class="column-right">
              <label>Mileage</label>
              <div class="flex">
                <input
                  class="mileage-input"
                  type="text"
                  v-model="form.mileage.value"
                  aria-label="Text input with dropdown button"
                  :class="
                    $v.form.$error && !$v.form.mileage.value.required
                      ? 'error-input'
                      : null
                  "
                />
                <div class="veh-input-group-append">
                  <select v-model="form.mileage.unit" class="mileage-select">
                    <option value="kilometer">Km</option>
                    <option value="miles">M</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="input-group">
            <div class="column-left">
              <label>Seller Description</label>
              <textarea
                rows="8"
                v-model="form.description"
                :class="
                  $v.form.$error && !$v.form.description.required
                    ? 'error-input'
                    : null
                "
              ></textarea>
            </div>
            <div class="column-right">
              <div class="small-input">
                <div class="small-input__left">
                  <label>Is the Price Negotiable?</label>
                  <select
                    v-model="form.isPriceNegotiable"
                    :class="
                      $v.form.$error && !$v.form.isPriceNegotiable.required
                        ? 'error-input'
                        : null
                    "
                  >
                    <option value="" disabled>Choose...</option>
                    <option :value="true">Yes</option>
                    <option :value="false">No</option>
                  </select>
                </div>
                <div class="small-input__right">
                  <label>Is this vechicle still Available?</label>
                  <select
                    v-model="form.isPropertyStillAvailable"
                    :class="
                      $v.form.$error &&
                      !$v.form.isPropertyStillAvailable.required
                        ? 'error-input'
                        : null
                    "
                  >
                    <option disabled value="">Choose...</option>
                    <option :value="true">Yes</option>
                    <option :value="false">No</option>
                  </select>
                </div>
              </div>
              <br />
              <div>
                <label>
                  Will you refund the inspection fee to the eventual buyer?
                </label>
                <div class="small-input__left">
                  <select
                    v-model="form.hasSellerAgreedToRefund"
                    :class="
                      $v.form.$error &&
                      !$v.form.hasSellerAgreedToRefund.required
                        ? 'error-input'
                        : null
                    "
                  >
                    <option disabled value="">Choose...</option>
                    <option :value="true">Yes</option>
                    <option :value="false">No</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <image-upload @clicked="onUploadImage" />
      </div>

      <div class="row2">
        <h2>
          Vehicle Specifications
        </h2>

        <div class="hr-tag" />

        <div class="row2-content">
          <div class="row2-content__left">
            <div class="row2-input-container">
              <label class="brand-label">BRAND</label>
              <select
                v-model="form.vehicleSpecifications.brand"
                class="brand-select"
                :class="
                  $v.form.$error &&
                  !$v.form.vehicleSpecifications.brand.required
                    ? 'error-input'
                    : null
                "
              >
                <option disabled value="">Select</option>
                <option
                  v-for="brand in VehicleBrand"
                  :key="brand.make_id"
                  :value="brand.make"
                >
                  {{ brand.make }}
                </option>
              </select>
            </div>
            <div class="row2-input-container">
              <label class="brand-label">MODEL</label>
              <select
                v-model="form.vehicleSpecifications.model"
                class="brand-select"
                :class="
                  $v.form.$error &&
                  !$v.form.vehicleSpecifications.model.required
                    ? 'error-input'
                    : null
                "
              >
                <option value disabled selected hidden>Select</option>
                <option v-for="mod in Models" :key="mod" :value="mod">
                  {{ mod }}
                </option>
              </select>
            </div>
            <div class="row2-input-container">
              <label class="brand-label">YEAR</label>
              <select
                v-model="form.vehicleSpecifications.year"
                class="brand-select"
                :class="
                  $v.form.$error && !$v.form.vehicleSpecifications.year.required
                    ? 'error-input'
                    : null
                "
              >
                <option value disabled selected hidden>Select</option>
                <option v-for="yr in Years" :key="yr" :value="yr">
                  {{ yr }}
                </option>
              </select>
            </div>
            <div class="row2-input-container">
              <label class="brand-label">DRIVE TYPE</label>
              <select
                v-model="form.vehicleSpecifications.driveType"
                class="brand-select"
                :class="
                  $v.form.$error &&
                  !$v.form.vehicleSpecifications.driveType.required
                    ? 'error-input'
                    : null
                "
              >
                <option v-for="wheel in WheelDrive" :key="wheel" :value="wheel">
                  {{ wheel }}
                </option>
              </select>
            </div>
            <div class="row2-input-container">
              <label class="brand-label">ENGINE</label>
              <select
                v-model="form.vehicleSpecifications.engine"
                class="brand-select"
                :class="
                  $v.form.$error &&
                  !$v.form.vehicleSpecifications.engine.required
                    ? 'error-input'
                    : null
                "
              >
                <option v-for="eng in Engines" :key="eng" :value="eng">
                  {{ eng }}
                </option>
              </select>
            </div>
            <div class="row2-input-container">
              <label class="brand-label">TRANSMISSION</label>
              <select
                v-model="form.vehicleSpecifications.transmission"
                class="brand-select"
                :class="
                  $v.form.$error &&
                  !$v.form.vehicleSpecifications.transmission.required
                    ? 'error-input'
                    : null
                "
              >
                <option
                  v-for="trans in Transmission"
                  :key="trans"
                  :value="trans"
                >
                  {{ trans }}
                </option>
              </select>
            </div>
            <div class="row2-input-container">
              <label class="brand-label">FORM OF SALE</label>
              <select
                v-model="form.formOfSale"
                class="brand-select"
                :class="
                  $v.form.$error && !$v.form.formOfSale.required
                    ? 'error-input'
                    : null
                "
              >
                <option value disabled selected hidden>Select</option>
                <option value="Used">Used</option>
                <option value="New">New</option>
              </select>
            </div>
            <div class="row2-input-container">
              <label class="brand-label">CYLINDER</label>
              <select
                v-model="form.vehicleSpecifications.cylinders"
                class="brand-select"
                :class="
                  $v.form.$error &&
                  !$v.form.vehicleSpecifications.cylinders.required
                    ? 'error-input'
                    : null
                "
              >
                <option v-for="cylin in Cylinders" :key="cylin" :value="cylin">
                  {{ cylin }}
                </option>
              </select>
            </div>
          </div>
          <div class="row2-content__right">
            <div class="row2-input-container">
              <label class="brand-label">EXTERIOR</label>
              <select
                v-model="form.vehicleSpecifications.exteriorColor"
                class="brand-select"
                :class="
                  $v.form.$error &&
                  !$v.form.vehicleSpecifications.exteriorColor.required
                    ? 'error-input'
                    : null
                "
              >
                <option value disabled selected hidden>Select Color</option>
                <option
                  v-for="(ext, index) in ExteriorColors"
                  :key="index"
                  :value="ext"
                >
                  {{ ext }}
                </option>
              </select>
            </div>
            <div class="row2-input-container">
              <label class="brand-label">INTERIOR</label>
              <select
                v-model="form.vehicleSpecifications.interiorColor"
                class="brand-select"
                :class="
                  $v.form.$error &&
                  !$v.form.vehicleSpecifications.interiorColor.required
                    ? 'error-input'
                    : null
                "
              >
                <option value disabled selected hidden>Select Color</option>
                <option v-for="int in InteriorColors" :key="int" :value="int">
                  {{ int }}
                </option>
              </select>
            </div>
            <div class="row2-input-container">
              <label class="brand-label">FUEL TYPE</label>
              <select
                v-model="form.vehicleSpecifications.fuelType"
                class="brand-select"
                :class="
                  $v.form.$error &&
                  !$v.form.vehicleSpecifications.fuelType.required
                    ? 'error-input'
                    : null
                "
              >
                <option value disabled selected hidden>Select</option>
                <option v-for="fuel in FuelTypes" :key="fuel" :value="fuel">
                  {{ fuel }}
                </option>
              </select>
            </div>
            <div class="row2-input-container">
              <label class="brand-label">MATERIAL</label>
              <select
                v-model="form.vehicleSpecifications.material"
                class="brand-select"
                :class="
                  $v.form.$error &&
                  !$v.form.vehicleSpecifications.material.required
                    ? 'error-input'
                    : null
                "
              >
                <option value disabled selected hidden>Select</option>
                <option v-for="mat in Material" :key="mat" :value="mat">
                  {{ mat }}
                </option>
              </select>
            </div>
            <div class="row2-input-container">
              <label class="brand-label">DISPLACEMENT</label>
              <select
                v-model="form.vehicleSpecifications.displacement"
                class="brand-select"
                :class="
                  $v.form.$error &&
                  !$v.form.vehicleSpecifications.displacement.required
                    ? 'error-input'
                    : null
                "
              >
                <option value disabled selected hidden>Select</option>
                <option v-for="disp in Displacement" :key="disp" :value="disp">
                  {{ disp }}
                </option>
              </select>
            </div>
            <div class="row2-input-container">
              <label class="brand-label">BODY STYLE</label>
              <select
                v-model="form.vehicleSpecifications.bodyStyle"
                class="brand-select"
                :class="
                  $v.form.$error &&
                  !$v.form.vehicleSpecifications.bodyStyle.required
                    ? 'error-input'
                    : null
                "
              >
                <option value disabled selected hidden>Select</option>
                <option v-for="body in BodyStyles" :key="body" :value="body">
                  {{ body }}
                </option>
              </select>
            </div>
            <div class="row2-input-container">
              <label class="brand-label">NO OF DOORS</label>
              <select
                v-model="form.vehicleSpecifications.noOfDoors"
                class="brand-select"
                :class="
                  $v.form.$error &&
                  !$v.form.vehicleSpecifications.noOfDoors.required
                    ? 'error-input'
                    : null
                "
              >
                <option value disabled selected hidden>Select</option>
                <option value="4">4</option>
                <option value="2">2</option>
              </select>
            </div>
            <div class="row2-input-container">
              <label class="brand-label">VEHICLE TYPE</label>
              <select
                id="vehilceInput"
                v-model="form.vehicleSpecifications.vehicleType"
                class="brand-select"
                :class="
                  $v.form.$error &&
                  !$v.form.vehicleSpecifications.vehicleType.required
                    ? 'error-input'
                    : null
                "
              >
                <option value disabled selected hidden>Select</option>
                <option v-for="type in VehicleTypes" :key="type" :value="type">
                  {{ type }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="row3">
        <h2>
          Contact Information
        </h2>

        <div class="hr-tag" />

        <div class="row3-content">
          <div class="input-group">
            <div class="column-left">
              <label>First Name</label>
              <input
                type="email"
                placeholder=""
                v-model="form.firstName"
                :class="
                  $v.form.$error && !$v.form.firstName.required
                    ? 'error-input'
                    : null
                "
              />
            </div>
            <div class="column-right">
              <label>Last Name</label>
              <input
                type="email"
                placeholder=""
                v-model="form.lastName"
                :class="
                  $v.form.$error && !$v.form.lastName.required
                    ? 'error-input'
                    : null
                "
              />
            </div>
          </div>

          <div class="input-group">
            <div class="column-left">
              <label for="country">Country</label>
              <select
                id="country"
                v-model="form.location.country"
                :class="
                  $v.form.$error && !$v.form.location.country.required
                    ? 'error-input'
                    : null
                "
                @change="onSelectCountry()"
              >
                <option value disabled selected hidden>Select Country</option>
                <option
                  v-for="country in countriesPresentIn"
                  :key="country.country"
                  :value="country.country"
                >
                  {{ country.country }}
                </option>
              </select>
            </div>
            <div class="column-right">
              <label>State</label>
              <select
                v-model="form.location.state"
                :class="
                  $v.form.$error && !$v.form.location.state.required
                    ? 'error-input'
                    : null
                "
              >
                <option value disabled selected hidden>Select State</option>
                <option
                  v-for="(state, index) in statesInSelectedCountry"
                  :key="index"
                  :value="state.state"
                >
                  {{ state.state }}
                </option>
                <!-- <option></option> -->
              </select>
            </div>
          </div>

          <div class="input-group">
            <div class="column-left">
              <label>City</label>
              <input
                type="text"
                placeholder=""
                v-model="form.location.city"
                :class="
                  $v.form.$error && !$v.form.location.city.required
                    ? 'error-input'
                    : null
                "
              />
            </div>
            <div class="column-right">
              <label>Street</label>
              <input
                type="text"
                v-model="form.location.street"
                placeholder=""
                :class="
                  $v.form.$error && !$v.form.location.street.required
                    ? 'error-input'
                    : null
                "
                @blur="onBlurAddress"
              />
            </div>
          </div>

          <div class="input-group">
            <div class="column-left">
              <label>Zip Code</label>
              <input
                type="number"
                v-model="form.location.zipCode"
                placeholder=""
                :class="
                  $v.form.$error && !$v.form.location.zipCode.required
                    ? 'error-input'
                    : null
                "
              />
            </div>
            <div class="column-right">
              <label for="mobileNum">Phone Number</label>
              <div class="phone-number-field">
                <input
                  type="text"
                  class="country-code"
                  placeholder=""
                  v-model="form.mobileNum.countryCode"
                  :class="
                    $v.form.$error && !$v.form.mobileNum.countryCode.required
                      ? 'error-input'
                      : null
                  "
                />
                <input
                  type="text"
                  class="phone-number"
                  placeholder=""
                  v-model="form.mobileNum.phoneNumber"
                  :class="
                    $v.form.$error && !$v.form.mobileNum.phoneNumber.required
                      ? 'error-input'
                      : null
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="btn-container">
        <button class="preview" type="button">
          Preview
        </button>
        <button class="submit" type="submit" @click.prevent="submit">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import axios from "axios";
import ImageUpload from "./imageupload.vue";
import CountryCurrency from "../../../../mockData/countryCurrencies";
import VehicleBrand from "../../../../mockData/vehicleBrands";
import countriesPresentIn from "../../../../mockData/countriesPresentIn";
export default {
  name: "CreateVehicleListing",
  components: {
    ImageUpload,
  },

  props: {
    isEditing: false,
  },

  data() {
    return {
      form: {
        headline: "",
        description: "",
        price: {
          value: "",
          currency: "USD",
        },
        mileage: {
          value: "",
          unit: "kilometer",
        },
        formOfSale: "Used",
        vehicleSpecifications: {
          vin: "",
          brand: "",
          exteriorColor: "",
          interiorColor: "",
          model: "",
          year: "",
          fuelType: "",
          driveType: "",
          material: "",
          cylinders: "4",
          displacement: "",
          bodyStyle: "",
          transmission: "Automatic Transmission (AT)",
          noOfDoors: "",
          engine: "VEE",
          vehicleType: "",
        },
        isPriceNegotiable: false,
        isPropertyStillAvailable: true,
        hasSellerAgreedToRefund: false,
        firstName: "",
        lastName: "",
        location: {
          country: "",
          zipCode: "",
          state: "",
          city: "",
          street: "",
          geoCoordinates: {
            type: "Point",
            coordinates: [12.7522, 63.9139],
          },
        },
        mobileNum: {
          phoneNumber: "",
          countryCode: "",
        },
      },
      CountryCurrency,
      VehicleBrand,
      VehicleTypes: ["Car", "Van", "Bus", "Light Commercial", "Medium Truck"],
      countriesPresentIn,
      statesInSelectedCountry: [],
      InteriorColors: [
        "Black",
        "Pale",
        "Grey and Tan",
        "black-grey",
        "white-beige",
        "black-red",
        "black-silver ",
      ],
      ExteriorColors: [
        "Black",
        "Silver",
        "Sunshine Orange",
        "Carousel Red",
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Purple",
        "Lime Green",
      ],
      Models: [
        "AC 3000ME",
        "Audi 80 and 90",
        "Audi A3",
        "Autobianchi A112",
        "BMW CS",
        "BMW Z1",
        "BMW 5 Series",
        "BMW X5",
      ],
      Years: [
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
      ],
      FuelTypes: [
        "Gasoline/petrol",
        "Diesel",
        "Biodiesel",
        "Biogasoline",
        "Lead Replacement Petrol",
        "Kerosene",
        "Compressed natural gas",
        "Hydrogen",
        "Ethanol",
        "Butanol",
        "fuelRacing fuel (Tetraethyllead)",
      ],
      WheelDrive: [
        "All-Wheel Drive",
        "Four Wheel Drive",
        "Rear Wheel Drive",
        "Front Wheel Drive",
      ],
      Material: ["Steel", "Fiber", "Leather", "Aluminum", "Lead", "Copper"],
      Engines: ["VEE", "INLINE", "STRAIGHT", "VR and W", "BOXER"],
      Displacement: ["2.8L", "3.0L", "3.2L", "3.5L", "3.8L", "3.9L", "4.0L"],
      Transmission: [
        "Automatic Transmission (AT)",
        "Manual Transmission (MT)",
        "Automated Manual Transmission (AM)",
        "Continuously Variable Transmission (CVT)",
      ],
      BodyStyles: [
        "SEDAN",
        "COUPE",
        "SPORTS CAR",
        "STATION WAGON",
        "HATCHBACK",
        "CONVERTIBLE",
        "SPORT-UTILITY VEHICLE (SUV)",
        "MINIVAN",
      ],
      Cylinders: ["4", "5", "6", "8"],
      images: [],
    };
  },
  validations() {
    return {
      form: {
        headline: {
          required,
        },
        description: {
          required,
        },
        price: {
          value: {
            required,
          },
          currency: {
            required,
          },
        },
        mileage: {
          value: {
            required,
          },
          unit: {
            required,
          },
        },
        formOfSale: {
          required,
        },
        isPriceNegotiable: {
          required,
        },
        isPropertyStillAvailable: {
          required,
        },
        hasSellerAgreedToRefund: {
          required,
        },
        vehicleSpecifications: {
          vin: {
            required,
          },
          brand: {
            required,
          },
          exteriorColor: {
            required,
          },
          model: {
            required,
          },
          interiorColor: {
            required,
          },
          year: {
            required,
          },
          fuelType: {
            required,
          },
          driveType: {
            required,
          },
          material: {
            required,
          },
          cylinders: {
            required,
          },
          displacement: {
            required,
          },
          transmission: {
            required,
          },
          bodyStyle: {
            required,
          },
          noOfDoors: {
            required,
          },
          engine: {
            required,
          },
          vehicleType: {
            required,
          },
        },
        firstName: {
          required,
        },
        lastName: {
          required,
        },
        location: {
          country: {
            required,
          },
          zipCode: {
            required,
          },
          state: {
            required,
          },
          street: {
            required,
          },
          city: {
            required,
          },
        },
        mobileNum: {
          phoneNumber: {
            required,
          },
          countryCode: {
            required,
          },
        },
      },
    };
  },

  computed: {
    user() {
      return this.$store.getters.generalUserProfile;
    },
  },

  methods: {
    onSelectCountry() {
      this.statesInSelectedCountry = this.countriesPresentIn.filter(
        (item) => item.country == this.form.location.country
      )[0].states;
    },

    onBlurAddress() {
      const fullAddress = `${this.form.location.street} ${this.form.location.city} ${this.form.location.country}`;

      axios
        .get(`/inspector_infos/getGeoCoordinates/${fullAddress}`)
        .then((res) => {
          this.center = res.data.geometry.location;
          this.form.location.geoCoordinates.coordinates = [
            res.data.geometry.location.lng,
            res.data.geometry.location.lat,
          ];
        })
        .catch((error) => {
          console.log(error);
        });
    },

    populateUserDetails() {
      this.form.firstName = this.user.firstName;
      this.form.lastName = this.user.lastName;
      this.form.location.country = this.user.contactInfo.country;
      this.form.location.state = this.user.contactInfo.state;
      this.form.location.city = this.user.contactInfo.city;
      this.form.location.zipCode = this.user.contactInfo.zipCode;
      this.form.location.street =
        this.user.contactInfo.addressLine1 +
        " " +
        this.user.contactInfo.addressLine2;
      this.form.mobileNum = this.user.contactInfo.mobileNum1;
      // this.form.mobileNum.countryCode = this.user.contactInfo.mobileNum1.countryCode;
      // this.form.mobileNum.phoneNumber = this.user.contactInfo.mobileNum1.phoneNumber;
    },

    submit() {
      this.$v.form.$touch();
      console.log(this.form);
      console.log(this.$v.form);
      if (this.$v.form.$error) {
        console.log("error");
      } else {
        if (!this.isEditing) {
          this.$store
            .dispatch("CREATE_VEHICLE", this.form)
            .then(async (data) => {
              const images = this.images.map((file) => {
                console.log(file);
                return new Promise(async (resolve, reject) => {
                  const formData = new FormData();
                  formData.append("fileData", file);

                  this.$store
                    .dispatch("ADD_PICTURE", {
                      formData,
                      vehicleId: data._id,
                    })
                    .then((res) => {
                      console.log(res);
                      resolve(res);
                    })
                    .catch((err) => {
                      console.log(err);
                      reject(err);
                    });
                });
              });

              await Promise.all(images);

              this.$router.push(
                `/${this.$i18n.locale}/account/main-view?activeTab=marketplace`
              );
            })
            .catch((err) => console.log(err));
        } else {
          this.$store.dispatch("EDIT_VEHICLE", this.form).then((data) => {
            console.log(data);
            this.$router.push(
              `/${this.$i18n.locale}/account/main-view?activeTab=marketplace`
            );
          });
        }
      }
    },

    onUploadImage(data) {
      console.log(data);
      this.images = data;
    },

    // AddImages(vehicleId) {
    //   let formData = new FormData();
    //   this.images.forEach((file) => {
    //     formData.append("fileData", file[0]);

    //     this.$$store
    //       .dispatch("ADD_PICTURE", {
    //         formData,
    //         vehicleId,
    //       })
    //       .then((resp) => {
    //         console.log(resp);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   });
    // },

    getVehicleListing(vehicleId) {
      this.$store
        .dispatch("GET_ONE_PRIVATE_VEHICLE", vehicleId)
        .then((data) => {
          this.form = data;
          console.log(data);
          this.populateUserDetails();
          this.onSelectCountry();
        });
    },
  },

  mounted() {
    if (this.isEditing) {
      const vehicleId = this.$route.params.id;
      this.getVehicleListing(vehicleId);
    }
    this.populateUserDetails();
    this.onSelectCountry();
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background: #f7fbff;
}
.container-content {
  margin: 0 auto;
  padding: 10px;
  width: 100%;
  max-width: 1600px;
  @media (min-width: 620px) {
    padding: 10px 30px;
  }
  @media (min-width: 1200px) {
    padding: 10px 60px;
  }
}

.btn-container {
  padding: 20px;
  padding-bottom: 40px;
  display: flex;
  .preview,
  .submit {
    font-size: 14px;
    border-radius: 10px;
    outline: none;
    height: 50px;
    width: 110px;
    cursor: pointer;
    border: 1px solid rgb(2, 167, 240);
  }
  .preview {
    color: rgb(2, 167, 240);
    background-color: white;
    margin-right: 50px;
  }
  .submit {
    color: white;
    background-color: rgb(2, 167, 240);
  }
  @media (min-width: 620px) {
    padding: 30px 10px;
    padding-bottom: 50px;
    .preview,
    .submit {
      font-size: 16px;
      border-radius: 20px;
      height: 60px;
      width: 210px;
    }
  }
}

label {
  font-size: 15px;
}

.input-group {
  padding: 0px;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  display: flex;

  input {
    font-size: 15px;
    padding: 12px 10px;
    border-radius: 8px;
    background-color: white;
  }
  select {
    font-size: 15px;
    border-radius: 8px;
    padding: 12px 8px;
    background-color: white;
  }
  textarea {
    font-size: 15px;
    padding: 12px 10px;
    margin-top: 5px;
    width: 100%;
    border-radius: 8px;
  }

  .currency-input {
    border-radius: 8px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    width: 80px;
    color: white;
    border-color: #292b5f;
    background-color: #292b5f;
    option {
      color: white;
    }
  }
  .price-input {
    border-left: 0px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  .mileage-input {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  .mileage-select {
    color: white;
    border-color: black;
    background-color: black;
    width: 70px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    option {
      color: white;
    }
  }

  .small-input {
    display: flex;
    flex-direction: column;
    background: transparent;
  }

  .small-input__left {
    margin-right: 0px;
    margin-bottom: 20px;
    width: 100%;
  }
  .small-input__right {
    margin-left: 0px;
    width: 100%;
  }

  @media (min-width: 620px) {
    padding: 15px 0px;
    flex-direction: row;

    .small-input {
      flex-direction: row;
    }

    .small-input__left {
      margin-right: 10px;
      margin-bottom: 0px;
      width: 50%;
    }
    .small-input__right {
      margin-left: 10px;
      width: 50%;
    }
  }
}

.phone-number-field {
  display: flex;
  .country-code {
    width: 100%;
    max-width: 80px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  .phone-number {
    width: 100%;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
}

.column-left,
.column-right {
  padding: 12px 0px;
  margin: 0px;
  width: 100%;
}
@media (min-width: 620px) {
  .column-left {
    padding: 0px;
    margin-right: 20px;
    max-width: 450px;
  }
  .column-right {
    padding: 0px;
    margin-left: 20px;
    max-width: 450px;
  }
}

.hr-tag {
  /* border: 1px solid #d9dcdf; */
  border-top: 2px solid #d7d7d7;
}

h2 {
  padding: 20px 0px;
  font-size: 22px;
}

.row2 {
  .row2-content {
    padding: 10px;
    margin-top: 30px;
    margin-bottom: 20px;
    width: 100%;
    background-color: white;
    flex-direction: column;
    display: flex;
  }
  .row2-content__left {
    margin: 0px;
  }
  .row2-content__right {
    margin: 0px;
  }
  .row2-input-container {
    padding: 15px 0px;
    flex-direction: column;
    align-items: center;
    display: flex;
  }
  .brand-label {
    font-size: 13px;
    font-weight: lighter;
  }
  .brand-select {
    padding: 12px 10px;
    font-size: 13px;
    border-radius: 14px;
    background: white;
  }
  @media (min-width: 520px) {
    .brand-label {
      font-size: 14px;
    }
    .brand-select {
      font-size: 14px;
    }
    .row2-input-container {
      margin: 15px 0px;
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
  @media (min-width: 700px) {
    .row2-content {
      padding: 20px;
      max-width: 1000px;
      flex-direction: row;
      justify-content: space-evenly;
    }
    .row2-content__left {
      margin-right: 40px;
    }
    .row2-content__right {
      margin-left: 40px;
    }
    .row2-input-container {
      margin: 15px 0px;
      flex-direction: row;
    }
  }
}

.row1,
.row3 {
  .row1-content,
  .row3-content {
    padding: 20px 10px;
    width: 100%;
  }

  @media (min-width: 700px) {
    .row1-content,
    .row3-content {
      max-width: 1200px;
    }
  }
}

.error-input {
  border-color: red;
}
</style>
