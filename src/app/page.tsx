import Image from "next/image";
import { css, cx } from "~/styled-system/css";
import { HStack, VStack, Wrap, styled } from "~/styled-system/jsx";
import profilePic from "../../public/profile-pic.jpeg";
import { IconBrandDiscord, IconBrandGithub, IconBrandTwitter } from "@tabler/icons-react";
import { IconButton } from "~/components/UI/IconButton";

export default function Home() {
	return (
		<>
			<Wrap gap="6" alignItems="center">
				<Image
					src={profilePic}
					alt="Death_Blows' Profile picture, a very cute serval laying down."
					className={css({
						borderRadius: "full",
						objectFit: "cover",
						objectPosition: "left",
						width: 125,
						height: 125,
					})}
					priority
					loading="eager"
				/>
				<section>
					<h1 className={cx(css({ fontSize: "5xl", fontWeight: "bold" }))}>
						death_blows
					</h1>
					<VStack alignItems="flex-start" gap={{ base: 0, smDown: 0 }} mt="1">
						<h5
							className={css({
								color: "fg.subtle",
							})}
						>
							full stack developer and software engineer.
						</h5>
						<h5
							className={css({
								fontSize: "sm",
								color: "fg.subtle",
							})}
						>
							15 y.o. - he/him.
						</h5>
					</VStack>
				</section>
			</Wrap>
			<HStack gap="2" mt="10">
				<IconButton aria-label="Github Link" variant="secondary">
					<a
						href="https://github.com/technorav3nn"
						target="_blank"
						rel="noopener noreferrer"
					>
						<IconBrandGithub size={20} />
					</a>
				</IconButton>
				<IconButton aria-label="Discord Link" variant="secondary">
					<a
						href="
					https://discord.com/users/304043360963002370"
						target="_blank"
						rel="noopener noreferrer"
					>
						<IconBrandDiscord size={20} />
					</a>
				</IconButton>
				<IconButton aria-label="Twitter Link" variant="secondary" asChild>
					<a href="https://google.com" target="_blank" rel="noopener noreferrer">
						<IconBrandTwitter size={20} />
					</a>
				</IconButton>
			</HStack>
			<styled.div mt="4">this website is a work in progress, srry lmfao.</styled.div>
		</>
	);
}
