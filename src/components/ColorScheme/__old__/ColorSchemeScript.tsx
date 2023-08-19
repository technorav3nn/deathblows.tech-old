import React from "react";
import type { ColorScheme } from "./types";

const LOCAL_STORAGE_KEY = "color-scheme-db-tech";

export interface ColorSchemeScriptProps extends React.ComponentPropsWithoutRef<"script"> {
	defaultColorScheme?: ColorScheme;
}

const getScript = ({ defaultColorScheme }: Pick<ColorSchemeScriptProps, "defaultColorScheme">) => `
  try {
    var colorScheme = window.localStorage.getItem('${LOCAL_STORAGE_KEY}') || '${defaultColorScheme}';
    var computedColorScheme = colorScheme !== 'auto' ? colorScheme : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-color-scheme', computedColorScheme);
  } catch (e) {}
`;

export function ColorSchemeScript({
	defaultColorScheme = "system",
	...others
}: ColorSchemeScriptProps) {
	return (
		<script
			{...others}
			data-mantine-script
			dangerouslySetInnerHTML={{ __html: getScript({ defaultColorScheme }) }}
		/>
	);
}
