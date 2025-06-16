import { Lora } from 'next/font/google';

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className={`${lora.className} text-4xl font-bold mb-8`}>DearDabba Terms & Conditions</h1>

        <ol className="space-y-6 text-lg">
          <li>
            <strong>1. Acceptance of Terms:</strong> By accessing or using the DearDabba platform (website/mobile app), you agree
            to be bound by these Terms & Conditions. If you do not agree, please do not use the service.
          </li>
          <li>
            <strong>2. User Eligibility:</strong> You must be at least 18 years old to create an account or place an order on
            DearDabba. By using the platform, you confirm that you meet this requirement.
          </li>
          <li>
            <strong>3. Account Registration:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Users must provide accurate, current, and complete information during registration.</li>
              <li>You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</li>
            </ul>
          </li>
          <li>
            <strong>4. Ordering and Delivery:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Orders once placed are confirmed only after vendor acceptance.</li>
              <li>Delivery times are estimates and may vary due to vendor availability, traffic, or weather.</li>
              <li>Orders may be canceled if the vendor is unable to fulfill them, in which case a full refund will be issued.</li>
            </ul>
          </li>
          <li>
            <strong>5. Payments and Refunds:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>All payments are processed via secure third-party gateways.</li>
              <li>Refunds (if applicable) will be processed to the original payment method within 7–10 working days.</li>
              <li>No refunds will be processed for dissatisfaction with taste or portion unless quality issues are proven.</li>
            </ul>
          </li>
          <li>
            <strong>6. User Conduct:</strong> You agree not to:
            <ul className="list-disc pl-6 mt-2">
              <li>Misuse or abuse any promotional offers.</li>
              <li>Post false reviews or feedback.</li>
              <li>Harass or abuse vendors, delivery personnel, or support staff.</li>
            </ul>
          </li>
          <li>
            <strong>7. Privacy:</strong> We collect personal information such as name, contact details, and delivery address.
            Please refer to our Privacy Policy for more information on how we protect and use your data.
          </li>
          <li>
            <strong>8. Platform Usage:</strong> DearDabba reserves the right to:
            <ul className="list-disc pl-6 mt-2">
              <li>Suspend or terminate user accounts found to be in violation of these Terms.</li>
              <li>Modify or discontinue services with or without notice.</li>
            </ul>
          </li>
          <li>
            <strong>9. Liability Disclaimer:</strong> DearDabba is a marketplace and does not prepare or sell food. The
            responsibility for food quality, safety, and compliance lies with the respective vendor.
          </li>
          <li>
            <strong>10. Governing Law:</strong> These Terms shall be governed by the laws of India. All disputes shall be subject
            to the jurisdiction of courts in Thane, Maharashtra.
          </li>
        </ol>
      </div>
    </div>
  );
}
