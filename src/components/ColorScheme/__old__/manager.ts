import type { ColorScheme, ColorSchemeManager } from "./types";

export interface LocalStorageColorSchemeManagerOptions {
	/** Local storage key used to retrieve value with `localStorage.getItem(key)`, `mantine-color-scheme` by default */
	key?: string;
}

export function isMantineColorScheme(value: unknown): value is ColorScheme {
	return value === "auto" || value === "dark" || value === "light";
}

export function localStorageColorSchemeManager({
	key = "mantine-color-scheme",
}: LocalStorageColorSchemeManagerOptions = {}): ColorSchemeManager {
	let handleStorageEvent: (event: StorageEvent) => void;

	return {
		get: (defaultValue) => {
			if (typeof window === "undefined") {
				return defaultValue;
			}

			try {
				return (window.localStorage.getItem(key) as ColorScheme) || defaultValue;
			} catch {
				return defaultValue;
			}
		},

		set: (value) => {
			try {
				window.localStorage.setItem(key, value);
			} catch (error) {
				// eslint-disable-next-line no-console
				console.warn(
					"[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
					error
				);
			}
		},

		subscribe: (onUpdate) => {
			handleStorageEvent = (event) => {
				if (event.storageArea === window.localStorage && event.key === key) {
					isMantineColorScheme(event.newValue) && onUpdate(event.newValue as ColorScheme);
				}
			};

			window.addEventListener("storage", handleStorageEvent);
		},

		unsubscribe: () => {
			window.removeEventListener("storage", handleStorageEvent);
		},

		clear: () => {
			window.localStorage.removeItem(key);
		},
	};
}
