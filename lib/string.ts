import { parsePhoneNumberFromString } from "libphonenumber-js";

export function textFallback(name: string): string {
  if (!name) {
    return "";
  }

  // Split the name by spaces
  const nameParts = name.trim().split(/\s+/);

  // Get the first letter of each part and join them to create the fallback text
  const fallbackText = nameParts
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  return fallbackText;
}

/**
 * Mengonversi nomor telepon menjadi string dalam format internasional tanpa tanda '+'
 * @param inputNumber Nomor telepon dalam format string
 * @returns Nomor telepon dalam format internasional tanpa tanda '+' atau pesan error jika nomor tidak valid
 */
export function convertPhoneNumber(inputNumber: string): string {
  const phoneNumber = parsePhoneNumberFromString(inputNumber); // 'ID' adalah kode negara untuk Indonesia

  if (phoneNumber) {
    return phoneNumber.number; // nomor telepon dalam format internasional tanpa tanda '+'
  } else {
    throw new Error("Invalid phone number");
  }
}
