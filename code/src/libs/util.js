import i18n from '@/lang'

let util = {

}
util.title = function (title) {
  const langTitle = i18n.t('route.' + title) ? i18n.t('route.' + title) : 'base - 首页'
  window.document.title = langTitle
}

export default util