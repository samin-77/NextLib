const WhyChooseUs = () => {
  const features = [
    {
      icon: '📚',
      title: 'Vast Collection',
      description: 'Access thousands of books across multiple categories',
    },
    {
      icon: '🔄',
      title: 'Easy Returns',
      description: 'Simple and hassle-free book return process',
    },
    {
      icon: '💻',
      title: 'Digital Access',
      description: 'Read anywhere, anytime on any device',
    },
    {
      icon: '🎯',
      title: 'Personalized',
      description: 'Get recommendations based on your reading history',
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Why Choose NextLib?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="card-body text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="card-title justify-center text-primary">
                  {feature.title}
                </h3>
                <p className="text-base-content/80">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
