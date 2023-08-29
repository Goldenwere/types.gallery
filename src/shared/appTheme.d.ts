import { type ThemeDesignation } from './themeDesignation'

export interface AppTheme {
  /** what type of theme this is in accessibility terms */
  designation?: ThemeDesignation
  /** what the display name of the theme is */
  displayName: string
  /** the location of the CSS file */
  location: string
}
