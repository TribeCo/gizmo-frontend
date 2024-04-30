/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "gn02.liara.run",
				port: "",
			},
		],
	},
};

module.exports = nextConfig;
