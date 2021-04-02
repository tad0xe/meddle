<template>
  <div>
      <div class="modal-backdrop" @click="close">
        <div class="modal" @click.stop>
          <div class="modal__header">
              <div class="modal__header__content">
                <h2>Sign Up</h2> 
                or <u @click="close"><router-link to="/inspector">sign up as an inspector</router-link></u>
              </div>
              <div class="btn-close-upper" @click="close">
                x
              </div>
          </div>
          <div class="modal-body">
              <form class="modal-content" @submit.prevent="onSubmit()">
                <div class="modal-container">
                  <input class="text-input" id="firstName" type="text" placeholder="First Name" required v-model="firstName"> <br />
                  <input class="text-input" id="lastName" type="text" placeholder="Last Name" required v-model="lastName"> <br />

                  <input class="text-input" id="email" type="email" placeholder="Enter Email" required v-model="email"><br />

                  <input class="text-input" id="password" type="password" placeholder="Enter Password" required minlength="8" v-model="password"> <br />

                  <input class="text-input" id="passwordRepeat" type="password" placeholder="Repeat Password" required v-model="passwordRepeat"> <br />

                  <p>By creating an account, you agree to our <a class="link" href="#">Terms & Privacy</a>.</p>

                  <div class="clearfix">
                    <button type="submit" class="signupbtn">Sign Up</button>
                  </div>
                </div>
              </form>
          </div>
          <footer class="modal-footer">
            <p>  Already have an account? <a class="link "href="#"> <u @click="openSignin()">Sign In</u> </a></p>
          </footer>
        </div>
      </div>
  </div>
</template>

<script>
  import {required, email } from "vuelidate/lib/validators"
  export default {
    data: function () {
      return {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordRepeat: "",
      }
    },
    components: {
    },
    validations: {
      email: {
        required, email,
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      openSignin() {
        this.$emit('openSignin');
      },
      onSubmit() {
        const formData = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          passwordRepeat: this.passwordRepeat,
        }
        console.log(formData);
        this.$store.dispatch("signup", formData)
      }
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
    color: black;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    font-family: sans-serif, Arial, Helvetica;
    padding:15px;
    width: 300px;
  }


  .modal__header {
    border-bottom: 1.5px solid #eeeeee;
    justify-content: space-between;
    padding-bottom: 15px;
  }

  .modal__header__content {
    font-size: 14px;
    float:left;
  }

    .modal__header__content u{
      cursor: pointer;
    }
    .modal-footer {
      border-top: 1.5px solid #eeeeee;
      justify-content: flex-end;
      font-size: 13px;
    }

  .modal-body {
    position: relative;
    font-size: 13px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-close-upper {
    float: right;
    font-weight: bold;
    border: 1.5px solid;
    cursor: pointer;
    padding-left: 3px;
    padding-right: 3px;
  }
  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
  .text-input{
    padding: 7px;
    margin-top: 7px;
    margin-bottom: 7px;
    width: 100%;
  }

  .signupbtn {
    background-color: #2BC4E2;
    color: white;
    padding: 10px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
    border-radius: 40px;
    box-sizing: border-box;
    font-size: 14px;
  }

  .link {
    color: dodgerblue
  }
</style>

