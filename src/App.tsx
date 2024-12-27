import React, { useState } from 'react';
import { Building2, UserCircle2, BarChart3 } from 'lucide-react';
import { FormData, Step } from './types/form';
import { StepIndicator } from './components/StepIndicator';
import { CompanyInfoForm } from './components/CompanyInfoForm';
import { ContactInfoForm } from './components/ContactInfoForm';
import { BusinessOperationsForm } from './components/BusinessOperationsForm';
import { ReviewForm } from './components/ReviewForm';

const initialFormData: FormData = {
  companyInfo: {
    businessName: '',
    address: '',
    industry: '',
    employees: 0,
    revenueRange: '',
  },
  contactInfo: {
    name: '',
    title: '',
    email: '',
    phone: '',
    contactMethod: 'email',
    bestTime: '',
  },
  businessOperations: {
    customerServiceHours: '',
    dailyInquiries: 0,
  },
};

function App() {
  const [currentStep, setCurrentStep] = useState<Step>('company');
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const steps = [
    { title: 'Company', completed: currentStep !== 'company', icon: Building2 },
    { title: 'Contact', completed: ['contact', 'operations', 'review'].includes(currentStep), icon: UserCircle2 },
    { title: 'Operations', completed: ['operations', 'review'].includes(currentStep), icon: BarChart3 },
    { title: 'Review', completed: currentStep === 'review', icon: Building2 },
  ];

  const handleSubmit = async (data: FormData) => {
    // In a real application, you would submit this data to your backend
    console.log('Form submitted:', data);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'company':
        return (
          <CompanyInfoForm
            data={formData.companyInfo}
            onNext={(data) => {
              setFormData({ ...formData, companyInfo: data });
              setCurrentStep('contact');
            }}
          />
        );
      case 'contact':
        return (
          <ContactInfoForm
            data={formData.contactInfo}
            onBack={() => setCurrentStep('company')}
            onNext={(data) => {
              setFormData({ ...formData, contactInfo: data });
              setCurrentStep('operations');
            }}
          />
        );
      case 'operations':
        return (
          <BusinessOperationsForm
            data={formData.businessOperations}
            onBack={() => setCurrentStep('contact')}
            onNext={(data) => {
              setFormData({ ...formData, businessOperations: data });
              setCurrentStep('review');
            }}
          />
        );
      case 'review':
        return (
          <ReviewForm
            data={formData}
            onBack={() => setCurrentStep('operations')}
            onSubmit={handleSubmit}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">NexAI Labs</h1>
            <p className="mt-2 text-lg text-gray-600">Client Onboarding Questionnaire</p>
          </div>
          
          <StepIndicator
            currentStep={steps.findIndex(s => s.title.toLowerCase() === currentStep)}
            steps={steps}
          />

          <div className="mt-12">{renderStep()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;