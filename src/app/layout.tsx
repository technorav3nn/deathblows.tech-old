import "./globals.css";

import type { Metadata } from "next";
import { Providers } from "./providers";
import { Navbar } from "~/components/Navbar";
import { css, cx } from "~/styled-system/css";
import { inter, karla, openSans } from "~/lib/fonts";
import { Box, Container } from "~/styled-system/jsx";

export const metadata: Metadata = {
	title: "Death_Blows",
	description:
		"This is my website but im not sure what to put here yet. Maybe a open graph image??",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={cx(
				karla.variable,
				openSans.variable,
				css({
					fontFamily: "var(--font-open-sans)",
				})
			)}
		>
			<body>
				<Providers>
					<Box
						h="screen"
						// bgImage="repeating-linear-gradient(to left bottom, rgba(100, 100, 100, 0.2), #000)"
						bg="bg.default"
					>
						<Container px={{ base: "8", lgTo2xl: "96" }} pt="36">
							{children}
						</Container>
					</Box>
					<Navbar />
				</Providers>
			</body>
		</html>
	);
}
