'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
      content: 'Excellent science collection. The categorization makes finding specific topics easy.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 px-4 bg-base-200/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          What Our Readers Say
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="card bg-base-100 shadow-xl h-full">
                <div className="card-body">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="text-center text-base-content/80 mb-4 italic">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
