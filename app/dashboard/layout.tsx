"use client";

import { useAuth } from "@/libs/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.replace("/");
    }
      
    
  }, [loading, session, router]);

  if (loading) return null; // or spinner
  if (!session) return null;

  return <>{children}</>;
}
