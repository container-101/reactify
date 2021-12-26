export const framerVar = {
	default: {
		animate: {
			scale: [1, 2, 2, 1, 1],
			rotate: [0, 0, 270, 270, 0],
			borderRadius: ["20%", "20%", "50%", "50%", "20%"],
		},
		variants: {
			open: { opacity: 1, x: 0 },
			closed: { opacity: 0, x: "-100%" },
		},
	},
};
