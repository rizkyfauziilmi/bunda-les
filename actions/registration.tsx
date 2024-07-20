"use server";
import { transport } from "@/lib/nodemailer";
import { convertPhoneNumber } from "@/lib/string";
import { RegistrationSchema } from "@/schemas/registration";
import { z } from "zod";

const htmlTemplate = (values: z.infer<typeof RegistrationSchema>) => {
  return `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Konfirmasi Pendaftaran Baru</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 10px 0;
        }
        .header h1 {
            margin: 0;
            color: #4CAF50;
        }
        .content {
            margin: 20px 0;
        }
        .content p {
            margin: 10px 0;
        }
        .footer {
            text-align: center;
            padding: 10px 0;
            color: #777;
        }
        a {
            color: #4CAF50;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Pendaftaran Baru</h1>
        </div>
        <div class="content">
            <p>Halo Admin,</p>
            <p>Kami menerima pendaftaran baru dengan rincian sebagai berikut:</p>
            <p>Nama Orang Tua: <strong>${values.parentUsername}</strong></p>
            <p>Nama Anak: <strong>${values.childUsername}</strong></p>
            <p>Nama Sekolah: <strong>${values.schoolName}</strong></p>
            <p>Jenis Pendaftaran: <strong>${
              values.registrationType
            }</strong></p>
            <p>Nomor Telepon: 
                <a href='https://wa.me/${convertPhoneNumber(
                  values.phoneNumber
                )}'>
                    <strong>${values.phoneNumber}</strong>
                </a>
            </p>
            <p>Informasi Tambahan: <strong>${
              values.additionalInfo ? values.additionalInfo : "-"
            }</strong></p>
            <p>Silakan proses pendaftaran ini sesuai dengan prosedur yang berlaku. Terima kasih.</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 Program Kami. Hak cipta dilindungi undang-undang.</p>
        </div>
    </div>
</body>
</html>
`;
};

export const submitRegistration = async (
  values: z.infer<typeof RegistrationSchema>
) => {
  // validate the values
  const isValid = RegistrationSchema.safeParse(values);

  if (!isValid.success) {
    return { error: "Form tidak valid" };
  }

  try {
    // send the registration to email
    await transport.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: [
        "rizkyfauziilmi@gmail.com",
        "dewinopiani2@gmail.com",
        "luk130271@gmail.com",
      ],
      subject: "Pendaftaran Bunda Les",
      html: htmlTemplate(values),
    });

    return { message: "Pendaftaran Terkirim" };
  } catch (error) {
    return { error: "Gagal mengirim email" };
  }
};
