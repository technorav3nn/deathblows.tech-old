import { Tooltip as TooltipPrimitive } from "react-tooltip";
import { tooltip } from "./Tooltip.recipe";
import {
	HoverCard,
	HoverCardArrow,
	HoverCardArrowTip,
	HoverCardContent,
	HoverCardPositioner,
	HoverCardTrigger,
	Portal,
} from "@ark-ui/react";

interface TooltipProps {
	content: React.ReactNode;
	trigger: React.ReactNode;
	id: string;
}

export function Tooltip({ content, trigger, id }: TooltipProps) {
	return (
		<>
			<HoverCard positioning={{ placement: "top", gutter: 20 }} openDelay={0} closeDelay={0}>
				<HoverCardTrigger>{trigger}</HoverCardTrigger>
				<Portal>
					<HoverCardPositioner>
						<HoverCardContent className={tooltip({})}>{content}</HoverCardContent>
					</HoverCardPositioner>
				</Portal>
			</HoverCard>
		</>
	);
}
