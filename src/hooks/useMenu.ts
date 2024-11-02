import { useContext } from "react";
import { MenuContext } from "@states/context/menuContext";

export function useMenu() {
    return useContext(MenuContext)
}
