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