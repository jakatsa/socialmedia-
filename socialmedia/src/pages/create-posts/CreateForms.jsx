import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { auth } from "../../config/firebase";
export const CreateForms = () => {
  const [user] = useAuthState(auth);
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
  const postsRef = collection(db, "posts");
  const onCreatePost = async (data) => {
    await addDoc(postsRef, {
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    });
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
