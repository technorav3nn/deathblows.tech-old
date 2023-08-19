import React, { useRef, useState, forwardRef } from "react";
import { createPortal } from "react-dom";
import { useIsomorphicEffect } from "@mantine/hooks";

export interface PortalProps extends React.ComponentPropsWithoutRef<"div"> {
	/** Portal children, for example, custom modal or popover */
	children: React.ReactNode;

	/** Element inside which portal should be created, by default a new div element is created and appended to the `document.body` */
	target?: HTMLElement | string;
}

const defaultProps: Partial<PortalProps> = {};

export const Portal = forwardRef<HTMLDivElement, PortalProps>((props, ref) => {
	const { children, target, className, ...others } = props;

	const [mounted, setMounted] = useState(false);
	const nodeRef = useRef<HTMLElement | null>(null);

	useIsomorphicEffect(() => {
		setMounted(true);
		nodeRef.current = !target
			? document.createElement("div")
			: typeof target === "string"
			? document.querySelector(target)
			: target;

		if (!target && nodeRef.current) {
			document.body.appendChild(nodeRef.current);
		}

		return () => {
			if (!target && nodeRef.current) {
				document.body.removeChild(nodeRef.current);
			}
		};
	}, [target]);

	if (!mounted || !nodeRef.current) {
		return null;
	}

	return createPortal(
		<div className={className} ref={ref} {...others}>
			{children}
		</div>,
		nodeRef.current
	);
});

Portal.displayName = "Portal";
