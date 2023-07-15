import { ReactNode } from "react";

export interface ServicesProps {
  data: {
    services: Array<{
      title: string;
      description: string
      image?: string;
    }>;
  };
};

export interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    image?: string
  };
};

export interface SectionContainerProps {
  id: string;
  heading: string;
  gradientDirection: string;
  children: ReactNode
}