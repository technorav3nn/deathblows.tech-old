import { cloneElement, isValidElement, type ReactElement } from "react";
import { css, cx } from "styled-system/css";
import { Button, type ButtonProps } from "./Button";

export type IconButtonProps = ButtonProps & { icon?: ReactElement; "aria-label": string };

export const IconButton = (props: IconButtonProps) => {
	const { icon, children, className, ...rest } = props;
	const element = icon || children;

	return (
		<Button className={cx(css({ px: "0" }), className)} {...rest}>
			{children}
		</Button>
	);
};
