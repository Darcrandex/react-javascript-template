export function createStorage<T extends object>(namespace: string, config: IConfiguration<T>): Storage<T>

type STORAGE_TYPE = 'localStorage' | 'sessionStorage'

interface IConfiguration<T> {
  type?: STORAGE_TYPE
  maxAge?: number
  defaultState?: T
}

class Storage<T> {
  protected namespace: string
  protected type: STORAGE_TYPE
  protected maxAge: number
  protected defaultState: T
  protected state: T
  protected updateAt: number

  public get: <K extends keyof T>(key?: K) => T | T[K]
  public set: (patch: Partial<T> | ((prevState: T) => Partial<T>)) => void
  public reset: () => void
  public destroy: () => void
}
