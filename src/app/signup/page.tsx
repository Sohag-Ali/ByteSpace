import type { Metadata } from "next";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthVisualSection } from "@/components/auth/AuthVisualSection";
import { RegistrationForm } from "@/components/auth/RegistrationForm";

export const metadata: Metadata = {
  title: "Join Us",
};

export default function SignupPage() {
  return (
    <AuthLayout>
      <AuthVisualSection
        title="Sign up and come in"
        description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      />
      <RegistrationForm />
    </AuthLayout>
  );
}
