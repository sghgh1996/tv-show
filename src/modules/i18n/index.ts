import { createI18n } from 'vue-i18n'
import { type UserModule } from '~/types'
import { languages, defaultLocale } from '~locales'

export const messages = Object.assign(languages)

export const install: UserModule = ({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    messages
  })

  app?.use(i18n)
}
