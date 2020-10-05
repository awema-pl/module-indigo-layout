import { name, version } from '../../package.json'
import { plugin } from './modules/plugin.js'
import i18n from './modules/i18n.js'
import { replaceCode } from './modules/highlight'
import { Waves } from './modules/waves'

const awemaPlugin = {

    name, version,

    install(AWEMA) {
        // set language variables
        AWEMA.lang = i18n

        // init code highlighting
        replaceCode()
        AWEMA.on('core:popstate', replaceCode)
        AWEMA._watchedNames.push('code-block')

        Vue.use(plugin)
        AWEMA.once('core:inited', () => {
            AWEMA.Waves = new Waves(document.body)
        })
    }
}

if (window && ('AWEMA' in window)) {
    AWEMA.use(awemaPlugin)
} else {
    window.__awema_plugins_stack__ = window.__awema_plugins_stack__ || []
    window.__awema_plugins_stack__.push(awemaPlugin)
}
