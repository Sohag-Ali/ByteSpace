"use client";

import React from "react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthVisualSection } from "@/components/auth/AuthVisualSection";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthVisualSection
        title="Sign in with ease"
        description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      />
      <LoginForm />
    </AuthLayout>
  );
}
