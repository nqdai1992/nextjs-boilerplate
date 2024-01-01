"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
  termchecking: yup.bool().oneOf([true]),
});

type FormData = yup.InferType<typeof schema>;

export default function SimpleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Simple form</h2>

        <form className="w-full max-w-xs" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className={clsx("input", "input-bordered", "w-full", "max-w-xs", {
                "input-error": Boolean(errors.email?.message),
              })}
              type="text"
              {...register("email")}
            />
            <p className="text-error prose-sm">{errors.email?.message}</p>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              className={clsx("input", "input-bordered", "w-full", "max-w-xs", {
                "input-error": Boolean(errors.email?.message),
              })}
              type="password"
              {...register("password")}
            />
            <p className="text-error prose-sm">{errors.password?.message}</p>
          </div>

          <label className="cursor-pointer flex items-center gap-x-3">
            <input
              type="checkbox"
              className={clsx("checkbox", {
                "checkbox-error": Boolean(errors.termchecking?.message),
              })}
              {...register("termchecking")}
            />
            <span className="label-text">Agree with terms</span>
          </label>

          <button
            type="submit"
            className="btn btn-primary w-full max-w-xs mt-10"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
