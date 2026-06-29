export const metadata = {
  title: 'Terms of Service - nextlib',
  description: 'Terms of service for nextlib book borrowing platform.',
};

export default function TermsPage() {
  return (
    <div className="min-h-[80vh] bg-base-200/30">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Terms of Service</h1>
        <div className="text-base-content/70 space-y-4">
          <p>By using nextlib, you agree to the following terms and conditions.</p>
          <h2 className="text-xl font-semibold text-base-content mt-6">Use of Service</h2>
          <p>nextlib provides a digital book borrowing platform for personal, non-commercial use.</p>
          <h2 className="text-xl font-semibold text-base-content mt-6">User Accounts</h2>
          <p>You are responsible for maintaining the confidentiality of your account credentials.</p>
          <h2 className="text-xl font-semibold text-base-content mt-6">Limitation of Liability</h2>
          <p>nextlib is provided as-is without any warranty. We are not liable for any damages arising from its use.</p>
        </div>
      </div>
    </div>
  );
}
