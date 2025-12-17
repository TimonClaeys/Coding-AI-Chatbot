"use client";
import { ComponentExample } from "@/components/component-example";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
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

	return (
		<div>
			<div className="flex justify-end p-4">
				<span className="mr-4">{session?.user?.name || session?.user?.email}</span>
				<button
					className="px-4 py-2 bg-gray-200 rounded"
					onClick={() => signOut()}
				>
					Sign out
				</button>
			</div>
			<ComponentExample />
		</div>
	);
}