import { createStorage } from '@/utils/storage'

// token
export const tokenStorage = createStorage('token', { defaultState: { value: undefined } })
