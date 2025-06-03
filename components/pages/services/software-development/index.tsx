import SuccessStoriesSoftwareDevelopment from "./SuccessStories.software-development";
import WhatWeOfferSoftwareDevelopment from "./WhatWeOffer.software-development";
import WhyWorkSoftwareDevelopment from "./WhyWork.software-development";

export default function SoftwareDevelopmentService() {
  return (
    <div>
      <WhatWeOfferSoftwareDevelopment />
      <WhyWorkSoftwareDevelopment />
      <SuccessStoriesSoftwareDevelopment />
    </div>
  );
}
