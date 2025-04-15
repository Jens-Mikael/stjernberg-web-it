"use client";
import InputText from "./input/Input";
import Textarea from "./input/Textarea";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonFilled from "./buttons/ButtonFilled";
import { useTranslations } from "next-intl";
import { contactSchema, TContactSchema } from "@/schema";
import { sendEmailAction } from "@/actions/sendEmail";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TContactSchema>({
    resolver: zodResolver(contactSchema),
  });
  async function onSubmit(data: TContactSchema) {
    setIsLoading(true);
    const res = await sendEmailAction(data);
    if (res.data) {
      toast(t("success"));
      reset({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else if (res.error) toast(t("error"));
    setIsLoading(false);
  }

  return (
    <div
      id="contact"
      className="flex justify-center py-20 px-2 sm:px-10 lg:px-20 xl:px-30 "
    >
      <div className="max-w-2xl bg-base-dark text-content-light w-full flex flex-col gap-5 rounded-[20px] p-5 sm:p-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl lg:text-4xl font-bold mb-3">
            {t("headline")}
          </h2>
          <p className=" text-content-gray">{t("subheadline")}</p>
        </div>
        <form
          className="flex flex-col gap-7 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-4">
            <InputText
              label={t("name.label")}
              id="name"
              placeholder={t("name.placeholder")}
              {...register("name")}
              error={errors.name?.message}
            />
            <InputText
              label={t("email.label")}
              id="email"
              placeholder={t("email.placeholder")}
              {...register("email")}
              error={errors.email?.message}
            />
            <InputText
              label={t("phone.label")}
              id="phone"
              placeholder={t("phone.placeholder")}
              {...register("phone")}
              error={errors.phone?.message}
            />
            <Textarea
              label={t("message.label")}
              id="message"
              placeholder={t("message.placeholder")}
              {...register("message")}
              error={errors.message?.message}
            />
          </div>
          <ButtonFilled type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                {t("loading")}
              </>
            ) : (
              t("submit")
            )}
          </ButtonFilled>
        </form>
      </div>
    </div>
  );
}
