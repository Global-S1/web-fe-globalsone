import { NavigationLinks } from "@/shared/interfaces/layout.interface";
import { ReactNode, useState } from "react";
import { defaultValue, HeaderMobileContext } from "./header-context";

export const HeaderMobileProvider = ({ children }: { children: ReactNode }) => {
  const [links, setLinks] = useState<NavigationLinks>(defaultValue.content);
  const updateContent = (newContent: NavigationLinks) => {
    setLinks(newContent);
  };
  return (
    <HeaderMobileContext.Provider value={{ content: links, updateContent }}>
      {children}
    </HeaderMobileContext.Provider>
  );
};
