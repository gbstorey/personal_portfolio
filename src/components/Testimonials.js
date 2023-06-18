import { testimonials } from "../data";

export default function Testimonials() {
    return (
        <section id="testimonials" className="scroll-mt-16 text-center md:text-left">
          <div className="text-gray-900 bg-gray-50 body-font scroll-mt-16 px-10
        text-lg md:text-xl sm:text-2xl pb-10">
            <h1 className="sm:text-4xl text-3xl font-bold mb-8">
              Recommendations
            </h1>
            <div className="flex flex-wrap">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name.toString()} className="md:w-1/2 p-1 w-full text-left">
                  <div className="h-full p-8 rounded border border-gray-900">
                    <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                    <div className="inline-flex items-center">
                      <img
                        alt="testimonial"
                        src={testimonial.image}
                        className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span className="flex-grow flex flex-col pl-4">
                        <span>
                          {testimonial.name}
                        </span>
                        <span className="text-gray-500 text-sm uppercase">
                          {testimonial.company}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}