import { type ArtWork, type SocialContact } from '../shared'

/**
 * Modal for home route data
 */
export interface HomeViewModel {
  /** [MARKDOWN OPTIONAL] description about the artist, site, etc. */
  about?: string
  /** copyright notice displayed as is on the page */
  copyrightNotice: string
  /** list of social contacts that may be organized by their category */
  social?: SocialContact[]
  /** artwork featured on the landing page with a selected piece set as the home page's background */
  featured?: ArtWork[]
  /** the initial featured image on the ladning page */
  featuredFirstImage?: number | 'random'
}
