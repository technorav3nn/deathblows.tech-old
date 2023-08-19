"use client";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { css, cva } from "~/styled-system/css";

const toggleIcon = cva({
	base: {
		width: "rem(24px)",
		height: "rem(24px)",
	},
	variants: {
		icon: {
			sun: {
				display: {
					_dark: "block",
					_light: "none",
				},
			},
			moon: {
				display: {
					_dark: "none",
					_light: "block",
				},
			},
		},
	},
});

export function ColorSchemeToggle() {
	const { setTheme, resolvedTheme } = useTheme();

	return (
		<>
			<div
				onClick={() => {
					setTheme(resolvedTheme === "dark" ? "light" : "dark");
				}}
				className={css({
					color: {
						_light: "fg.emphasized",
						_dark: "white",
					},
					w: "50px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					cursor: "pointer",
				})}
				role="button"
			>
				<IconSun className={toggleIcon({ icon: "sun" })} />
				<IconMoon
					className={toggleIcon({
						icon: "moon",
					})}
				/>
			</div>
		</>
	);
}
