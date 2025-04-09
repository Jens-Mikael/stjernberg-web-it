export default function WebPagesFormula() {
  return (
    <div className="bg-base-dark px-5 sm:px-10 lg:px-20 xl:px-30 py-20 flex justify-center">
      <div className="max-w-[1800px] items-center flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl font-bold text-content-gray text-center ">
            Sivustot maksavat itsensä takaisin.
          </h2>
          <p className="text-gray-100 text-xl max-w-3xl text-center">
            Verkkosivut ovat investointi yritykselle, joka mahdollistaa sujuvan
            liiketoiminnan ja asiakashankinnanprosessin.
          </p>
        </div>
        <div className="flex md:gap-5 gap-2 items-center md:flex-row flex-col">
          <Card text="Palveluksen hinta" />
          <p className="text-content-light text-3xl font-bold">x</p>
          <Card text="Yhteydenototo" />
          <p className="text-content-light text-3xl font-bold">=</p>

          <Card text="Verrkosijuven arvo" />
        </div>
       
      </div>
    </div>
  );
}

const Card = ({ text }: { text: string }) => (
  <div className="rounded-lg border border-gray-400 bg-base-light px-5 py-3">
    <p>{text}</p>
  </div>
);
