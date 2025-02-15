export type ServiceType =
  | 'standard_review'
  | 'express_review'
  | 'video_call_review'
  | 'express_video_call_review'
  | 'additional_review'
  | 'consultation_30'
  | 'consultation_60'
  | 'single_question';

export interface Service {
  id: ServiceType;
  title: string;
  price: number;
  details: string[];
  turnaround: string;
}

export interface Booking {
  id: string;
  name: string;
  email: string;
  service: ServiceType;
  amount: number;
  payment_screenshot_url: string;
  payment_verified: boolean;
  calendly_event_url?: string;
  notes?: string;
  created_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  responded: boolean;
  created_at: string;
}