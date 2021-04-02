import Vue from 'vue'
import io from "socket.io-client";
const isProd = process.env.NODE_ENV == "production"
const serverURL = () => {
    if (isProd == true) {
       return "https://www.inspectorama.com";
    } else {
        return "http://localhost:3000"
    }
}
const socket = io(serverURL(), {transports: ['websocket'], upgrade: false})
Vue.use(socket)

export default socket

