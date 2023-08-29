import { type AppTheme, type DirectoryRoute } from '@/shared'

/**
 * Modal for site data
 */
export interface AppViewModel {
  /** the gallery directories present on the site; see DirectoryRoute for more information on how to configure */
  directories: DirectoryRoute[]
  /** the url to the favicon */
  faviconUrl?: string
  /** the url to the logo */
  logo?: string
  /** the title of the site */
  title: string
  /** optional subtitle for the site, mainly used on the home page */
  subtitle?: string
  /** array of themes to use for app */
  themes?: AppTheme[]
}
