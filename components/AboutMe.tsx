import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="bg-base-dark text-content-light py-20 px-5 sm:px-10 lg:px-20 xl:px-30 flex justify-center">
      <div className="max-w-2xl">
        <div className="relative">
          <div className="sm:float-left mr-6 mb-4">
            <Image
              src="/guitar.png"
              alt="About Me"
              className="rounded-full m-auto"
              width={170}
              height={170}
            />
          </div>
          <h2 className="text-4xl font-bold mb-3">Moikka 👋</h2>

          <p className="whitespace-pre-line">
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500. 
            
            When an unknown printer took a galley of type and scrambled it to make a type specimen book. when an unknown printer took a galley 
            
            of type and scrambled it to make a type specimen book. when an unknown printer took a galley of type  and scrambled it to make a type specimen book. when an unknown printer took a galley of type and scrambled.`}
          </p>
        </div>
      </div>
    </div>
  );
}
