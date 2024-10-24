"use client";

import { createContext } from "react";
import { IContextHeader } from "./context-header.interface";

export const defaultValue = {
  content: {
    home: { title: "", route: "" },
    aboutUs: { title: "", route: "" },
    services: { title: "", route: "" },
    contactUs: { title: "", route: "" },
  },
  updateContent: () => {},
};

export const HeaderMobileContext = createContext<IContextHeader>(defaultValue);
