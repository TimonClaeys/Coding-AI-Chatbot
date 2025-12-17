"use client";
import { useSession, signOut } from "next-auth/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  if (status === "loading" || status === "unauthenticated") {
    return <div>Loading...</div>;
  }

  const user = session?.user as {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-gray-50 to-gray-200">
      <Card className="w-full max-w-md shadow-xl border-0">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold mb-2">Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-4">
            {user?.image && (
              <Image
                src={user.image}
                alt={user.name || user.email || "User"}
                width={96}
                height={96}
                className="w-24 h-24 rounded-full border"
                priority
              />
            )}
            <div className="text-lg font-semibold">{user?.name || "No name"}</div>
            <div className="text-gray-500">{user?.email || "No email"}</div>
            <Button className="w-full mt-6" variant="outline" onClick={() => signOut()}>
              Sign out
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
