"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/profile");
    }
  }, [status, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-gray-50 to-gray-200">
      <Card className="w-full max-w-md shadow-xl border-0">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold mb-2">Sign in to Coding AI Chatbot</CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            className="w-full py-6 text-lg font-semibold bg-black hover:bg-gray-900"
            onClick={() => signIn("github")}
          >
            <svg className="inline-block mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297C0 17.617 3.438 22.016 8.205 23.682C8.805 23.797 9.025 23.422 9.025 23.092C9.025 22.797 9.015 22.067 9.01 21.092C5.672 21.797 4.968 19.417 4.968 19.417C4.422 17.997 3.633 17.617 3.633 17.617C2.546 16.797 3.722 16.812 3.722 16.812C4.922 16.902 5.555 18.067 5.555 18.067C6.633 19.997 8.422 19.492 9.105 19.197C9.215 18.417 9.522 17.892 9.865 17.597C7.18 17.297 4.344 16.242 4.344 11.587C4.344 10.297 4.797 9.267 5.555 8.467C5.445 8.167 5.055 6.897 5.664 5.297C5.664 5.297 6.672 4.977 8.998 6.637C9.948 6.367 10.968 6.232 11.988 6.227C13.008 6.232 14.028 6.367 14.98 6.637C17.305 4.977 18.312 5.297 18.312 5.297C18.922 6.897 18.531 8.167 18.422 8.467C19.18 9.267 19.633 10.297 19.633 11.587C19.633 16.257 16.793 17.292 14.102 17.587C14.547 17.967 14.947 18.697 14.947 19.797C14.947 21.397 14.932 22.687 14.932 23.087C14.932 23.422 15.147 23.802 15.757 23.682C20.522 22.016 23.957 17.617 23.957 12.297C23.957 5.67 18.627 0.297 12 0.297Z" fill="white"/>
            </svg>
            Sign in with GitHub
          </Button>
          <Separator className="my-8" />
          <div className="text-center text-gray-500 text-sm">
            By signing in, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
