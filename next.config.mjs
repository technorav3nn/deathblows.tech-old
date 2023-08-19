/** @type {import('next').NextConfig} */
const nextConfig = {
	modularizeImports: {
		"@tabler/icons-react": {
			transform: "@tabler/icons-react/dist/esm/icons/{{member}}",
		},
	},
};

export default nextConfig;
