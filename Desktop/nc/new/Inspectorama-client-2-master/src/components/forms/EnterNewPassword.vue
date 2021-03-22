<template>
<div>
    <div class="container">
        <div class="container-header">
            <h2>Enter a new password</h2>
        </div>
        <div class="container-body">
            <form @submit.prevent="onSubmit()">
                <p style="color: red" class="error" v-if="error">{{error}}</p>
                <input type="hidden" v-model="token">
                <input type="hidden" v-model="id">
                <input type="hidden" v-model="email">
                <input type="hidden" v-model="firstName">
                <input type="hidden" v-model="lastName">

                <div class="text-input" :class="{invalid: $v.password.$error}">
                    <input type="password" required placeholder="Enter New Password" @blur="$v.password.$touch()" v-model="password" />
                    <span v-if="!$v.password.minLen">New password must be at least {{ $v.password.$params.minLen.min }}.</span>
                    <span v-if="!$v.password.required && $v.password.$error">New password is required.</span>
                </div>
                <div class="text-input" :class="{invalid: $v.passwordRepeat.$error}">
                    <input type="password" required placeholder="Repeat New Password" @blur="$v.passwordRepeat.$touch()" v-model="passwordRepeat" />
                    <span v-if="!$v.passwordRepeat.required && $v.passwordRepeat.$error">Repeat password is required.</span>
                    <span v-else-if="!$v.passwordRepeat.sameAs">Passwords must match.</span>
                </div>
                <div class="clearfix">
                    <button type="submit" class="submit" :disabled="$v.$invalid">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import globalAxios from "axios";
import {
    mapState,
    mapActions,
    mapMutations,
    mapGetters
} from "vuex";
import {
    required,
    minLength,
    sameAs
} from "vuelidate/lib/validators";
export default {
    data: function () {
        return {
            error: "",
            token: this.$route.params.token,
            id: this.$route.params.id,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordRepeat: "",
            data: ""
        };
    },
    validations: {
        password: {
            required,
            minLen: minLength(8)
        },
        passwordRepeat: {
            required,
            sameAs: sameAs(vm => {
                return vm.password;
            })
        }
    },
    methods: {
        onSubmit() {
            const formData = {
                token: this.token,
                id: this.id,
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password
            };
            this.$store.dispatch("saveNewPassword", formData);
        }
    },
    computed: {
        // error() {
        //   return this.$store.state.errorMessage;
        //   console.log(this.$store.state.errorMessage);
        // }
    },
    created() {
        globalAxios
            .get("/users/passwordReset/" + this.id + "/" + this.token)
            .then(res => {
                this.data = res.data;
                this.firstName = res.data.firstName;
                this.lastName = res.data.lastName;
                this.email = res.data.email;

            })
            .catch(error => {
                console.log(error.response);
                this.error = error.response.data.message;
            });
    }
};
</script>

<style scoped>
* {
    box-sizing: border-box;
    color: black;
}

.container {
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    font-family: sans-serif, Arial, Helvetica;
    padding: 15px;
    max-width: 400px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 50px;
    margin-bottom: 50px;
    border-radius: 10px;
}

.container-header {
    font-size: 14px;
    margin-bottom: 20px;
}

.container-body {
    font-size: 13px;
    padding-top: 10px;
    padding-bottom: 10px;
}

.text-input {
    margin: 10px 0px;
    float: left;
    width: 100%;
}

input {
    width: 100%;
    padding: 10px;
    border-radius: 3px;
    outline: none;
    border: 1px solid #ccc;
    background-color: rgb(232, 240, 254);
}

.invalid input {
    border: 1px solid red;
}

input:focus {
    outline: none;
    border: 1px solid #a842a7;
    background-color: #eee;
}

.submit {
    background-color: #2bc4e2;
    color: white;
    padding: 10px 20px;
    margin: 8px 0;
    border: none;
    outline: none;
    cursor: pointer;
    text-align: center;
    width: 100%;
    border-radius: 40px;
    box-sizing: border-box;
    font-size: 16px;
}

.submit:hover {
    background-color: #07b9dd;
}

.submit[disabled],
.submit[disabled]:hover {
    border: 1px solid #2bc4e2;
    border-radius: 40px;
    background-color: #f8fbfb;
    color: #2bc4e2;
    cursor: not-allowed;
}

.text-input span {
    color: red;
    font-size: 11px;
}

.error {
    font-size: 13px;
    color: red;
}

/* For mobile phones: */
@media only screen and (max-width: 420px) {
    .container {
        box-shadow: none;
        padding: 20px 10px;
        width: 100%;
        position: static;
        left: 0px;
        margin: 0px;
        border-radius: 0px;
        transform: none;
        display: block;
    }
}
</style>
