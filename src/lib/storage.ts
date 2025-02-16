import { supabase } from "./supabase";

export async function uploadPaymentScreenshot(file: File) {
  const { data, error } = await supabase.storage
    .from("payment-screenshots")
    .upload(`screenshots/${file.name}`, file);

  if (error) throw error;

  return data.path; // Returns the file path for future use
}
