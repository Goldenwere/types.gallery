import { type ContractTerm } from '@/shared'

/**
 * Model for TOS route data
 */
export interface TosViewModel {
  /** the last time the TOS was updated */
  lastUpdated: Date
  /** TOS contract terms */
  terms: ContractTerm[]
}
