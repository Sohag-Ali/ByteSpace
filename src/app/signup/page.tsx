"use client";

import React from "react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthVisualSection } from "@/components/auth/AuthVisualSection";
import { RegistrationForm } from "@/components/auth/RegistrationForm";

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
