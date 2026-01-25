export interface Site {
  url: string;
  img: string;
  image?: string;
  title: string;
  text: string;
  tags: string[];
  summary?: string;
  subtitle?: string;
}

export interface Article {
  title: string;
  image?: string;
  summary?: string;
  date?: string;
  content?: string;
  tags?: string[];
  img?: string;
  text?: string;
  url?: string;
}

export interface ServiceWorkerConfig {
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
}
