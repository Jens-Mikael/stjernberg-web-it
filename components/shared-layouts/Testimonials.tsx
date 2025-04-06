import Image from "next/image";
import QuoteIcon from "../svg/QuoteIcon";

export default function Testimonials() {
  return (
    <div className="bg-base-dark px-5 sm:px-10 lg:px-20 xl:px-30 py-20 flex justify-center">
      <div className="max-w-[1800px] items-center  flex flex-col gap-10">
        <h2 className="text-4xl font-bold text-content-gray text-center">
          Mitä asiakkaat sanovat
        </h2>
        <div className="grid gap-5 lg:gap-10 w-full md:grid-cols-2">
          {[
            {
              name: "John Doe",
              company: "One Point Code",
              image: "/customers/harri.png",
              description:
                "“An exceptional freelancer! Jens is extremely skilled and quick at coding, with a remarkable ability to learn and adapt. He consistently provides valuable suggestions that have greatly benefited our projects.”",
            },
            {
              name: "John Doe",
              company: "One Point Code",
              image: "/customers/harri.png",
              description:
                "“An exceptional freelancer! Jens is extremely skilled and quick at coding, with a remarkable ability to learn and adapt. He consistently provides valuable suggestions that have greatly benefited our projects.”",
            },
            {
              name: "John Doe",
              company: "One Point Code",
              image: "/customers/harri.png",
              description:
                "“An exceptional freelancer! Jens is extremely skilled and quick at coding, with a remarkable ability to learn and adapt. He consistently provides valuable suggestions that have greatly benefited our projects.”",
            },
            {
              name: "John Doe",
              company: "One Point Code",
              image: "/customers/harri.png",
              description:
                "“An exceptional freelancer! Jens is extremely skilled and quick at coding, with a remarkable ability to learn and adapt. He consistently provides valuable suggestions that have greatly benefited our projects.”",
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 p-5 md:p-8 bg-base-light rounded-[20px]"
            >
              <QuoteIcon className="w-10 h-10" />
              <p className="text-content-dark">{testimonial.description}</p>
              <div className="w-full border-b border-gray-200" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xl font-bold text-content-dark/80">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400">{testimonial.company}</p>
                </div>
                <Image
                  height={50}
                  width={50}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
