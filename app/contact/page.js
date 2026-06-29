export const metadata = {
  title: 'Contact - nextlib',
  description: 'Get in touch with the nextlib team.',
};

export default function ContactPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-base-200/30">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-primary mb-6">Contact Us</h1>
        <p className="text-lg text-base-content/80 mb-4">
          Have questions or feedback? We&apos;d love to hear from you.
        </p>
        <p className="text-base-content/70">
          Email: saminmahbub19@gmail.com
        </p>
      </div>
    </div>
  );
}
