import ButtonFilled from "@/components/buttons/ButtonFilled";

const instructions = [
  {
    title: "Kerro liiketoiminnasta",
    description:
      "Kerro meille yrityksesi liiketoiminnasta, palveluista ja sen tavoitteista, jotta saisimme mahdollisen hyvän käsitteen,",
  },
  {
    title: "Kerro liiketoiminnasta",
    description:
      "Kerro meille yrityksesi liiketoiminnasta, palveluista ja sen tavoitteista, jotta saisimme mahdollisen hyvän käsitteen,",
  },
  {
    title: "Kerro liiketoiminnasta",
    description:
      "Kerro meille yrityksesi liiketoiminnasta, palveluista ja sen tavoitteista, jotta saisimme mahdollisen hyvän käsitteen, Kerro meille yrityksesi liiketoiminnasta, palveluista ja sen tavoitteista, jotta saisimme mahdollisen hyvän käsitteen",
  },
];

export default function WebPagesHowItWorks() {
  return (
    <div className="bg-base-light px-5 sm:px-10 lg:px-20 xl:px-30 py-20 flex justify-center">
      <div className="max-w-[1800px] items-center flex flex-col gap-14">
        <h2 className="text-4xl font-bold text-content-dark text-center">
          Kerro liiketoimintasi ja tavoitteet, me hoidamme loput.
        </h2>
        <div className="flex w-full justify-between gap-5 lg:flex-row flex-col items-center lg:items-start">
          {instructions.map((instruction, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 items-center text-center max-w-sm w-full"
            >
              <div className="rounded-full bg-main text-content-light w-10 h-10 flex items-center justify-center">
                <p className="text-xl font-bold text-content-light">{i + 1}</p>
              </div>
              <h3 className="text-2xl font-bold text-content-dark">
                {instruction.title}
              </h3>
              <p className="text-gray-700">{instruction.description}</p>
            </div>
          ))}
        </div>
        <ButtonFilled>Ota yhteyttä</ButtonFilled>
      </div>
    </div>
  );
}
