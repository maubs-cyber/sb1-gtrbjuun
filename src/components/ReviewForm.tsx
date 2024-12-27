import { FormData } from '../types/form';
import { Button } from './Button';

interface ReviewFormProps {
  data: FormData;
  onBack: () => void;
  onSubmit: (data: FormData) => void;
}

export function ReviewForm({ data, onBack, onSubmit }: ReviewFormProps) {
  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="mb-8">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      <div className="bg-gray-50 rounded-lg p-4 space-y-2">{children}</div>
    </div>
  );

  const Field = ({ label, value }: { label: string; value: string | number }) => (
    <div>
      <span className="font-medium text-gray-600">{label}:</span>{' '}
      <span className="text-gray-900">{value || 'Not provided'}</span>
    </div>
  );

  return (
    <div>
      <p className="text-gray-600 mb-8">
        Please review your information before submitting. You can go back to make any changes.
      </p>

      <Section title="Company Information">
        <Field label="Legal Business Name" value={data.companyInfo.businessName} />
        <Field label="DBA" value={data.companyInfo.dba || ''} />
        <Field label="Address" value={data.companyInfo.address} />
        <Field label="Website" value={data.companyInfo.website || ''} />
        <Field label="Industry" value={data.companyInfo.industry} />
        <Field label="Number of Employees" value={data.companyInfo.employees} />
        <Field label="Revenue Range" value={data.companyInfo.revenueRange} />
      </Section>

      <Section title="Contact Information">
        <Field label="Name" value={data.contactInfo.name} />
        <Field label="Title" value={data.contactInfo.title} />
        <Field label="Email" value={data.contactInfo.email} />
        <Field label="Phone" value={data.contactInfo.phone} />
        <Field label="Preferred Contact Method" value={data.contactInfo.contactMethod} />
        <Field label="Best Time to Contact" value={data.contactInfo.bestTime} />
      </Section>

      <Section title="Business Operations">
        <Field label="Customer Service Hours" value={data.businessOperations.customerServiceHours} />
        <Field label="Daily Customer Inquiries" value={data.businessOperations.dailyInquiries} />
      </Section>

      <div className="mt-8 flex justify-between">
        <Button type="button" variant="secondary" onClick={onBack}>
          Back
        </Button>
        <Button type="button" onClick={() => onSubmit(data)}>
          Submit Questionnaire
        </Button>
      </div>
    </div>
  );
}