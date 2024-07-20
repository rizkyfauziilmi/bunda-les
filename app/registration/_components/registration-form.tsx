"use client";

import { RegistrationSchema } from "@/schemas/registration";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PhoneInput, getPhoneData } from "@/components/phone-input/phone";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { ClipboardPen, LoaderCircle } from "lucide-react";
import { useTransition } from "react";
import { submitRegistration } from "@/actions/registration";

export const RegistrationForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegistrationSchema>>({
    resolver: zodResolver(RegistrationSchema),
  });

  function onSubmit(values: z.infer<typeof RegistrationSchema>) {
    const phoneData = getPhoneData(values.phoneNumber);

    if (!phoneData.isValid) {
      form.setError("phoneNumber", {
        type: "manual",
        message: "Nomor telepon tidak valid",
      });
      return;
    }

    startTransition(() => {
      submitRegistration(values)
        .then((response) => {
          if (response.error) {
            toast(response.error, {
              icon: "⚠️",
            });
          }

          if (response.message) {
            toast(response.message, {
              icon: "🎉",
              description: "Anda akan dihubungi oleh pengajar kami",
            });
          }
        })
        .catch(() => {
          toast("Terjadi kesalahan", {
            icon: "❌",
          });
        });
    });
  }

  return (
    <div className="w-full">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
        Daftar langsung di sini!
      </h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="parentUsername"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Wali</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>Contoh: Ibu Budi</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="childUsername"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Murid</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>Contoh: Budi Budianto</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="schoolName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Sekolah</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Contoh: SDN 1 Bandung, SMPN 1 Jakarta
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="registrationType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tingkatan Sekolah</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih tingkatan sekolah anak anda" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="SD">SD</SelectItem>
                    <SelectItem value="SMP">SMP</SelectItem>
                    <SelectItem value="SMA">SMA</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nomor Telepon</FormLabel>
                <FormControl>
                  <PhoneInput {...field} />
                </FormControl>
                <FormDescription>
                  Masukan nomor telepon yang valid dengan kode negara
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="additionalInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pesan Tambahan</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormDescription>
                  Informasi tambahan yang ingin kamu sampaikan
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? (
              <LoaderCircle className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <ClipboardPen className="w-4 h-4 mr-2" />
            )}
            {isPending ? "Mengirim..." : "Daftar"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
