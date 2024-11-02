import { createContext } from "react"

export type TMenuContext = { selectMenu: string, setSelectedMenu: (menu: string) => void }
export const MenuContext = createContext({} as TMenuContext)
