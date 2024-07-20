import { Metadata } from "next";
import { RegistrationComponent } from "./_components/registration-component";
import { RegistrationNavbar } from "./_components/registration-navbar";

export const metadata: Metadata = {
  title: "Pendaftaran Bunda Les",
  description: "Daftar sekarang di Bunda Les",
};


export default function RegistrationPage() {
  return (
    <div>
      <RegistrationNavbar />
      <RegistrationComponent />
    </div>
  );
}
