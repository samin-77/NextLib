export default function PrivacyPage() {
  return (
    <div className="min-h-[80vh] bg-base-200/30">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Privacy Policy</h1>
        <div className="text-base-content/70 space-y-4">
          <p>Your privacy is important to us. This policy outlines how we collect and use your information.</p>
          <h2 className="text-xl font-semibold text-base-content mt-6">Information We Collect</h2>
          <p>We collect information you provide when creating an account, such as your name and email address.</p>
          <h2 className="text-xl font-semibold text-base-content mt-6">How We Use Your Information</h2>
          <p>We use your information solely to provide and improve our book borrowing services.</p>
          <h2 className="text-xl font-semibold text-base-content mt-6">Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information.</p>
        </div>
      </div>
    </div>
  );
}
