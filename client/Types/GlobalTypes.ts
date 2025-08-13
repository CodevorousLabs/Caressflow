import { IconType } from "react-icons";

export interface FeatureType {
  Icon: IconType,
  title: string,
  description?: string,
  specs?: string[]
}

export interface FormData {
  name: string,
  email: string,
  message: string
}