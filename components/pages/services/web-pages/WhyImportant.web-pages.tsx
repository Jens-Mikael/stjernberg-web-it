const reasons = [
  {
    title: "61 %",
    description:
      "vierailijoista poistuu, elleivät löydä etsimäänsä 5 sekunnissa.",
  },
  {
    title: "61 %",
    description:
      "vierailijoista poistuu, elleivät löydä etsimäänsä 5 sekunnissa.",
  },
  {
    title: "61 %",
    description:
      "vierailijoista poistuu, elleivät löydä etsimäänsä 5 sekunnissa.",
  },
  {
    title: "61 %",
    description:
      "vierailijoista poistuu, elleivät löydä etsimäänsä 5 sekunnissa.",
  },
];

export default function WebPagesWhyImportant() {
  return (
    <div className="bg-base-dark px-5 sm:px-10 lg:px-20 xl:px-30 py-20 flex justify-center">
      <div className="max-w-[1800px] items-center flex flex-col gap-14">
        <h2 className="text-4xl font-bold text-content-gray text-center">
          Miksi pätevät sivut ovat elintärkeät?
        </h2>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 sm:gap-5 lg:gap-10">
          {reasons.map((reason, i) => (
            <div key={i} className="flex items-center gap-1 sm:gap-3 md:flex-row flex-col md:text-start text-center">
              <h3 className="xl:text-7xl text-5xl font-bold whitespace-nowrap text-content-light">
                {reason.title}
              </h3>
              <p className="text-content-light max-w-xs text-lg lg:text-xl">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
