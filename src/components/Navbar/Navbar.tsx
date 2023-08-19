"use client";

import { type Icon } from "@tabler/icons-react";
import { css, cx } from "~/styled-system/css";
import { container } from "~/styled-system/patterns";
import { NAVBAR_ITEMS } from "./Navbar.data";
import { token } from "~/styled-system/tokens";
import { ColorSchemeToggle } from "../ColorScheme/ColorSchemeToggle";
import Link from "next/link";
import { Tooltip } from "../Tooltip";
import { useId } from "react";
import { useTheme } from "next-themes";

interface NavbarLinkProps {
	icon: Icon;
	label: string;
	href: string;
}

interface NavbarItemProps extends React.PropsWithChildren {
	tooltipLabel: string;
}

const nav = css({
	pos: "fixed",
	zIndex: "50",
	w: "full",
	pt: "5",
	pb: "5",
	overflow: "hidden",
	transitionProperty: "transform",
	transitionTimingFunction: "transform",
	transitionDuration: "300",
	bottom: "2",
});

const navItemHolder = css({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	width: "full",
	maxWidth: "300px",
	height: 54,
	mx: "auto",
	px: "1",
	bg: {
		_light: "bg.default",
		_dark: "bg.subtle",
	},
	color: {
		_light: "fg.emphasized",
		_dark: "white",
	},
	// border: {
	// 	_light: `1px solid `,
	// 	_dark: "1px solid rgba(255, 255, 255, 0.11)",
	// },
	_dark: {
		border: "1px solid rgba(255, 255, 255, 0.11)",
	},
	_light: {
		borderWidth: "1px",
		borderColor: token("colors.border.outline"),
		borderStyle: "solid",
	},

	fontSize: "2xl",
	lineHeight: "2xl",
	borderRadius: "xl",
	backdropFilter: "blur(20px) saturate(80%)",
});

export function Navbar() {
	const { resolvedTheme: theme } = useTheme();

	return (
		<nav className={nav}>
			<div className={cx(container())}>
				<div className={navItemHolder}>
					{NAVBAR_ITEMS.map((item) => (
						<NavbarLink key={item.label} {...item} />
					))}
					{/** divider */}
					<div
						className={css({
							w: "3px",
							h: "50%",
							my: 8,
							mx: "-4px",
							bg: "bg.muted",
							rounded: "full",
						})}
					/>

					<NavbarItem tooltipLabel={theme === "dark" ? "Light mode" : "Dark mode"}>
						<ColorSchemeToggle />
					</NavbarItem>
				</div>
			</div>
		</nav>
	);
}

function NavbarLink({ icon: NavItemIcon, label, href }: NavbarLinkProps) {
	const id = useId();

	return (
		<Tooltip
			content={label}
			trigger={
				<Link
					href={href}
					className={css({
						w: "50px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					})}
				>
					<NavItemIcon
						className={css({
							color: {
								_light: "fg.emphasized",
								_dark: "white",
							},
						})}
					/>
				</Link>
			}
			id={id}
		/>
	);
}

function NavbarItem({ children, tooltipLabel }: NavbarItemProps) {
	return <Tooltip content={tooltipLabel} trigger={children} id="" />;
}
