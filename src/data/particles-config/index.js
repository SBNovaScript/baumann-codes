export const PARTICLES_CONFIG = {
	particles: {
		number: {
			value: 80
		},
		color: {
			value: 'random'
		},
		shape: {
			type: 'edge'
		},
		size: {
			value: 10,
			random: true,
			anim: {
				enable: true,
				speed: 5,
				size_min: 0.1
			}
		},
		opacity: {
			random: true,
			anim: {
				enable: true,
				speed: 0.1,
				opacity_min: 0.1
			}
		},
		line_linked: {
			enabled: true,
			distance: 200,
			color: '14A5C8',
			opacity: 0.3
		},
		move: {
			enable: true,
			speed: 1,
			out_mode: 'bounce',
			attract: {
				enable: true
			}
		}
	},
	interactivity: {
		detect_on: 'canvas',
		events: {
			onhover: {
				enable: true,
				mode: 'grab'
			},
			onclick: {
				enable: true,
				mode: 'repulse'
			},
			resize: true
		},
		modes: {
			repulse: {
				distance: 300,
				duration: 0.2
			},
			grab: {
				distance: 200
			}
		}
	}
};
