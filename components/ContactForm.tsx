"use client";
import { z } from "zod";
import InputText from "./input/Input";
import Textarea from "./input/Textarea";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonFilled from "./buttons/ButtonFilled";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email({ message: "Email is invalid" }),
  phone: z
    .string()
    .min(1, "Phone is required")
    .regex(/^\+\d{5,15}$/, "Phone must start with + and contain 5-15 numbers"),
  message: z.string().min(1, "Message is required"),
});

type TContactSchema = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<TContactSchema>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: TContactSchema) => {
    console.log(data);
  };

  return (
    <div id="contact" className="flex justify-center py-20 px-2 sm:px-10 lg:px-20 xl:px-30 ">
      <div className="max-w-2xl bg-base-dark text-content-light w-full flex flex-col gap-5 rounded-[20px] p-5 sm:p-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl lg:text-4xl font-bold mb-3">
            Pyydä tarjous projektiisi!
          </h2>
          <p className=" text-content-gray">
            Ota yhteyttä meihin ja pyydä tarjous IT-projektiisi, jotta
            pääsisimme mahdollisimman nopeasti aloittamaan!
          </p>
        </div>
        <form
          className="flex flex-col gap-7 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-4">
            <InputText
              label="Nimesi"
              id="name"
              placeholder="Matti Meikäläinen"
              {...register("name")}
              error={errors.name?.message}
            />
            <InputText
              label="Sähköpostiosoite"
              id="email"
              placeholder="matti@meikalainen.fi"
              {...register("email")}
              error={errors.email?.message}
            />
            <InputText
              label="Puhelinnumero"
              id="phone"
              placeholder="+358401234567"
              {...register("phone")}
              error={errors.phone?.message}
            />
            <Textarea
              label="Kerro tavoitteistasi"
              id="message"
              placeholder="Haluan parantaa kotisivujani..."
              {...register("message")}
              error={errors.message?.message}
            />
          </div>
          <ButtonFilled type="submit">Lähetä</ButtonFilled>
        </form>
      </div>
    </div>
  );
}
