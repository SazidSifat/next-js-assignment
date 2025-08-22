"use server";

import dbConnect from "@/lib/dbConnect";
export const register = async (payload) => {


  const result = dbConnect("user-collection").insertOne(payload);
  return result
};
