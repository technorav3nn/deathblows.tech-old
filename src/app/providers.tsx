"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: React.PropsWithChildren) {
	return (
		<ThemeProvider
			attribute="data-color-scheme"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			{children}
		</ThemeProvider>
	);
}
