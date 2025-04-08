import { NavigationLinks } from "@/shared/interfaces/layout.interface";

export interface IContextHeader {
    content: NavigationLinks;
    updateContent: (newContent: NavigationLinks) => void;
  }