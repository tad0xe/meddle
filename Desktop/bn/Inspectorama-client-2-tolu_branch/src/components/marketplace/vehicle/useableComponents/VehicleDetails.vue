<template>
  <div class=" bg-xlighter-blue padding-md-30 padding-20">
    <div class="margin-md-30  ">
      <div class="font-size-22 padding-bottom-10">
        <h2>
          Vehicle Information
        </h2>
        <hr />
        <div />

        <div>
          <div v-if="$v.form.$error">
            Form has errors
          </div>

          <div class="row padding-top-20 padding-md-top-0 padding-right-md-50 ">
            <div class="col-md-7">
              <div class="font-size-12 margin-left-md-20 margin-right-md-40">
                <b>Headline</b>
                <div class="padding-top-10 ">
                  <input
                    class="form-control max-width-700 padding-18 stretch-full-md "
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
              </div>
            </div>
            <div class="col-md-5 ">
              <div
                class="font-size-12 margin-left-md-20 margin-right-md-40  max-width-590 stretch-full-md  padding-top-md-2 padding-top-10   "
              >
                <b>Price</b>
                <div class="padding-top-10 ">
                  <div class="d-flex">
                    <select
                      v-model="form.price.currency"
                      class="max-width-90 bg-blue  padding-14 border-top-left-radius-10 border-bottom-left-radius-10 font-size-16 white"
                    >
                      <option
                        v-for="currency in CountryCurrency"
                        :key="currency.country"
                        :value="currency.currency"
                      >
                        {{ currency.currency }}
                      </option>
                    </select>
                    <input
                      class=" max-width-450 stretch-full-md   padding-16  border-top-right-radius-10 border-bottom-right-radius-10 border-color-grey border-1 "
                      type="text"
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
            </div>
          </div>
          <div class="row padding-top-20 padding-md-top-0 padding-right-md-50 ">
            <div class="col-md-7">
              <div class="font-size-12 margin-left-md-20 margin-right-md-40">
                <b>Vehicle Identification Number (VIN)</b>
                <div class="padding-top-10 ">
                  <input
                    class="form-control max-width-700 padding-18 stretch-full-md "
                    type="email"
                    placeholder=""
                    v-model="form.vehicleSpecifications.vin"
                    @blur="$v.form.vehicleSpecifications.vin.$touch"
                    :class="
                      $v.form.$error &&
                      !$v.form.vehicleSpecifications.vin.required
                        ? 'error-input'
                        : null
                    "
                  />
                </div>
              </div>
            </div>
            <div class="col-md-5 ">
              <div
                class="font-size-12 margin-left-md-20  max-width-540 stretch-full-md  padding-top-md-2 padding-top-10   "
              >
                <b>Mileage</b>
                <div class="padding-top-10 ">
                  <div class="d-flex">
                    <input
                      class=" max-width-650 stretch-full-md   padding-16  border-top-left-radius-10 border-bottom-left-radius-10 border-color-grey border-1 "
                      type="text"
                      v-model="form.mileage.value"
                      aria-label="Text input with dropdown button"
                      :class="
                        $v.form.$error && !$v.form.mileage.value.required
                          ? 'error-input'
                          : null
                      "
                    />
                    <select
                      class=" bg-black max-width-90  padding-14 border-top-right-radius-10 border-bottom-right-radius-10 font-size-16 white"
                      v-model="form.mileage.unit"
                    >
                      <option value="kilometer">Km</option>
                      <option value="miles">M</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row padding-top-20 padding-md-top-0 padding-right-md-40 ">
            <div class="col-md-7">
              <div class="margin-left-md-20 font-size-12 margin-right-md-48">
                <b>Seller Description</b>
                <div class="padding-top-10">
                  <textarea
                    class="form-control max-width-700 padding-18 stretch-full-sm "
                    rows="10"
                    v-model="form.description"
                    :class="
                      $v.form.$error && !$v.form.description.required
                        ? 'error-input'
                        : null
                    "
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div class="max-width-550">
                <div class=" margin-left-md-16 max-width-450 stretch-full   ">
                  <div class=" padding-top-0 ">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="margin-right-md-0">
                          <label class="font-size-12 ">
                            <b>Is the Price Negotiable?</b></label
                          >
                          <br />
                          <div class="padding-top-10 ">
                            <select
                              class="max-width-300 border-color-light-grey border-1 padding-18 padding-md-16 border-radius-8 font-size-10"
                              v-model="form.isPriceNegotiable"
                              :class="
                                $v.form.$error &&
                                !$v.form.isPriceNegotiable.required
                                  ? 'error-input'
                                  : null
                              "
                            >
                              <option value="" disabled>Choose...</option>
                              <option :value="true">Yes</option>
                              <option :value="false">No</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="margin-left-md-10 margin-right-md-6">
                          <label class="font-size-12"
                            ><b>Is this vechicle Available?</b></label
                          >
                          <br />
                          <div class="padding-top-10 ">
                            <select
                              class="max-width-300 border-color-light-grey border-1 padding-18 padding-md-16 padding-12 border-radius-8 font-size-10 "
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
                      </div>
                    </div>

                    <div class="row">
                      <div class="">
                        <label class="font-size-12 "
                          ><b>
                            Will you refund the inspection fee to the eventual
                            buyer?</b
                          >
                        </label>
                        <div>
                          <div class="col-md-6">
                            <select
                              class="max-width-300 border-color-light-grey border-1 padding-18 padding-md-16 padding-12 border-radius-8 font-size-10 "
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
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="padding-top-md-50">
          <image-upload @clicked="onUploadImage" />
        </div>
      </div>

      <div class="padding-left-0 padding-left-md-30">
        <div class="overflow-scroll-x max-width-1320">
          <div class="d-flex">
            <div
              class="relative min-width-180 max-width-180 fixed-height-100 margin-10"
            >
              <img
                width="100%"
                height="100%"
                class="border-radius-6"
                src="../../../../assets/images/2019-ford-edge-st-105-1542123371.jpg"
              />
              <i
                class="fa fa-close absolute top-0 right-0 cursor-pointer font-size-14 margin-2 padding-4 rounded-circle bg-red white"
              ></i>
            </div>

            <div
              class="relative min-width-180 max-width-180 fixed-height-100 margin-10"
            >
              <img
                width="100%"
                height="100%"
                class="border-radius-6"
                src="../../../../assets/images/2019-ford-edge-st-105-1542123371.jpg"
              />
              <i
                class="fa fa-close absolute top-0 right-0 cursor-pointer font-size-14 margin-2 padding-4 rounded-circle bg-red white"
              ></i>
            </div>

            <div
              class="relative min-width-180 max-width-180 fixed-height-100 margin-10"
            >
              <img
                width="100%"
                height="100%"
                class="border-radius-6"
                src="../../../../assets/images/2019-ford-edge-st-105-1542123371.jpg"
              />
              <i
                class="fa fa-close absolute top-0 right-0 cursor-pointer font-size-14 margin-2 padding-4 rounded-circle bg-red white"
              ></i>
            </div>

            <div
              class="relative min-width-180 max-width-180 fixed-height-100 margin-10"
            >
              <img
                width="100%"
                height="100%"
                class="border-radius-6"
                src="../../../../assets/images/2019-ford-edge-st-105-1542123371.jpg"
              />
              <i
                class="fa fa-close absolute top-0 right-0 cursor-pointer font-size-14 margin-2 padding-4 rounded-circle bg-red white"
              ></i>
            </div>

            <div
              class="relative min-width-180 max-width-180 fixed-height-100 margin-10"
            >
              <img
                width="100%"
                height="100%"
                class="border-radius-6"
                src="../../../../assets/images/2019-ford-edge-st-105-1542123371.jpg"
              />
              <i
                class="fa fa-close absolute top-0 right-0 cursor-pointer font-size-14 margin-2 padding-4 rounded-circle bg-red white"
              ></i>
            </div>

            <div
              class="relative min-width-180 max-width-180 fixed-height-100 margin-10"
            >
              <img
                width="100%"
                height="100%"
                class="border-radius-6"
                src="../../../../assets/images/2019-ford-edge-st-105-1542123371.jpg"
              />
              <i
                class="fa fa-close absolute top-0 right-0 cursor-pointer font-size-14 margin-2 padding-4 rounded-circle bg-red white"
              ></i>
            </div>

            <div
              class="relative min-width-180 max-width-180 fixed-height-100 margin-10"
            >
              <img
                width="100%"
                height="100%"
                class="border-radius-6"
                src="../../../../assets/images/2019-ford-edge-st-105-1542123371.jpg"
              />
              <i
                class="fa fa-close absolute top-0 right-0 cursor-pointer font-size-14 margin-2 padding-4 rounded-circle bg-red white"
              ></i>
            </div>

            <div
              class="relative min-width-180 max-width-180 fixed-height-100 margin-10"
            >
              <img
                width="100%"
                height="100%"
                class="border-radius-6"
                src="../../../../assets/images/2019-ford-edge-st-105-1542123371.jpg"
              />
              <i
                class="fa fa-close absolute top-0 right-0 cursor-pointer font-size-14 margin-2 padding-4 rounded-circle bg-red white"
              ></i>
            </div>

            <div
              class="relative min-width-180 max-width-180 fixed-height-100 margin-10"
            >
              <img
                width="100%"
                height="100%"
                class="border-radius-6"
                src="../../../../assets/images/2019-ford-edge-st-105-1542123371.jpg"
              />
              <i
                class="fa fa-close absolute top-0 right-0 cursor-pointer font-size-14 margin-2 padding-4 rounded-circle bg-red white"
              ></i>
            </div>

            <div
              class="relative min-width-180 max-width-180 fixed-height-100 margin-10"
            >
              <img
                width="100%"
                height="100%"
                class="border-radius-6"
                src="../../../../assets/images/2019-ford-edge-st-105-1542123371.jpg"
              />
              <i
                class="fa fa-close absolute top-0 right-0 cursor-pointer font-size-14 margin-2 padding-4 rounded-circle bg-red white"
              ></i>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 class="font-size-22 padding-bottom-10">
          Vehicle Specifications
        </h2>
        <hr />
        <br />
        <div />
        <div
          class="bg-white margin-md-40 max-width-900 margin-md-30  padding-bottom-30 padding-md-40 padding-16"
        >
          <div class="row ">
            <div class="col-sm-5">
              <div class="">
                <div class="row margin-top-10 margin-top-md-10">
                  <div class="  col-md-6">
                    <p class="margin-top-14">BRAND</p>
                  </div>

                  <div class="col-md-6 padding-top-10 padding-top-md-0">
                    <select
                      class="border-color-light-grey border-1 max-width-200 stretch-full-sm padding-14 border-radius-8"
                      v-model="form.vehicleSpecifications.brand"
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
                </div>
              </div>
            </div>
            <div class="col-sm-2"></div>
            <div class="col-sm-5">
              <div class="row margin-top-10 margin-top-md-10">
                <div class="  col-md-6">
                  <p class="margin-top-14">MODEL</p>
                </div>
                <div class="col-md-6 padding-top-10 padding-top-md-0">
                  <select
                    class="border-color-light-grey border-1 max-width-200 padding-14 border-radius-8 stretch-full-sm"
                    v-model="form.vehicleSpecifications.model"
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
              </div>
            </div>
          </div>
          <div class="row margin-top-md-10">
            <div class="col-sm-5">
              <div class="row margin-top-10 margin-top-md-10">
                <div class="  col-md-6">
                  <p class="margin-top-14">YEAR</p>
                </div>
                <div class="col-md-6 padding-top-10 padding-top-md-0">
                  <select
                    class="border-color-light-grey border-1 max-width-200 padding-14 border-radius-8 stretch-full-sm"
                    v-model="form.vehicleSpecifications.year"
                    :class="
                      $v.form.$error &&
                      !$v.form.vehicleSpecifications.year.required
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
              </div>
            </div>

            <div class="col-sm-2"></div>
            <div class="col-sm-5">
              <div class="row margin-top-10 margin-top-md-10">
                <div class="  col-md-6">
                  <p class="margin-top-14">DRIVE TYPE</p>
                </div>
                <div class="col-md-6 padding-top-10 padding-top-md-0">
                  <select
                    class="border-color-light-grey border-1 max-width-200 stretch-full-sm padding-14 border-radius-8 stretch-full-sm"
                    v-model="form.vehicleSpecifications.driveType"
                    :class="
                      $v.form.$error &&
                      !$v.form.vehicleSpecifications.driveType.required
                        ? 'error-input'
                        : null
                    "
                  >
                    <option
                      v-for="wheel in WheelDrive"
                      :key="wheel"
                      :value="wheel"
                    >
                      {{ wheel }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="row margin-top-md-10">
            <div class="col-sm-5">
              <div class="row margin-top-10 margin-top-md-10">
                <div class="  col-md-6">
                  <p class="margin-top-14">ENGINE</p>
                </div>
                <div class="col-md-6 padding-top-10 padding-top-md-0">
                  <select
                    class="border-color-light-grey border-1 max-width-200 padding-14 border-radius-8 stretch-full-sm"
                    v-model="form.vehicleSpecifications.engine"
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
              </div>
            </div>
            <div class="col-sm-2"></div>
            <div class="col-sm-5">
              <div class="row margin-top-10 margin-top-md-10">
                <div class="  col-md-6">
                  <p class="margin-top-14">TRANSMISSION</p>
                </div>
                <div class="col-md-6 padding-top-10 padding-top-md-0">
                  <select
                    class="border-color-light-grey border-1 max-width-200 padding-14 border-radius-8 stretch-full-sm"
                    v-model="form.vehicleSpecifications.transmission"
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
              </div>
            </div>
          </div>
          <div class="row margin-top-md-10">
            <div class="col-sm-5">
              <div class="row margin-top-10 margin-top-md-10">
                <div class="col-md-6 ">
                  <p class="margin-top-14">FORM OF SALE</p>
                </div>
                <div class="col-md-6 padding-top-10 padding-top-md-0">
                  <select
                    class="border-color-light-grey border-1 max-width-200 padding-14 border-radius-8 stretch-full-sm"
                    v-model="form.formOfSale"
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
              </div>
            </div>
            <div class="col-sm"></div>
            <div class="col-sm-5">
              <div class="row margin-top-10 margin-top-md-10">
                <div class="col-md-6 ">
                  <p class="margin-top-14">CYLINDER</p>
                </div>
                <div class="col-md-6 padding-top-10 padding-top-md-0">
                  <select
                    class="border-color-light-grey border-1 max-width-200 padding-14 border-radius-8 stretch-full-sm"
                    v-model="form.vehicleSpecifications.cylinders"
                    :class="
                      $v.form.$error &&
                      !$v.form.vehicleSpecifications.cylinders.required
                        ? 'error-input'
                        : null
                    "
                  >
                    <option
                      v-for="cylin in Cylinders"
                      :key="cylin"
                      :value="cylin"
                    >
                      {{ cylin }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="row margin-top-md-10">
            <div class="col-sm-5">
              <div class="row margin-top-10 margin-top-md-10">
                <div class="col-md-6 ">
                  <p class="margin-top-14">EXTERIOR</p>
                </div>
                <div class="col-md-6 padding-top-10 padding-top-md-0">
                  <select
                    class="border-color-light-grey border-1 max-width-200 padding-14 border-radius-8 stretch-full-sm"
                    v-model="form.vehicleSpecifications.exteriorColor"
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
              </div>
            </div>
            <div class="col-sm-2"></div>
            <div class="col-sm-5">
              <div class="row margin-top-10 margin-top-md-10">
                <div class="col-md-6 ">
                  <p class="margin-top-14">INTERIOR</p>
                </div>
                <div class="col-md-6 padding-top-10 padding-top-md-0">
                  <select
                    class="border-color-light-grey border-1 max-width-200 padding-14 border-radius-8 stretch-full-sm"
                    v-model="form.vehicleSpecifications.interiorColor"
                    :class="
                      $v.form.$error &&
                      !$v.form.vehicleSpecifications.interiorColor.required
                        ? 'error-input'
                        : null
                    "
                  >
                    <option value disabled selected hidden>Select Color</option>
                    <option
                      v-for="int in InteriorColors"
                      :key="int"
                      :value="int"
                    >
                      {{ int }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="row margin-top-md-10">
            <div class="col-sm-5">
              <div class="row margin-top-10 margin-top-md-10">
                <div class="col-md-6 ">
                  <p class="margin-top-14">FUEL TYPE</p>
                </div>
                <div class="col-md-6 padding-top-10 padding-top-md-0">
                  <select
                    class="border-color-light-grey border-1 max-width-200 padding-14 border-radius-8 stretch-full-sm"
                    v-model="form.vehicleSpecifications.fuelType"
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
              </div>
            </div>
            <div class="col-sm-2"></div>
            <div class="col sm-5">
              <div class="row margin-top-10 margin-top-md-10">
                <div class="col-md-6">
                  <p class="margin-top-14">MATERIAL</p>
                </div>
                <div class="col-md-6 padding-top-10 padding-top-md-0">
                  <select
                    class="border-color-light-grey border-1 max-width-200 padding-14 border-radius-8 stretch-full-sm"
                    v-model="form.vehicleSpecifications.material"
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
              </div>
            </div>
          </div>
          <div class="row margin-top-md-10">
            <div class="col sm-5">
              <div class="row margin-top-10 margin-top-md-10">
                <div class="col-md-6">
                  <p class="margin-top-14">DISPLACEMENT</p>
                </div>
                <div class="col-md-6 padding-top-10 padding-top-md-0">
                  <select
                    class="border-color-light-grey border-1 max-width-200 padding-14 border-radius-8 stretch-full-sm"
                    v-model="form.vehicleSpecifications.displacement"
                    :class="
                      $v.form.$error &&
                      !$v.form.vehicleSpecifications.displacement.required
                        ? 'error-input'
                        : null
                    "
                  >
                    <option value disabled selected hidden>Select</option>
                    <option
                      v-for="disp in Displacement"
                      :key="disp"
                      :value="disp"
                    >
                      {{ disp }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-sm-2"></div>
            <div class="col-sm-5">
              <div class="row margin-top-10 margin-top-md-10">
                <div class="col-md-6">
                  <p class="margin-top-14">BODY STYLE</p>
                </div>
                <div class="col-md-6 padding-top-10 padding-top-md-0">
                  <select
                    class="border-color-light-grey border-1 max-width-200 padding-14 border-radius-8 stretch-full-sm"
                    v-model="form.vehicleSpecifications.bodyStyle"
                    :class="
                      $v.form.$error &&
                      !$v.form.vehicleSpecifications.bodyStyle.required
                        ? 'error-input'
                        : null
                    "
                  >
                    <option value disabled selected hidden>Select</option>
                    <option
                      v-for="body in BodyStyles"
                      :key="body"
                      :value="body"
                    >
                      {{ body }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="row margin-top-md-10">
            <div class="col-sm-5">
              <div class="row margin-top-10 margin-top-md-10">
                <div class="col-md-6">
                  <p class="margin-top-14">NO OF DOORS</p>
                </div>
                <div class="col-md-6 padding-top-10 padding-top-md-0">
                  <select
                    class="border-color-light-grey border-1 max-width-200 padding-14 stretch-full-sm border-radius-8"
                    v-model="form.vehicleSpecifications.noOfDoors"
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
              </div>
            </div>
            <div class="col-sm-2"></div>
            <div class="col-sm-5">
              <div class="row margin-top-10 margin-top-md-10">
                <div class="col-md-6">
                  <p class="margin-top-14">VEHICLE TYPE</p>
                </div>
                <div class="col-md-6 padding-top-10 padding-top-md-0">
                  <select
                    class="border-color-light-grey border-1 max-width-200 padding-14 stretch-full-sm border-radius-8"
                    v-model="form.vehicleSpecifications.vehicleType"
                    :class="
                      $v.form.$error &&
                      !$v.form.vehicleSpecifications.vehicleType.required
                        ? 'error-input'
                        : null
                    "
                  >
                    <option value disabled selected hidden>Select</option>
                    <option
                      v-for="type in VehicleTypes"
                      :key="type"
                      :value="type"
                    >
                      {{ type }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="padding-top-20 padding-left-md-40">
      <h2>
        Contact Information
      </h2>
      <hr />
      <br />

      <div />

      <div class="margin-left-md-60">
        <div class="row">
          <div class="col-sm-5">
            <label>First Name</label>
            <input
              class="form-control max-width-430 stretch-full-sm margin-top-6 padding-14"
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
          <div class="col-sm-2"></div>
          <div class="col-sm-5 ">
            <label>Last Name</label>
            <input
              class="form-control max-width-430 stretch-full-sm margin-top-6 padding-14"
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

        <div class="row">
          <div class="col-sm-5">
            <label for="country">Country</label>
            <br />
            <select
              class="border-color-light-grey margin-top-6 border-1 max-width-200 stretch-full-sm padding-14 border-radius-8"
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
          <div class="col-sm-2"></div>
          <div class="col-sm-5">
            <label>State</label>
            <br />
            <select
              class="border-color-light-grey margin-top-6 border-1 max-width-200 stretch-full-sm padding-14 border-radius-8"
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

        <div class="row">
          <div class="col-sm-5">
            <label>City</label>
            <input
              class="form-control max-width-430 stretch-full-sm margin-top-6 padding-14"
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
          <div class="col-sm-2"></div>
          <div class="col-sm-5">
            <label>Street</label>
            <input
              class="form-control max-width-570 stretch-full-sm margin-top-6 padding-14"
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

        <div class="row">
          <div class="col-sm-5">
            <label>Zip Code</label>
            <input
              class="form-control max-width-430 stretch-full-sm margin-top-6 padding-14"
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
          <div class="col-sm-2"></div>
          <div class="col-sm-5">
            <label for="mobileNum">Phone Number</label>

            <input
              class="form-control max-width-430 stretch-full-sm margin-top-6 padding-14"
              type="text"
              placeholder=""
              v-model="form.mobileNum.countryCode"
              :class="
                $v.form.$error && !$v.form.mobileNum.countryCode.required
                  ? 'error-input'
                  : null
              "
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class=" padding-top-60 margin-left-md-102 d-flex justify-content-start"
    >
      <div class="margin-right-40">
        <button
          type="button"
          class="btn border-1 blue border-color-normal-blue normal-blue padding-20 "
        >
          Preview
        </button>
      </div>
      <div class="">
        <button
          type="submit"
          @click.prevent="submit"
          class="bg-normal-blue btn white border-radius-8 padding-20 "
        >
          submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
  computed: {
    ...mapState({
      currentScreenWidth: (state) => state.utilities.currentScreenWidth,
    }),
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
