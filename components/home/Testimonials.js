const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Student',
      content: 'NextLib has completely transformed my reading experience. The digital library is amazing!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Software Developer',
      content: 'Great collection of tech books! I found exactly what I needed for my projects.',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      role: 'Book Lover',
      content: 'The user interface is so intuitive and the book recommendations are spot on!',
      rating: 5,
    },
    {
      name: 'Robert Wilson',
      role: 'Researcher',
      content: 'I love the search functionality and the variety of books available. Highly recommended!',
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-yellow-400 ${i < rating ? 'fill-current' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-base-200/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          What Our Readers Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="card-body">
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-base-content/70 text-center mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="text-center">
                  <h4 className="font-semibold text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-base-content/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
