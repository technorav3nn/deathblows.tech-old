export type ColorScheme = "light" | "dark" | "system";

export interface ColorSchemeManager {
	/** Function to retrieve color scheme value from external storage, for example window.localStorage */
	get(defaultValue: ColorScheme): ColorScheme;

	/** Function to set color scheme value in external storage, for example window.localStorage */
	set(value: ColorScheme): void;

	/** Function to subscribe to color scheme changes triggered by external events */
	subscribe(onUpdate: (colorScheme: ColorScheme) => void): void;

	/** Function to unsubscribe from color scheme changes triggered by external events */
	unsubscribe(): void;

	/** Function to clear value from external storage */
	clear(): void;
}
