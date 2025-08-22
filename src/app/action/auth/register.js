"use server";

import { dbConnect } from "@/lib/dbConnect";


export const registerUser = async (payload) => {
  try {
    const result = dbConnect("user-collection").insertOne(payload);
    return result;
  } catch (error) {
    return null;
  }
};
