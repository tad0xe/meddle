<template>
<div class="container">
    <div class="container-header">
        <h2>Reset your Password</h2>
        <p v-if="!error" class="instruction">You will receive an email with a link to reset your password.</p>
        <p v-if="error" class="error">{{error}}</p>
    </div>
    <div class="container-body">
        <form @submit.prevent="onSubmit">
            <div class="text-input" :class="{invalid: $v.email.$error}" v-if="!auth">
                <input type="email" required placeholder="Enter Email" @blur="$v.email.$touch()" v-model="email" />
                <span v-if="!$v.email.email">Email is invalid.</span>
                <span v-if="!$v.email.required && $v.email.$error">Email is required.</span>
            </div>
            <div>
                <button type="submit" class="submit" :disabled="$v.$invalid">Send Email</button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import {
    required,
    email
} from "vuelidate/lib/validators";
export default {
    data() {
        return {
            // isSignupAsInspectorVisible: false,
            email: ""
        };
    },
    validations: {
        email: {
            required,
            email
        }
    },
    methods: {
        onSubmit() {
            const formData = {
                email: this.email
            };
            this.$store.dispatch("getResetPasswordLink", formData);
        }
    },

    computed: {
        error() {
            return this.$store.state.errorMessage;
            console.log(this.$store.state.errorMessage);
        }
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
    margin-top: 100px;
    margin-bottom: 180px;
    border-radius: 10px;
}

.container-header {
    font-size: 14px;
    float: left;
}

.container-header u {
    cursor: pointer;
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
    width: 100%;
    text-align: center;
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

.error,
.instruction {
    font-size: 13px;
    margin-top: 5px;
}

.instruction {
    color: red;
}

.error {
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
