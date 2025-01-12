

import Slider from "react-slick";

function ZeptoSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For tablet devices
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // For small desktop screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            {/* Left Section */}
            <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:flex-row justify-between px-6 py-6">
              <div className="bg-[#4B1868] text-white font-bold text-lg px-6 py-3 rounded-lg">
                zepto
              </div>
              <div className="mt-4 text-center md:text-left">
                <p className="font-medium text-gray-700">Sanskruti Verma</p>
                <p className="text-sm text-gray-500">Visual Design Manager</p>
              </div>
            </div>

            {/* Right Section */}
            <div className="text-gray-700 text-center md:text-left bg-white p-6 shadow-lg rounded-lg max-w-full md:max-w-4xl mx-auto">
              <p>
                Zepto has partnered with us to enhance our brand’s visual identity
                through expert graphic design. This collaboration drives revenue
                growth by creating high-quality, engaging designs that resonate with
                our audience. Together, we’re scaling our brand and staying ahead in
                a competitive market.
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-blue-600 hover:underline flex items-center"
              >
                View Portfolio <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default ZeptoSlider;
