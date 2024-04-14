import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SubPageHeader from "./components/SubPageHeader";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	manifest: "/manifest.json",
	title: "KMM-Hub",
	description:
		"Einfacher Zugriff auf Stundenplan und andere relevante Daten.",
};

export const viewport: Viewport = {
	themeColor: "#333333",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="de">
			<body className={inter.className}>
				

				<main className="h-screen">
					<div className="h-[87svh] overflow-y-scroll">
                    			{children}

					</div>

					<nav className="fixed z-10 bottom-0 left-0 right-0 p-3 grid grid-flow-col gap-3 bg-stone-700">
						<Link href="/" className="text-xl rounded-lg bg-stone-800 p-3 flex place-content-center">
						<img src="/icons/icon-timetable.svg" className="w-9" />
						</Link>

						<Link href="/semesterdaten" className="text-xl rounded-lg bg-stone-800 p-3 flex place-content-center"> 
						<img src="/icons/icon-calendar.svg" className="w-9" />
						</Link>

						<Link href="/semesterdaten" className="text-xl rounded-lg bg-stone-800 p-3"> 
						<h2 className="text-xl font-bold flex place-content-center" >???</h2>
						</Link>
					</nav>
				</main>
				
			</body>
		</html>
	);
}
