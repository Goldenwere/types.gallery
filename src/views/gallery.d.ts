import { type ArtWork, type Folder } from '../shared'

/**
 * Modal for gallery route data
 */
export interface GalleryViewModel {
  /** collection of folders organized into a nested hierarchy with an id that corresponds to the art present in gallery.work */
  folders?: Folder[]
  /** the artwork in the gallery */
  work: ArtWork[]
}
