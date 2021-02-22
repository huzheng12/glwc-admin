import defaultSettings from '@/settings'

const title = defaultSettings.title || '格蓝威驰'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
