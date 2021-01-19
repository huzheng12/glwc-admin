import defaultSettings from '@/settings'

const title = defaultSettings.title || '格蓝威格'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
