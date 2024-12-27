export interface CompanyInfo {
  businessName: string;
  dba?: string;
  address: string;
  website?: string;
  industry: string;
  employees: number;
  revenueRange: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  contactMethod: 'email' | 'phone' | 'other';
  bestTime: string;
}

export interface BusinessOperations {
  customerServiceHours: string;
  dailyInquiries: number;
}

export interface FormData {
  companyInfo: CompanyInfo;
  contactInfo: ContactInfo;
  businessOperations: BusinessOperations;
}

export type Step = 'company' | 'contact' | 'operations' | 'review';