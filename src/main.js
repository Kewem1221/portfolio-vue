import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

export function throttle(fn, period = 1000) {
    let timeoutId = null
    return function() {
        if (timeoutId === null) {
            fn.apply(this, arguments)
            timeoutId = setTimeout(() => {
                timeoutId = null
            }, period)
        }
    }
}
