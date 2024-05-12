import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavLink from "./components/NavLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	manifest: "/manifest.json",
	title: "KMM-Hub",
	description: "Einfacher Zugriff auf Stundenplan und andere relevante Daten.",
};

export const viewport: Viewport = {
	themeColor: "#333333",
};

export default function RootLayout({children, }: Readonly<{children: React.ReactNode;}>) {


	return (
		<html lang="de">
			<body className={inter.className}>
				

				<main className="h-screen">
					<div className="h-[87svh] overflow-y-scroll">
                    			{children}

					</div>

					<nav className="fixed z-10 bottom-0 left-0 right-0 p-3 pb-5 grid grid-flow-col gap-3 bg-neutral-800 rounded-t-xl shadow-nav">
						<NavLink pathString={"/"} iconString={"timetable"} />
						<NavLink pathString={"/semesterdaten"} iconString={"calendar"} />
						<NavLink pathString={"/exams"} iconString={"exams"} />

					</nav>
				</main>
				
			</body>
		</html>
	);
}
