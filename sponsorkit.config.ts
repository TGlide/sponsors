import { BadgePreset, defineConfig, presets } from "sponsorkit";

const past: BadgePreset = {
	avatar: {
		size: 20,
	},
	boxWidth: 22,
	boxHeight: 22,
	container: {
		sidePadding: 35,
	},
};

export default defineConfig({
	github: {
		login: "tglide",
		type: "user",
	},

	tiers: [
		{
			title: "Past Sponsors",
			monthlyDollars: -1,
			preset: past,
		},
		{
			title: "Backers",
			preset: presets.small,
		},
		{
			title: "Sponsors",
			monthlyDollars: 10,
			preset: {
				avatar: {
					size: 42,
				},
				boxWidth: 52,
				boxHeight: 52,
				container: {
					sidePadding: 30,
				},
			},
		},
		{
			title: "Silver Sponsors",
			monthlyDollars: 60,
			preset: presets.medium,
		},
		{
			title: "Gold Sponsors",
			monthlyDollars: 120,
			preset: presets.large,
		},
		{
			title: "Diamond Sponsors",
			monthlyDollars: 500,
			preset: presets.xl,
		},
	],
});
