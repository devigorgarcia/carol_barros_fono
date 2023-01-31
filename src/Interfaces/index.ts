import { PositionProps, ResponsiveValue } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface IChildrenProps {
  children: ReactNode;
}

export interface IAvatarProps {
  title: string;
  subTitle: string;
  img: string;
  titlePos?: string;
  subTitlePos?: string;
  butterflyPosX?: string;
  butterflyPosY?: string;
  marginBottom?: string;
}
