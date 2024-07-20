import { z } from "zod";

export const RegistrationSchema = z.object({
  parentUsername: z
    .string({
      required_error: "Mohon masukkan nama wali",
    })
    .min(1, {
      message: "Nama wali minimal 1 karakter",
    }),
  childUsername: z
    .string({
      required_error: "Mohon masukkan nama murid",
    })
    .min(1, {
      message: "Nama murid minimal 1 karakter",
    }),
  schoolName: z
    .string({
      required_error: "Mohon masukkan nama sekolah",
    })
    .min(1, {
      message: "Nama sekolah minimal 1 karakter",
    }),
  registrationType: z
    .string({
      required_error: "Mohon pilih jenis pendaftaran",
    })
    .min(1, {
      message: "Pilih jenis pendaftaran",
    }),
  phoneNumber: z
    .string({
      required_error: "Mohon masukkan nomor telepon",
    })
    .min(1, {
      message: "Nomor telepon minimal 1 karakter",
    }),
  additionalInfo: z
    .string()
    .max(100, {
      message: "Informasi tambahan maksimal 100 karakter",
    })
    .optional(),
});
