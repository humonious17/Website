import { Service } from '../types';

export const essayReviewServices: Service[] = [
  {
    id: 'standard_review',
    title: 'Standard Review',
    price: 999,
    details: [
      '1 Major Review + 1 Follow-up Review',
      'Detailed feedback on clarity, structure, and tone',
      'Word limit optimization'
    ],
    turnaround: '5 Days'
  },
  {
    id: 'express_review',
    title: 'Express Review',
    price: 1499,
    details: [
      'Priority Service',
      'All Standard Review features'
    ],
    turnaround: '24-48 Hours'
  },
  {
    id: 'video_call_review',
    title: 'Personalized Video Call Review',
    price: 1999,
    details: [
      '30-45 min Video Call to dive into your background & story',
      '1 Major Review + 1 Follow-up Review',
      'Enhancements in grammar, structure, and flow'
    ],
    turnaround: '5 Days'
  },
  {
    id: 'express_video_call_review',
    title: 'Express Video Call Review',
    price: 2499,
    details: [
      'Priority Service + 30-45 min Video Call',
      'All benefits of the Personalized Video Call Review'
    ],
    turnaround: '24-48 Hours'
  },
  {
    id: 'additional_review',
    title: 'Additional Review',
    price: 299,
    details: [
      'Extra review beyond the standard two rounds'
    ],
    turnaround: '24-48 Hours'
  }
];

export const consultationServices: Service[] = [
  {
    id: 'consultation_30',
    title: '30-Minute Consultation Call',
    price: 599,
    details: [
      'Quick guidance on academic or career queries',
      'Perfect for college applications or essay ideas',
      'Format: Scheduled Call'
    ],
    turnaround: 'Scheduled'
  },
  {
    id: 'consultation_60',
    title: '60-Minute Consultation Call',
    price: 999,
    details: [
      'In-depth discussion on academic or career planning',
      'Format: Scheduled Call'
    ],
    turnaround: 'Scheduled'
  },
  {
    id: 'single_question',
    title: 'Single Question (Voice Answer)',
    price: 99,
    details: [
      'Ask 1 specific question via chat',
      'Receive a detailed voice response within 24 hours'
    ],
    turnaround: '24 Hours'
  }
];