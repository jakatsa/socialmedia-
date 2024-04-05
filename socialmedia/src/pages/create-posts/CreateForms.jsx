import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export const CreateForms = () => {
  const schema = yup.object().shape({
    title: yup.string().required("Add Title"),
    description: yup.string().required("Add Description"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onCreatePost = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <input placeholder="Title" {...register("title")} />
      <p>{errors.title?.message}</p>
      <textarea placeholder="description" {...register("description")} />
      <p>{errors.description?.message}</p>
      <input type="submit" />
    </form>
  );
};
