/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "gizmoshop.liara.run",
				port: "",
			},
		],
	},
};

module.exports = nextConfig;
