export const Moves: import('../sim/dex-moves').MoveDataTable = {

//this is quite literally gonna be called phys hidden power, cause no one has come up with a good name yet, and its a very simple name
//the moves are just copy and pasted, im just hoping that the code for normal hp will work for phys hp, but i may need to look into that

  physhiddenpower: {
		num: 1001,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Past",
		name: "Phys Hidden Power",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onModifyType(move, pokemon) {
			move.type = pokemon.hpType || 'Dark';
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Clever",
	},
	physhiddenpowerbug: {
		num: 1001,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Phys Hidden Power",
		isNonstandard: "Past",
		name: "Phys Hidden Power Bug",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Clever",
	},
	hiddenpowerdark: {
		num: 1001,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Phys Hidden Power",
		isNonstandard: "Past",
		name: "Phys Hidden Power Dark",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	physhiddenpowerdragon: {
		num: 1001,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Phys Hidden Power",
		isNonstandard: "Past",
		name: "Phys Hidden Power Dragon",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Clever",
	},
	physhiddenpowerelectric: {
		num: 1001,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Phys Hidden Power",
		isNonstandard: "Past",
		name: "Phys Hidden Power Electric",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Clever",
	},
	physhiddenpowerfighting: {
		num: 1001,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Phys Hidden Power",
		isNonstandard: "Past",
		name: "Phys Hidden Power Fighting",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Clever",
	},
	physhiddenpowerfire: {
		num: 1001,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Phys Hidden Power",
		isNonstandard: "Past",
		name: "Phys Hidden Power Fire",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Clever",
	},
	physhiddenpowerflying: {
		num: 1001,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Phys Hidden Power",
		isNonstandard: "Past",
		name: "Phys Hidden Power Flying",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Flying",
		contestType: "Clever",
	},
	hiddenpowerghost: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Phys Hidden Power",
		isNonstandard: "Past",
		name: "Phys Hidden Power Ghost",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
	},
	physhiddenpowergrass: {
		num: 1001,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Phys Hidden Power",
		isNonstandard: "Past",
		name: "Phys Hidden Power Grass",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Clever",
	},
	physhiddenpowerground: {
		num: 1001,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Phys Hidden Power",
		isNonstandard: "Past",
		name: "Phys Hidden Power Ground",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Clever",
	},
	physhiddenpowerice: {
		num: 1001,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Phys Hidden Power",
		isNonstandard: "Past",
		name: "Phys Hidden Power Ice",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Clever",
	},
	physhiddenpowerpoison: {
		num: 1001,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Phys Hidden Power",
		isNonstandard: "Past",
		name: "Phys Hidden Power Poison",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Clever",
	},
	physhiddenpowerpsychic: {
		num: 1001,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Phys Hidden Power",
		isNonstandard: "Past",
		name: "Phys Hidden Power Psychic",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	physhiddenpowerrock: {
		num: 1001,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Phys Hidden Power",
		isNonstandard: "Past",
		name: "Phys Hidden Power Rock",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Clever",
	},
	physhiddenpowersteel: {
		num: 1001,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Phys Hidden Power",
		isNonstandard: "Past",
		name: "Phys Hidden Power Steel",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Clever",
	},
	physhiddenpowerwater: {
		num: 1001,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Phys Hidden Power",
		isNonstandard: "Past",
		name: "Phys Hidden Power Water",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Clever",
	},


}
