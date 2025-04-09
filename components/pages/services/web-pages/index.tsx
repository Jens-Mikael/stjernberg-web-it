import WebPagesFeatures from "./Features.web-pages";
import WebPagesFormula from "./Formula.web-pages";
import WebPagesHowItWorks from "./HowItWorks.web-pages";
import HowItWorks from "./HowItWorks.web-pages";
import WebPagesWhyImportant from "./WhyImportant.web-pages";

export default function WebPagesService() {
  return (
    <div>
      <WebPagesHowItWorks />
      <WebPagesWhyImportant />
      <WebPagesFeatures />
      <WebPagesFormula />
    </div>
  );
}
