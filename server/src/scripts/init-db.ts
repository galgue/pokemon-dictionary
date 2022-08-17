const pokemons = [
    {
        name: 'bulbasaur',
        id: 1,
        height: 7,
        weight: 69,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        species: {
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
        },
        abilities: [
            {
                name: 'overgrow',
                url: 'https://pokeapi.co/api/v2/ability/65/',
            },
            {
                name: 'chlorophyll',
                url: 'https://pokeapi.co/api/v2/ability/34/',
            },
        ],
        types: [
            { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
            { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
        ],
    },
    {
        name: 'ivysaur',
        id: 2,
        height: 10,
        weight: 130,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
        species: {
            name: 'ivysaur',
            url: 'https://pokeapi.co/api/v2/pokemon-species/2/',
        },
        abilities: [
            {
                name: 'overgrow',
                url: 'https://pokeapi.co/api/v2/ability/65/',
            },
            {
                name: 'chlorophyll',
                url: 'https://pokeapi.co/api/v2/ability/34/',
            },
        ],
        types: [
            { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
            { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
        ],
    },
    {
        name: 'venusaur',
        id: 3,
        height: 20,
        weight: 1000,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
        species: {
            name: 'venusaur',
            url: 'https://pokeapi.co/api/v2/pokemon-species/3/',
        },
        abilities: [
            {
                name: 'overgrow',
                url: 'https://pokeapi.co/api/v2/ability/65/',
            },
            {
                name: 'chlorophyll',
                url: 'https://pokeapi.co/api/v2/ability/34/',
            },
        ],
        types: [
            { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
            { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
        ],
    },
    {
        name: 'charmander',
        id: 4,
        height: 6,
        weight: 85,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        species: {
            name: 'charmander',
            url: 'https://pokeapi.co/api/v2/pokemon-species/4/',
        },
        abilities: [
            { name: 'blaze', url: 'https://pokeapi.co/api/v2/ability/66/' },
            {
                name: 'solar-power',
                url: 'https://pokeapi.co/api/v2/ability/94/',
            },
        ],
        types: [{ name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' }],
    },
    {
        name: 'charmeleon',
        id: 5,
        height: 11,
        weight: 190,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
        species: {
            name: 'charmeleon',
            url: 'https://pokeapi.co/api/v2/pokemon-species/5/',
        },
        abilities: [
            { name: 'blaze', url: 'https://pokeapi.co/api/v2/ability/66/' },
            {
                name: 'solar-power',
                url: 'https://pokeapi.co/api/v2/ability/94/',
            },
        ],
        types: [{ name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' }],
    },
    {
        name: 'charizard',
        id: 6,
        height: 17,
        weight: 905,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
        species: {
            name: 'charizard',
            url: 'https://pokeapi.co/api/v2/pokemon-species/6/',
        },
        abilities: [
            { name: 'blaze', url: 'https://pokeapi.co/api/v2/ability/66/' },
            {
                name: 'solar-power',
                url: 'https://pokeapi.co/api/v2/ability/94/',
            },
        ],
        types: [
            { name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' },
            { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' },
        ],
    },
    {
        name: 'squirtle',
        id: 7,
        height: 5,
        weight: 90,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
        species: {
            name: 'squirtle',
            url: 'https://pokeapi.co/api/v2/pokemon-species/7/',
        },
        abilities: [
            {
                name: 'torrent',
                url: 'https://pokeapi.co/api/v2/ability/67/',
            },
            {
                name: 'rain-dish',
                url: 'https://pokeapi.co/api/v2/ability/44/',
            },
        ],
        types: [{ name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' }],
    },
    {
        name: 'wartortle',
        id: 8,
        height: 10,
        weight: 225,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
        species: {
            name: 'wartortle',
            url: 'https://pokeapi.co/api/v2/pokemon-species/8/',
        },
        abilities: [
            {
                name: 'torrent',
                url: 'https://pokeapi.co/api/v2/ability/67/',
            },
            {
                name: 'rain-dish',
                url: 'https://pokeapi.co/api/v2/ability/44/',
            },
        ],
        types: [{ name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' }],
    },
    {
        name: 'blastoise',
        id: 9,
        height: 16,
        weight: 855,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
        species: {
            name: 'blastoise',
            url: 'https://pokeapi.co/api/v2/pokemon-species/9/',
        },
        abilities: [
            {
                name: 'torrent',
                url: 'https://pokeapi.co/api/v2/ability/67/',
            },
            {
                name: 'rain-dish',
                url: 'https://pokeapi.co/api/v2/ability/44/',
            },
        ],
        types: [{ name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' }],
    },
    {
        name: 'caterpie',
        id: 10,
        height: 3,
        weight: 29,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
        species: {
            name: 'caterpie',
            url: 'https://pokeapi.co/api/v2/pokemon-species/10/',
        },
        abilities: [
            {
                name: 'shield-dust',
                url: 'https://pokeapi.co/api/v2/ability/19/',
            },
            {
                name: 'run-away',
                url: 'https://pokeapi.co/api/v2/ability/50/',
            },
        ],
        types: [{ name: 'bug', url: 'https://pokeapi.co/api/v2/type/7/' }],
    },
    {
        name: 'metapod',
        id: 11,
        height: 7,
        weight: 99,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
        species: {
            name: 'metapod',
            url: 'https://pokeapi.co/api/v2/pokemon-species/11/',
        },
        abilities: [
            {
                name: 'shed-skin',
                url: 'https://pokeapi.co/api/v2/ability/61/',
            },
        ],
        types: [{ name: 'bug', url: 'https://pokeapi.co/api/v2/type/7/' }],
    },
    {
        name: 'butterfree',
        id: 12,
        height: 11,
        weight: 320,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
        species: {
            name: 'butterfree',
            url: 'https://pokeapi.co/api/v2/pokemon-species/12/',
        },
        abilities: [
            {
                name: 'compound-eyes',
                url: 'https://pokeapi.co/api/v2/ability/14/',
            },
            {
                name: 'tinted-lens',
                url: 'https://pokeapi.co/api/v2/ability/110/',
            },
        ],
        types: [
            { name: 'bug', url: 'https://pokeapi.co/api/v2/type/7/' },
            { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' },
        ],
    },
    {
        name: 'weedle',
        id: 13,
        height: 3,
        weight: 32,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
        species: {
            name: 'weedle',
            url: 'https://pokeapi.co/api/v2/pokemon-species/13/',
        },
        abilities: [
            {
                name: 'shield-dust',
                url: 'https://pokeapi.co/api/v2/ability/19/',
            },
            {
                name: 'run-away',
                url: 'https://pokeapi.co/api/v2/ability/50/',
            },
        ],
        types: [
            { name: 'bug', url: 'https://pokeapi.co/api/v2/type/7/' },
            { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
        ],
    },
    {
        name: 'kakuna',
        id: 14,
        height: 6,
        weight: 100,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
        species: {
            name: 'kakuna',
            url: 'https://pokeapi.co/api/v2/pokemon-species/14/',
        },
        abilities: [
            {
                name: 'shed-skin',
                url: 'https://pokeapi.co/api/v2/ability/61/',
            },
        ],
        types: [
            { name: 'bug', url: 'https://pokeapi.co/api/v2/type/7/' },
            { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
        ],
    },
    {
        name: 'beedrill',
        id: 15,
        height: 10,
        weight: 295,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
        species: {
            name: 'beedrill',
            url: 'https://pokeapi.co/api/v2/pokemon-species/15/',
        },
        abilities: [
            { name: 'swarm', url: 'https://pokeapi.co/api/v2/ability/68/' },
            { name: 'sniper', url: 'https://pokeapi.co/api/v2/ability/97/' },
        ],
        types: [
            { name: 'bug', url: 'https://pokeapi.co/api/v2/type/7/' },
            { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
        ],
    },
    {
        name: 'pidgey',
        id: 16,
        height: 3,
        weight: 18,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
        species: {
            name: 'pidgey',
            url: 'https://pokeapi.co/api/v2/pokemon-species/16/',
        },
        abilities: [
            {
                name: 'keen-eye',
                url: 'https://pokeapi.co/api/v2/ability/51/',
            },
            {
                name: 'tangled-feet',
                url: 'https://pokeapi.co/api/v2/ability/77/',
            },
            {
                name: 'big-pecks',
                url: 'https://pokeapi.co/api/v2/ability/145/',
            },
        ],
        types: [
            { name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' },
            { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' },
        ],
    },
    {
        name: 'pidgeotto',
        id: 17,
        height: 11,
        weight: 300,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
        species: {
            name: 'pidgeotto',
            url: 'https://pokeapi.co/api/v2/pokemon-species/17/',
        },
        abilities: [
            {
                name: 'keen-eye',
                url: 'https://pokeapi.co/api/v2/ability/51/',
            },
            {
                name: 'tangled-feet',
                url: 'https://pokeapi.co/api/v2/ability/77/',
            },
            {
                name: 'big-pecks',
                url: 'https://pokeapi.co/api/v2/ability/145/',
            },
        ],
        types: [
            { name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' },
            { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' },
        ],
    },
    {
        name: 'pidgeot',
        id: 18,
        height: 15,
        weight: 395,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
        species: {
            name: 'pidgeot',
            url: 'https://pokeapi.co/api/v2/pokemon-species/18/',
        },
        abilities: [
            {
                name: 'keen-eye',
                url: 'https://pokeapi.co/api/v2/ability/51/',
            },
            {
                name: 'tangled-feet',
                url: 'https://pokeapi.co/api/v2/ability/77/',
            },
            {
                name: 'big-pecks',
                url: 'https://pokeapi.co/api/v2/ability/145/',
            },
        ],
        types: [
            { name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' },
            { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' },
        ],
    },
    {
        name: 'rattata',
        id: 19,
        height: 3,
        weight: 35,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
        species: {
            name: 'rattata',
            url: 'https://pokeapi.co/api/v2/pokemon-species/19/',
        },
        abilities: [
            {
                name: 'run-away',
                url: 'https://pokeapi.co/api/v2/ability/50/',
            },
            { name: 'guts', url: 'https://pokeapi.co/api/v2/ability/62/' },
            { name: 'hustle', url: 'https://pokeapi.co/api/v2/ability/55/' },
        ],
        types: [{ name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' }],
    },
    {
        name: 'raticate',
        id: 20,
        height: 7,
        weight: 185,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
        species: {
            name: 'raticate',
            url: 'https://pokeapi.co/api/v2/pokemon-species/20/',
        },
        abilities: [
            {
                name: 'run-away',
                url: 'https://pokeapi.co/api/v2/ability/50/',
            },
            { name: 'guts', url: 'https://pokeapi.co/api/v2/ability/62/' },
            { name: 'hustle', url: 'https://pokeapi.co/api/v2/ability/55/' },
        ],
        types: [{ name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' }],
    },
    {
        name: 'spearow',
        id: 21,
        height: 3,
        weight: 20,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
        species: {
            name: 'spearow',
            url: 'https://pokeapi.co/api/v2/pokemon-species/21/',
        },
        abilities: [
            {
                name: 'keen-eye',
                url: 'https://pokeapi.co/api/v2/ability/51/',
            },
            { name: 'sniper', url: 'https://pokeapi.co/api/v2/ability/97/' },
        ],
        types: [
            { name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' },
            { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' },
        ],
    },
    {
        name: 'fearow',
        id: 22,
        height: 12,
        weight: 380,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
        species: {
            name: 'fearow',
            url: 'https://pokeapi.co/api/v2/pokemon-species/22/',
        },
        abilities: [
            {
                name: 'keen-eye',
                url: 'https://pokeapi.co/api/v2/ability/51/',
            },
            { name: 'sniper', url: 'https://pokeapi.co/api/v2/ability/97/' },
        ],
        types: [
            { name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' },
            { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' },
        ],
    },
    {
        name: 'ekans',
        id: 23,
        height: 20,
        weight: 69,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
        species: {
            name: 'ekans',
            url: 'https://pokeapi.co/api/v2/pokemon-species/23/',
        },
        abilities: [
            {
                name: 'intimidate',
                url: 'https://pokeapi.co/api/v2/ability/22/',
            },
            {
                name: 'shed-skin',
                url: 'https://pokeapi.co/api/v2/ability/61/',
            },
            {
                name: 'unnerve',
                url: 'https://pokeapi.co/api/v2/ability/127/',
            },
        ],
        types: [{ name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' }],
    },
    {
        name: 'arbok',
        id: 24,
        height: 35,
        weight: 650,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png',
        species: {
            name: 'arbok',
            url: 'https://pokeapi.co/api/v2/pokemon-species/24/',
        },
        abilities: [
            {
                name: 'intimidate',
                url: 'https://pokeapi.co/api/v2/ability/22/',
            },
            {
                name: 'shed-skin',
                url: 'https://pokeapi.co/api/v2/ability/61/',
            },
            {
                name: 'unnerve',
                url: 'https://pokeapi.co/api/v2/ability/127/',
            },
        ],
        types: [{ name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' }],
    },
    {
        name: 'pikachu',
        id: 25,
        height: 4,
        weight: 60,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        species: {
            name: 'pikachu',
            url: 'https://pokeapi.co/api/v2/pokemon-species/25/',
        },
        abilities: [
            { name: 'static', url: 'https://pokeapi.co/api/v2/ability/9/' },
            {
                name: 'lightning-rod',
                url: 'https://pokeapi.co/api/v2/ability/31/',
            },
        ],
        types: [
            { name: 'electric', url: 'https://pokeapi.co/api/v2/type/13/' },
        ],
    },
    {
        name: 'raichu',
        id: 26,
        height: 8,
        weight: 300,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
        species: {
            name: 'raichu',
            url: 'https://pokeapi.co/api/v2/pokemon-species/26/',
        },
        abilities: [
            { name: 'static', url: 'https://pokeapi.co/api/v2/ability/9/' },
            {
                name: 'lightning-rod',
                url: 'https://pokeapi.co/api/v2/ability/31/',
            },
        ],
        types: [
            { name: 'electric', url: 'https://pokeapi.co/api/v2/type/13/' },
        ],
    },
    {
        name: 'sandshrew',
        id: 27,
        height: 6,
        weight: 120,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png',
        species: {
            name: 'sandshrew',
            url: 'https://pokeapi.co/api/v2/pokemon-species/27/',
        },
        abilities: [
            {
                name: 'sand-veil',
                url: 'https://pokeapi.co/api/v2/ability/8/',
            },
            {
                name: 'sand-rush',
                url: 'https://pokeapi.co/api/v2/ability/146/',
            },
        ],
        types: [{ name: 'ground', url: 'https://pokeapi.co/api/v2/type/5/' }],
    },
    {
        name: 'sandslash',
        id: 28,
        height: 10,
        weight: 295,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png',
        species: {
            name: 'sandslash',
            url: 'https://pokeapi.co/api/v2/pokemon-species/28/',
        },
        abilities: [
            {
                name: 'sand-veil',
                url: 'https://pokeapi.co/api/v2/ability/8/',
            },
            {
                name: 'sand-rush',
                url: 'https://pokeapi.co/api/v2/ability/146/',
            },
        ],
        types: [{ name: 'ground', url: 'https://pokeapi.co/api/v2/type/5/' }],
    },
    {
        name: 'nidoran-f',
        id: 29,
        height: 4,
        weight: 70,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png',
        species: {
            name: 'nidoran-f',
            url: 'https://pokeapi.co/api/v2/pokemon-species/29/',
        },
        abilities: [
            {
                name: 'poison-point',
                url: 'https://pokeapi.co/api/v2/ability/38/',
            },
            {
                name: 'rivalry',
                url: 'https://pokeapi.co/api/v2/ability/79/',
            },
            { name: 'hustle', url: 'https://pokeapi.co/api/v2/ability/55/' },
        ],
        types: [{ name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' }],
    },
    {
        name: 'nidorina',
        id: 30,
        height: 8,
        weight: 200,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
        species: {
            name: 'nidorina',
            url: 'https://pokeapi.co/api/v2/pokemon-species/30/',
        },
        abilities: [
            {
                name: 'poison-point',
                url: 'https://pokeapi.co/api/v2/ability/38/',
            },
            {
                name: 'rivalry',
                url: 'https://pokeapi.co/api/v2/ability/79/',
            },
            { name: 'hustle', url: 'https://pokeapi.co/api/v2/ability/55/' },
        ],
        types: [{ name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' }],
    },
    {
        name: 'nidoqueen',
        id: 31,
        height: 13,
        weight: 600,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png',
        species: {
            name: 'nidoqueen',
            url: 'https://pokeapi.co/api/v2/pokemon-species/31/',
        },
        abilities: [
            {
                name: 'poison-point',
                url: 'https://pokeapi.co/api/v2/ability/38/',
            },
            {
                name: 'rivalry',
                url: 'https://pokeapi.co/api/v2/ability/79/',
            },
            {
                name: 'sheer-force',
                url: 'https://pokeapi.co/api/v2/ability/125/',
            },
        ],
        types: [
            { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
            { name: 'ground', url: 'https://pokeapi.co/api/v2/type/5/' },
        ],
    },
    {
        name: 'nidoran-m',
        id: 32,
        height: 5,
        weight: 90,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png',
        species: {
            name: 'nidoran-m',
            url: 'https://pokeapi.co/api/v2/pokemon-species/32/',
        },
        abilities: [
            {
                name: 'poison-point',
                url: 'https://pokeapi.co/api/v2/ability/38/',
            },
            {
                name: 'rivalry',
                url: 'https://pokeapi.co/api/v2/ability/79/',
            },
            { name: 'hustle', url: 'https://pokeapi.co/api/v2/ability/55/' },
        ],
        types: [{ name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' }],
    },
    {
        name: 'nidorino',
        id: 33,
        height: 9,
        weight: 195,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png',
        species: {
            name: 'nidorino',
            url: 'https://pokeapi.co/api/v2/pokemon-species/33/',
        },
        abilities: [
            {
                name: 'poison-point',
                url: 'https://pokeapi.co/api/v2/ability/38/',
            },
            {
                name: 'rivalry',
                url: 'https://pokeapi.co/api/v2/ability/79/',
            },
            { name: 'hustle', url: 'https://pokeapi.co/api/v2/ability/55/' },
        ],
        types: [{ name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' }],
    },
    {
        name: 'nidoking',
        id: 34,
        height: 14,
        weight: 620,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png',
        species: {
            name: 'nidoking',
            url: 'https://pokeapi.co/api/v2/pokemon-species/34/',
        },
        abilities: [
            {
                name: 'poison-point',
                url: 'https://pokeapi.co/api/v2/ability/38/',
            },
            {
                name: 'rivalry',
                url: 'https://pokeapi.co/api/v2/ability/79/',
            },
            {
                name: 'sheer-force',
                url: 'https://pokeapi.co/api/v2/ability/125/',
            },
        ],
        types: [
            { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
            { name: 'ground', url: 'https://pokeapi.co/api/v2/type/5/' },
        ],
    },
    {
        name: 'clefairy',
        id: 35,
        height: 6,
        weight: 75,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
        species: {
            name: 'clefairy',
            url: 'https://pokeapi.co/api/v2/pokemon-species/35/',
        },
        abilities: [
            {
                name: 'cute-charm',
                url: 'https://pokeapi.co/api/v2/ability/56/',
            },
            {
                name: 'magic-guard',
                url: 'https://pokeapi.co/api/v2/ability/98/',
            },
            {
                name: 'friend-guard',
                url: 'https://pokeapi.co/api/v2/ability/132/',
            },
        ],
        types: [{ name: 'fairy', url: 'https://pokeapi.co/api/v2/type/18/' }],
    },
    {
        name: 'clefable',
        id: 36,
        height: 13,
        weight: 400,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png',
        species: {
            name: 'clefable',
            url: 'https://pokeapi.co/api/v2/pokemon-species/36/',
        },
        abilities: [
            {
                name: 'cute-charm',
                url: 'https://pokeapi.co/api/v2/ability/56/',
            },
            {
                name: 'magic-guard',
                url: 'https://pokeapi.co/api/v2/ability/98/',
            },
            {
                name: 'unaware',
                url: 'https://pokeapi.co/api/v2/ability/109/',
            },
        ],
        types: [{ name: 'fairy', url: 'https://pokeapi.co/api/v2/type/18/' }],
    },
    {
        name: 'vulpix',
        id: 37,
        height: 6,
        weight: 99,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png',
        species: {
            name: 'vulpix',
            url: 'https://pokeapi.co/api/v2/pokemon-species/37/',
        },
        abilities: [
            {
                name: 'flash-fire',
                url: 'https://pokeapi.co/api/v2/ability/18/',
            },
            {
                name: 'drought',
                url: 'https://pokeapi.co/api/v2/ability/70/',
            },
        ],
        types: [{ name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' }],
    },
    {
        name: 'ninetales',
        id: 38,
        height: 11,
        weight: 199,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png',
        species: {
            name: 'ninetales',
            url: 'https://pokeapi.co/api/v2/pokemon-species/38/',
        },
        abilities: [
            {
                name: 'flash-fire',
                url: 'https://pokeapi.co/api/v2/ability/18/',
            },
            {
                name: 'drought',
                url: 'https://pokeapi.co/api/v2/ability/70/',
            },
        ],
        types: [{ name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' }],
    },
    {
        name: 'jigglypuff',
        id: 39,
        height: 5,
        weight: 55,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
        species: {
            name: 'jigglypuff',
            url: 'https://pokeapi.co/api/v2/pokemon-species/39/',
        },
        abilities: [
            {
                name: 'cute-charm',
                url: 'https://pokeapi.co/api/v2/ability/56/',
            },
            {
                name: 'competitive',
                url: 'https://pokeapi.co/api/v2/ability/172/',
            },
            {
                name: 'friend-guard',
                url: 'https://pokeapi.co/api/v2/ability/132/',
            },
        ],
        types: [
            { name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' },
            { name: 'fairy', url: 'https://pokeapi.co/api/v2/type/18/' },
        ],
    },
    {
        name: 'wigglytuff',
        id: 40,
        height: 10,
        weight: 120,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png',
        species: {
            name: 'wigglytuff',
            url: 'https://pokeapi.co/api/v2/pokemon-species/40/',
        },
        abilities: [
            {
                name: 'cute-charm',
                url: 'https://pokeapi.co/api/v2/ability/56/',
            },
            {
                name: 'competitive',
                url: 'https://pokeapi.co/api/v2/ability/172/',
            },
            { name: 'frisk', url: 'https://pokeapi.co/api/v2/ability/119/' },
        ],
        types: [
            { name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' },
            { name: 'fairy', url: 'https://pokeapi.co/api/v2/type/18/' },
        ],
    },
    {
        name: 'zubat',
        id: 41,
        height: 8,
        weight: 75,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png',
        species: {
            name: 'zubat',
            url: 'https://pokeapi.co/api/v2/pokemon-species/41/',
        },
        abilities: [
            {
                name: 'inner-focus',
                url: 'https://pokeapi.co/api/v2/ability/39/',
            },
            {
                name: 'infiltrator',
                url: 'https://pokeapi.co/api/v2/ability/151/',
            },
        ],
        types: [
            { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
            { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' },
        ],
    },
    {
        name: 'golbat',
        id: 42,
        height: 16,
        weight: 550,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png',
        species: {
            name: 'golbat',
            url: 'https://pokeapi.co/api/v2/pokemon-species/42/',
        },
        abilities: [
            {
                name: 'inner-focus',
                url: 'https://pokeapi.co/api/v2/ability/39/',
            },
            {
                name: 'infiltrator',
                url: 'https://pokeapi.co/api/v2/ability/151/',
            },
        ],
        types: [
            { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
            { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' },
        ],
    },
    {
        name: 'oddish',
        id: 43,
        height: 5,
        weight: 54,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png',
        species: {
            name: 'oddish',
            url: 'https://pokeapi.co/api/v2/pokemon-species/43/',
        },
        abilities: [
            {
                name: 'chlorophyll',
                url: 'https://pokeapi.co/api/v2/ability/34/',
            },
            {
                name: 'run-away',
                url: 'https://pokeapi.co/api/v2/ability/50/',
            },
        ],
        types: [
            { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
            { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
        ],
    },
    {
        name: 'gloom',
        id: 44,
        height: 8,
        weight: 86,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png',
        species: {
            name: 'gloom',
            url: 'https://pokeapi.co/api/v2/pokemon-species/44/',
        },
        abilities: [
            {
                name: 'chlorophyll',
                url: 'https://pokeapi.co/api/v2/ability/34/',
            },
            { name: 'stench', url: 'https://pokeapi.co/api/v2/ability/1/' },
        ],
        types: [
            { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
            { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
        ],
    },
    {
        name: 'vileplume',
        id: 45,
        height: 12,
        weight: 186,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png',
        species: {
            name: 'vileplume',
            url: 'https://pokeapi.co/api/v2/pokemon-species/45/',
        },
        abilities: [
            {
                name: 'chlorophyll',
                url: 'https://pokeapi.co/api/v2/ability/34/',
            },
            {
                name: 'effect-spore',
                url: 'https://pokeapi.co/api/v2/ability/27/',
            },
        ],
        types: [
            { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
            { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
        ],
    },
    {
        name: 'paras',
        id: 46,
        height: 3,
        weight: 54,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png',
        species: {
            name: 'paras',
            url: 'https://pokeapi.co/api/v2/pokemon-species/46/',
        },
        abilities: [
            {
                name: 'effect-spore',
                url: 'https://pokeapi.co/api/v2/ability/27/',
            },
            {
                name: 'dry-skin',
                url: 'https://pokeapi.co/api/v2/ability/87/',
            },
            { name: 'damp', url: 'https://pokeapi.co/api/v2/ability/6/' },
        ],
        types: [
            { name: 'bug', url: 'https://pokeapi.co/api/v2/type/7/' },
            { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
        ],
    },
    {
        name: 'parasect',
        id: 47,
        height: 10,
        weight: 295,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png',
        species: {
            name: 'parasect',
            url: 'https://pokeapi.co/api/v2/pokemon-species/47/',
        },
        abilities: [
            {
                name: 'effect-spore',
                url: 'https://pokeapi.co/api/v2/ability/27/',
            },
            {
                name: 'dry-skin',
                url: 'https://pokeapi.co/api/v2/ability/87/',
            },
            { name: 'damp', url: 'https://pokeapi.co/api/v2/ability/6/' },
        ],
        types: [
            { name: 'bug', url: 'https://pokeapi.co/api/v2/type/7/' },
            { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
        ],
    },
    {
        name: 'venonat',
        id: 48,
        height: 10,
        weight: 300,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png',
        species: {
            name: 'venonat',
            url: 'https://pokeapi.co/api/v2/pokemon-species/48/',
        },
        abilities: [
            {
                name: 'compound-eyes',
                url: 'https://pokeapi.co/api/v2/ability/14/',
            },
            {
                name: 'tinted-lens',
                url: 'https://pokeapi.co/api/v2/ability/110/',
            },
            {
                name: 'run-away',
                url: 'https://pokeapi.co/api/v2/ability/50/',
            },
        ],
        types: [
            { name: 'bug', url: 'https://pokeapi.co/api/v2/type/7/' },
            { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
        ],
    },
    {
        name: 'venomoth',
        id: 49,
        height: 15,
        weight: 125,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png',
        species: {
            name: 'venomoth',
            url: 'https://pokeapi.co/api/v2/pokemon-species/49/',
        },
        abilities: [
            {
                name: 'shield-dust',
                url: 'https://pokeapi.co/api/v2/ability/19/',
            },
            {
                name: 'tinted-lens',
                url: 'https://pokeapi.co/api/v2/ability/110/',
            },
            {
                name: 'wonder-skin',
                url: 'https://pokeapi.co/api/v2/ability/147/',
            },
        ],
        types: [
            { name: 'bug', url: 'https://pokeapi.co/api/v2/type/7/' },
            { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
        ],
    },
    {
        name: 'diglett',
        id: 50,
        height: 2,
        weight: 8,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png',
        species: {
            name: 'diglett',
            url: 'https://pokeapi.co/api/v2/pokemon-species/50/',
        },
        abilities: [
            {
                name: 'sand-veil',
                url: 'https://pokeapi.co/api/v2/ability/8/',
            },
            {
                name: 'arena-trap',
                url: 'https://pokeapi.co/api/v2/ability/71/',
            },
            {
                name: 'sand-force',
                url: 'https://pokeapi.co/api/v2/ability/159/',
            },
        ],
        types: [{ name: 'ground', url: 'https://pokeapi.co/api/v2/type/5/' }],
    },
    {
        name: 'dugtrio',
        id: 51,
        height: 7,
        weight: 333,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png',
        species: {
            name: 'dugtrio',
            url: 'https://pokeapi.co/api/v2/pokemon-species/51/',
        },
        abilities: [
            {
                name: 'sand-veil',
                url: 'https://pokeapi.co/api/v2/ability/8/',
            },
            {
                name: 'arena-trap',
                url: 'https://pokeapi.co/api/v2/ability/71/',
            },
            {
                name: 'sand-force',
                url: 'https://pokeapi.co/api/v2/ability/159/',
            },
        ],
        types: [{ name: 'ground', url: 'https://pokeapi.co/api/v2/type/5/' }],
    },
    {
        name: 'meowth',
        id: 52,
        height: 4,
        weight: 42,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
        species: {
            name: 'meowth',
            url: 'https://pokeapi.co/api/v2/pokemon-species/52/',
        },
        abilities: [
            {
                name: 'pickup',
                url: 'https://pokeapi.co/api/v2/ability/53/',
            },
            {
                name: 'technician',
                url: 'https://pokeapi.co/api/v2/ability/101/',
            },
            {
                name: 'unnerve',
                url: 'https://pokeapi.co/api/v2/ability/127/',
            },
        ],
        types: [{ name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' }],
    },
    {
        name: 'persian',
        id: 53,
        height: 10,
        weight: 320,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png',
        species: {
            name: 'persian',
            url: 'https://pokeapi.co/api/v2/pokemon-species/53/',
        },
        abilities: [
            { name: 'limber', url: 'https://pokeapi.co/api/v2/ability/7/' },
            {
                name: 'technician',
                url: 'https://pokeapi.co/api/v2/ability/101/',
            },
            {
                name: 'unnerve',
                url: 'https://pokeapi.co/api/v2/ability/127/',
            },
        ],
        types: [{ name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' }],
    },
    {
        name: 'psyduck',
        id: 54,
        height: 8,
        weight: 196,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png',
        species: {
            name: 'psyduck',
            url: 'https://pokeapi.co/api/v2/pokemon-species/54/',
        },
        abilities: [
            { name: 'damp', url: 'https://pokeapi.co/api/v2/ability/6/' },
            {
                name: 'cloud-nine',
                url: 'https://pokeapi.co/api/v2/ability/13/',
            },
            {
                name: 'swift-swim',
                url: 'https://pokeapi.co/api/v2/ability/33/',
            },
        ],
        types: [{ name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' }],
    },
    {
        name: 'golduck',
        id: 55,
        height: 17,
        weight: 766,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png',
        species: {
            name: 'golduck',
            url: 'https://pokeapi.co/api/v2/pokemon-species/55/',
        },
        abilities: [
            { name: 'damp', url: 'https://pokeapi.co/api/v2/ability/6/' },
            {
                name: 'cloud-nine',
                url: 'https://pokeapi.co/api/v2/ability/13/',
            },
            {
                name: 'swift-swim',
                url: 'https://pokeapi.co/api/v2/ability/33/',
            },
        ],
        types: [{ name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' }],
    },
    {
        name: 'mankey',
        id: 56,
        height: 5,
        weight: 280,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png',
        species: {
            name: 'mankey',
            url: 'https://pokeapi.co/api/v2/pokemon-species/56/',
        },
        abilities: [
            {
                name: 'vital-spirit',
                url: 'https://pokeapi.co/api/v2/ability/72/',
            },
            {
                name: 'anger-point',
                url: 'https://pokeapi.co/api/v2/ability/83/',
            },
            {
                name: 'defiant',
                url: 'https://pokeapi.co/api/v2/ability/128/',
            },
        ],
        types: [{ name: 'fighting', url: 'https://pokeapi.co/api/v2/type/2/' }],
    },
    {
        name: 'primeape',
        id: 57,
        height: 10,
        weight: 320,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png',
        species: {
            name: 'primeape',
            url: 'https://pokeapi.co/api/v2/pokemon-species/57/',
        },
        abilities: [
            {
                name: 'vital-spirit',
                url: 'https://pokeapi.co/api/v2/ability/72/',
            },
            {
                name: 'anger-point',
                url: 'https://pokeapi.co/api/v2/ability/83/',
            },
            {
                name: 'defiant',
                url: 'https://pokeapi.co/api/v2/ability/128/',
            },
        ],
        types: [{ name: 'fighting', url: 'https://pokeapi.co/api/v2/type/2/' }],
    },
    {
        name: 'growlithe',
        id: 58,
        height: 7,
        weight: 190,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png',
        species: {
            name: 'growlithe',
            url: 'https://pokeapi.co/api/v2/pokemon-species/58/',
        },
        abilities: [
            {
                name: 'intimidate',
                url: 'https://pokeapi.co/api/v2/ability/22/',
            },
            {
                name: 'flash-fire',
                url: 'https://pokeapi.co/api/v2/ability/18/',
            },
            {
                name: 'justified',
                url: 'https://pokeapi.co/api/v2/ability/154/',
            },
        ],
        types: [{ name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' }],
    },
    {
        name: 'arcanine',
        id: 59,
        height: 19,
        weight: 1550,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png',
        species: {
            name: 'arcanine',
            url: 'https://pokeapi.co/api/v2/pokemon-species/59/',
        },
        abilities: [
            {
                name: 'intimidate',
                url: 'https://pokeapi.co/api/v2/ability/22/',
            },
            {
                name: 'flash-fire',
                url: 'https://pokeapi.co/api/v2/ability/18/',
            },
            {
                name: 'justified',
                url: 'https://pokeapi.co/api/v2/ability/154/',
            },
        ],
        types: [{ name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' }],
    },
    {
        name: 'poliwag',
        id: 60,
        height: 6,
        weight: 124,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png',
        species: {
            name: 'poliwag',
            url: 'https://pokeapi.co/api/v2/pokemon-species/60/',
        },
        abilities: [
            {
                name: 'water-absorb',
                url: 'https://pokeapi.co/api/v2/ability/11/',
            },
            { name: 'damp', url: 'https://pokeapi.co/api/v2/ability/6/' },
            {
                name: 'swift-swim',
                url: 'https://pokeapi.co/api/v2/ability/33/',
            },
        ],
        types: [{ name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' }],
    },
    {
        name: 'poliwhirl',
        id: 61,
        height: 10,
        weight: 200,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png',
        species: {
            name: 'poliwhirl',
            url: 'https://pokeapi.co/api/v2/pokemon-species/61/',
        },
        abilities: [
            {
                name: 'water-absorb',
                url: 'https://pokeapi.co/api/v2/ability/11/',
            },
            { name: 'damp', url: 'https://pokeapi.co/api/v2/ability/6/' },
            {
                name: 'swift-swim',
                url: 'https://pokeapi.co/api/v2/ability/33/',
            },
        ],
        types: [{ name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' }],
    },
    {
        name: 'poliwrath',
        id: 62,
        height: 13,
        weight: 540,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png',
        species: {
            name: 'poliwrath',
            url: 'https://pokeapi.co/api/v2/pokemon-species/62/',
        },
        abilities: [
            {
                name: 'water-absorb',
                url: 'https://pokeapi.co/api/v2/ability/11/',
            },
            { name: 'damp', url: 'https://pokeapi.co/api/v2/ability/6/' },
            {
                name: 'swift-swim',
                url: 'https://pokeapi.co/api/v2/ability/33/',
            },
        ],
        types: [
            { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' },
            { name: 'fighting', url: 'https://pokeapi.co/api/v2/type/2/' },
        ],
    },
    {
        name: 'abra',
        id: 63,
        height: 9,
        weight: 195,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png',
        species: {
            name: 'abra',
            url: 'https://pokeapi.co/api/v2/pokemon-species/63/',
        },
        abilities: [
            {
                name: 'synchronize',
                url: 'https://pokeapi.co/api/v2/ability/28/',
            },
            {
                name: 'inner-focus',
                url: 'https://pokeapi.co/api/v2/ability/39/',
            },
            {
                name: 'magic-guard',
                url: 'https://pokeapi.co/api/v2/ability/98/',
            },
        ],
        types: [{ name: 'psychic', url: 'https://pokeapi.co/api/v2/type/14/' }],
    },
    {
        name: 'kadabra',
        id: 64,
        height: 13,
        weight: 565,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png',
        species: {
            name: 'kadabra',
            url: 'https://pokeapi.co/api/v2/pokemon-species/64/',
        },
        abilities: [
            {
                name: 'synchronize',
                url: 'https://pokeapi.co/api/v2/ability/28/',
            },
            {
                name: 'inner-focus',
                url: 'https://pokeapi.co/api/v2/ability/39/',
            },
            {
                name: 'magic-guard',
                url: 'https://pokeapi.co/api/v2/ability/98/',
            },
        ],
        types: [{ name: 'psychic', url: 'https://pokeapi.co/api/v2/type/14/' }],
    },
    {
        name: 'alakazam',
        id: 65,
        height: 15,
        weight: 480,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png',
        species: {
            name: 'alakazam',
            url: 'https://pokeapi.co/api/v2/pokemon-species/65/',
        },
        abilities: [
            {
                name: 'synchronize',
                url: 'https://pokeapi.co/api/v2/ability/28/',
            },
            {
                name: 'inner-focus',
                url: 'https://pokeapi.co/api/v2/ability/39/',
            },
            {
                name: 'magic-guard',
                url: 'https://pokeapi.co/api/v2/ability/98/',
            },
        ],
        types: [{ name: 'psychic', url: 'https://pokeapi.co/api/v2/type/14/' }],
    },
    {
        name: 'machop',
        id: 66,
        height: 8,
        weight: 195,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png',
        species: {
            name: 'machop',
            url: 'https://pokeapi.co/api/v2/pokemon-species/66/',
        },
        abilities: [
            { name: 'guts', url: 'https://pokeapi.co/api/v2/ability/62/' },
            {
                name: 'no-guard',
                url: 'https://pokeapi.co/api/v2/ability/99/',
            },
            {
                name: 'steadfast',
                url: 'https://pokeapi.co/api/v2/ability/80/',
            },
        ],
        types: [{ name: 'fighting', url: 'https://pokeapi.co/api/v2/type/2/' }],
    },
    {
        name: 'machoke',
        id: 67,
        height: 15,
        weight: 705,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png',
        species: {
            name: 'machoke',
            url: 'https://pokeapi.co/api/v2/pokemon-species/67/',
        },
        abilities: [
            { name: 'guts', url: 'https://pokeapi.co/api/v2/ability/62/' },
            {
                name: 'no-guard',
                url: 'https://pokeapi.co/api/v2/ability/99/',
            },
            {
                name: 'steadfast',
                url: 'https://pokeapi.co/api/v2/ability/80/',
            },
        ],
        types: [{ name: 'fighting', url: 'https://pokeapi.co/api/v2/type/2/' }],
    },
    {
        name: 'machamp',
        id: 68,
        height: 16,
        weight: 1300,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png',
        species: {
            name: 'machamp',
            url: 'https://pokeapi.co/api/v2/pokemon-species/68/',
        },
        abilities: [
            { name: 'guts', url: 'https://pokeapi.co/api/v2/ability/62/' },
            {
                name: 'no-guard',
                url: 'https://pokeapi.co/api/v2/ability/99/',
            },
            {
                name: 'steadfast',
                url: 'https://pokeapi.co/api/v2/ability/80/',
            },
        ],
        types: [{ name: 'fighting', url: 'https://pokeapi.co/api/v2/type/2/' }],
    },
    {
        name: 'bellsprout',
        id: 69,
        height: 7,
        weight: 40,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png',
        species: {
            name: 'bellsprout',
            url: 'https://pokeapi.co/api/v2/pokemon-species/69/',
        },
        abilities: [
            {
                name: 'chlorophyll',
                url: 'https://pokeapi.co/api/v2/ability/34/',
            },
            {
                name: 'gluttony',
                url: 'https://pokeapi.co/api/v2/ability/82/',
            },
        ],
        types: [
            { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
            { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
        ],
    },
    {
        name: 'weepinbell',
        id: 70,
        height: 10,
        weight: 64,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png',
        species: {
            name: 'weepinbell',
            url: 'https://pokeapi.co/api/v2/pokemon-species/70/',
        },
        abilities: [
            {
                name: 'chlorophyll',
                url: 'https://pokeapi.co/api/v2/ability/34/',
            },
            {
                name: 'gluttony',
                url: 'https://pokeapi.co/api/v2/ability/82/',
            },
        ],
        types: [
            { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
            { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
        ],
    },
    {
        name: 'victreebel',
        id: 71,
        height: 17,
        weight: 155,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png',
        species: {
            name: 'victreebel',
            url: 'https://pokeapi.co/api/v2/pokemon-species/71/',
        },
        abilities: [
            {
                name: 'chlorophyll',
                url: 'https://pokeapi.co/api/v2/ability/34/',
            },
            {
                name: 'gluttony',
                url: 'https://pokeapi.co/api/v2/ability/82/',
            },
        ],
        types: [
            { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
            { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
        ],
    },
    {
        name: 'tentacool',
        id: 72,
        height: 9,
        weight: 455,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png',
        species: {
            name: 'tentacool',
            url: 'https://pokeapi.co/api/v2/pokemon-species/72/',
        },
        abilities: [
            {
                name: 'clear-body',
                url: 'https://pokeapi.co/api/v2/ability/29/',
            },
            {
                name: 'liquid-ooze',
                url: 'https://pokeapi.co/api/v2/ability/64/',
            },
            {
                name: 'rain-dish',
                url: 'https://pokeapi.co/api/v2/ability/44/',
            },
        ],
        types: [
            { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' },
            { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
        ],
    },
    {
        name: 'tentacruel',
        id: 73,
        height: 16,
        weight: 550,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png',
        species: {
            name: 'tentacruel',
            url: 'https://pokeapi.co/api/v2/pokemon-species/73/',
        },
        abilities: [
            {
                name: 'clear-body',
                url: 'https://pokeapi.co/api/v2/ability/29/',
            },
            {
                name: 'liquid-ooze',
                url: 'https://pokeapi.co/api/v2/ability/64/',
            },
            {
                name: 'rain-dish',
                url: 'https://pokeapi.co/api/v2/ability/44/',
            },
        ],
        types: [
            { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' },
            { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
        ],
    },
    {
        name: 'geodude',
        id: 74,
        height: 4,
        weight: 200,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png',
        species: {
            name: 'geodude',
            url: 'https://pokeapi.co/api/v2/pokemon-species/74/',
        },
        abilities: [
            {
                name: 'rock-head',
                url: 'https://pokeapi.co/api/v2/ability/69/',
            },
            { name: 'sturdy', url: 'https://pokeapi.co/api/v2/ability/5/' },
            {
                name: 'sand-veil',
                url: 'https://pokeapi.co/api/v2/ability/8/',
            },
        ],
        types: [
            { name: 'rock', url: 'https://pokeapi.co/api/v2/type/6/' },
            { name: 'ground', url: 'https://pokeapi.co/api/v2/type/5/' },
        ],
    },
    {
        name: 'graveler',
        id: 75,
        height: 10,
        weight: 1050,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png',
        species: {
            name: 'graveler',
            url: 'https://pokeapi.co/api/v2/pokemon-species/75/',
        },
        abilities: [
            {
                name: 'rock-head',
                url: 'https://pokeapi.co/api/v2/ability/69/',
            },
            { name: 'sturdy', url: 'https://pokeapi.co/api/v2/ability/5/' },
            {
                name: 'sand-veil',
                url: 'https://pokeapi.co/api/v2/ability/8/',
            },
        ],
        types: [
            { name: 'rock', url: 'https://pokeapi.co/api/v2/type/6/' },
            { name: 'ground', url: 'https://pokeapi.co/api/v2/type/5/' },
        ],
    },
    {
        name: 'golem',
        id: 76,
        height: 14,
        weight: 3000,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png',
        species: {
            name: 'golem',
            url: 'https://pokeapi.co/api/v2/pokemon-species/76/',
        },
        abilities: [
            {
                name: 'rock-head',
                url: 'https://pokeapi.co/api/v2/ability/69/',
            },
            { name: 'sturdy', url: 'https://pokeapi.co/api/v2/ability/5/' },
            {
                name: 'sand-veil',
                url: 'https://pokeapi.co/api/v2/ability/8/',
            },
        ],
        types: [
            { name: 'rock', url: 'https://pokeapi.co/api/v2/type/6/' },
            { name: 'ground', url: 'https://pokeapi.co/api/v2/type/5/' },
        ],
    },
    {
        name: 'ponyta',
        id: 77,
        height: 10,
        weight: 300,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png',
        species: {
            name: 'ponyta',
            url: 'https://pokeapi.co/api/v2/pokemon-species/77/',
        },
        abilities: [
            {
                name: 'run-away',
                url: 'https://pokeapi.co/api/v2/ability/50/',
            },
            {
                name: 'flash-fire',
                url: 'https://pokeapi.co/api/v2/ability/18/',
            },
            {
                name: 'flame-body',
                url: 'https://pokeapi.co/api/v2/ability/49/',
            },
        ],
        types: [{ name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' }],
    },
    {
        name: 'rapidash',
        id: 78,
        height: 17,
        weight: 950,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png',
        species: {
            name: 'rapidash',
            url: 'https://pokeapi.co/api/v2/pokemon-species/78/',
        },
        abilities: [
            {
                name: 'run-away',
                url: 'https://pokeapi.co/api/v2/ability/50/',
            },
            {
                name: 'flash-fire',
                url: 'https://pokeapi.co/api/v2/ability/18/',
            },
            {
                name: 'flame-body',
                url: 'https://pokeapi.co/api/v2/ability/49/',
            },
        ],
        types: [{ name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' }],
    },
    {
        name: 'slowpoke',
        id: 79,
        height: 12,
        weight: 360,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png',
        species: {
            name: 'slowpoke',
            url: 'https://pokeapi.co/api/v2/pokemon-species/79/',
        },
        abilities: [
            {
                name: 'oblivious',
                url: 'https://pokeapi.co/api/v2/ability/12/',
            },
            {
                name: 'own-tempo',
                url: 'https://pokeapi.co/api/v2/ability/20/',
            },
            {
                name: 'regenerator',
                url: 'https://pokeapi.co/api/v2/ability/144/',
            },
        ],
        types: [
            { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' },
            { name: 'psychic', url: 'https://pokeapi.co/api/v2/type/14/' },
        ],
    },
    {
        name: 'slowbro',
        id: 80,
        height: 16,
        weight: 785,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png',
        species: {
            name: 'slowbro',
            url: 'https://pokeapi.co/api/v2/pokemon-species/80/',
        },
        abilities: [
            {
                name: 'oblivious',
                url: 'https://pokeapi.co/api/v2/ability/12/',
            },
            {
                name: 'own-tempo',
                url: 'https://pokeapi.co/api/v2/ability/20/',
            },
            {
                name: 'regenerator',
                url: 'https://pokeapi.co/api/v2/ability/144/',
            },
        ],
        types: [
            { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' },
            { name: 'psychic', url: 'https://pokeapi.co/api/v2/type/14/' },
        ],
    },
    {
        name: 'magnemite',
        id: 81,
        height: 3,
        weight: 60,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png',
        species: {
            name: 'magnemite',
            url: 'https://pokeapi.co/api/v2/pokemon-species/81/',
        },
        abilities: [
            {
                name: 'magnet-pull',
                url: 'https://pokeapi.co/api/v2/ability/42/',
            },
            { name: 'sturdy', url: 'https://pokeapi.co/api/v2/ability/5/' },
            {
                name: 'analytic',
                url: 'https://pokeapi.co/api/v2/ability/148/',
            },
        ],
        types: [
            { name: 'electric', url: 'https://pokeapi.co/api/v2/type/13/' },
            { name: 'steel', url: 'https://pokeapi.co/api/v2/type/9/' },
        ],
    },
    {
        name: 'magneton',
        id: 82,
        height: 10,
        weight: 600,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png',
        species: {
            name: 'magneton',
            url: 'https://pokeapi.co/api/v2/pokemon-species/82/',
        },
        abilities: [
            {
                name: 'magnet-pull',
                url: 'https://pokeapi.co/api/v2/ability/42/',
            },
            { name: 'sturdy', url: 'https://pokeapi.co/api/v2/ability/5/' },
            {
                name: 'analytic',
                url: 'https://pokeapi.co/api/v2/ability/148/',
            },
        ],
        types: [
            { name: 'electric', url: 'https://pokeapi.co/api/v2/type/13/' },
            { name: 'steel', url: 'https://pokeapi.co/api/v2/type/9/' },
        ],
    },
    {
        name: 'farfetchd',
        id: 83,
        height: 8,
        weight: 150,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png',
        species: {
            name: 'farfetchd',
            url: 'https://pokeapi.co/api/v2/pokemon-species/83/',
        },
        abilities: [
            {
                name: 'keen-eye',
                url: 'https://pokeapi.co/api/v2/ability/51/',
            },
            {
                name: 'inner-focus',
                url: 'https://pokeapi.co/api/v2/ability/39/',
            },
            {
                name: 'defiant',
                url: 'https://pokeapi.co/api/v2/ability/128/',
            },
        ],
        types: [
            { name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' },
            { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' },
        ],
    },
    {
        name: 'doduo',
        id: 84,
        height: 14,
        weight: 392,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png',
        species: {
            name: 'doduo',
            url: 'https://pokeapi.co/api/v2/pokemon-species/84/',
        },
        abilities: [
            {
                name: 'run-away',
                url: 'https://pokeapi.co/api/v2/ability/50/',
            },
            {
                name: 'early-bird',
                url: 'https://pokeapi.co/api/v2/ability/48/',
            },
            {
                name: 'tangled-feet',
                url: 'https://pokeapi.co/api/v2/ability/77/',
            },
        ],
        types: [
            { name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' },
            { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' },
        ],
    },
    {
        name: 'dodrio',
        id: 85,
        height: 18,
        weight: 852,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png',
        species: {
            name: 'dodrio',
            url: 'https://pokeapi.co/api/v2/pokemon-species/85/',
        },
        abilities: [
            {
                name: 'run-away',
                url: 'https://pokeapi.co/api/v2/ability/50/',
            },
            {
                name: 'early-bird',
                url: 'https://pokeapi.co/api/v2/ability/48/',
            },
            {
                name: 'tangled-feet',
                url: 'https://pokeapi.co/api/v2/ability/77/',
            },
        ],
        types: [
            { name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' },
            { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' },
        ],
    },
    {
        name: 'seel',
        id: 86,
        height: 11,
        weight: 900,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png',
        species: {
            name: 'seel',
            url: 'https://pokeapi.co/api/v2/pokemon-species/86/',
        },
        abilities: [
            {
                name: 'thick-fat',
                url: 'https://pokeapi.co/api/v2/ability/47/',
            },
            {
                name: 'hydration',
                url: 'https://pokeapi.co/api/v2/ability/93/',
            },
            {
                name: 'ice-body',
                url: 'https://pokeapi.co/api/v2/ability/115/',
            },
        ],
        types: [{ name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' }],
    },
    {
        name: 'dewgong',
        id: 87,
        height: 17,
        weight: 1200,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png',
        species: {
            name: 'dewgong',
            url: 'https://pokeapi.co/api/v2/pokemon-species/87/',
        },
        abilities: [
            {
                name: 'thick-fat',
                url: 'https://pokeapi.co/api/v2/ability/47/',
            },
            {
                name: 'hydration',
                url: 'https://pokeapi.co/api/v2/ability/93/',
            },
            {
                name: 'ice-body',
                url: 'https://pokeapi.co/api/v2/ability/115/',
            },
        ],
        types: [
            { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' },
            { name: 'ice', url: 'https://pokeapi.co/api/v2/type/15/' },
        ],
    },
    {
        name: 'grimer',
        id: 88,
        height: 9,
        weight: 300,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png',
        species: {
            name: 'grimer',
            url: 'https://pokeapi.co/api/v2/pokemon-species/88/',
        },
        abilities: [
            { name: 'stench', url: 'https://pokeapi.co/api/v2/ability/1/' },
            {
                name: 'sticky-hold',
                url: 'https://pokeapi.co/api/v2/ability/60/',
            },
            {
                name: 'poison-touch',
                url: 'https://pokeapi.co/api/v2/ability/143/',
            },
        ],
        types: [{ name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' }],
    },
    {
        name: 'muk',
        id: 89,
        height: 12,
        weight: 300,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png',
        species: {
            name: 'muk',
            url: 'https://pokeapi.co/api/v2/pokemon-species/89/',
        },
        abilities: [
            { name: 'stench', url: 'https://pokeapi.co/api/v2/ability/1/' },
            {
                name: 'sticky-hold',
                url: 'https://pokeapi.co/api/v2/ability/60/',
            },
            {
                name: 'poison-touch',
                url: 'https://pokeapi.co/api/v2/ability/143/',
            },
        ],
        types: [{ name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' }],
    },
    {
        name: 'shellder',
        id: 90,
        height: 3,
        weight: 40,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png',
        species: {
            name: 'shellder',
            url: 'https://pokeapi.co/api/v2/pokemon-species/90/',
        },
        abilities: [
            {
                name: 'shell-armor',
                url: 'https://pokeapi.co/api/v2/ability/75/',
            },
            {
                name: 'skill-link',
                url: 'https://pokeapi.co/api/v2/ability/92/',
            },
            {
                name: 'overcoat',
                url: 'https://pokeapi.co/api/v2/ability/142/',
            },
        ],
        types: [{ name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' }],
    },
    {
        name: 'cloyster',
        id: 91,
        height: 15,
        weight: 1325,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png',
        species: {
            name: 'cloyster',
            url: 'https://pokeapi.co/api/v2/pokemon-species/91/',
        },
        abilities: [
            {
                name: 'shell-armor',
                url: 'https://pokeapi.co/api/v2/ability/75/',
            },
            {
                name: 'skill-link',
                url: 'https://pokeapi.co/api/v2/ability/92/',
            },
            {
                name: 'overcoat',
                url: 'https://pokeapi.co/api/v2/ability/142/',
            },
        ],
        types: [
            { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' },
            { name: 'ice', url: 'https://pokeapi.co/api/v2/type/15/' },
        ],
    },
    {
        name: 'gastly',
        id: 92,
        height: 13,
        weight: 1,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png',
        species: {
            name: 'gastly',
            url: 'https://pokeapi.co/api/v2/pokemon-species/92/',
        },
        abilities: [
            {
                name: 'levitate',
                url: 'https://pokeapi.co/api/v2/ability/26/',
            },
        ],
        types: [
            { name: 'ghost', url: 'https://pokeapi.co/api/v2/type/8/' },
            { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
        ],
    },
    {
        name: 'haunter',
        id: 93,
        height: 16,
        weight: 1,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png',
        species: {
            name: 'haunter',
            url: 'https://pokeapi.co/api/v2/pokemon-species/93/',
        },
        abilities: [
            {
                name: 'levitate',
                url: 'https://pokeapi.co/api/v2/ability/26/',
            },
        ],
        types: [
            { name: 'ghost', url: 'https://pokeapi.co/api/v2/type/8/' },
            { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
        ],
    },
    {
        name: 'gengar',
        id: 94,
        height: 15,
        weight: 405,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
        species: {
            name: 'gengar',
            url: 'https://pokeapi.co/api/v2/pokemon-species/94/',
        },
        abilities: [
            {
                name: 'cursed-body',
                url: 'https://pokeapi.co/api/v2/ability/130/',
            },
        ],
        types: [
            { name: 'ghost', url: 'https://pokeapi.co/api/v2/type/8/' },
            { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
        ],
    },
    {
        name: 'onix',
        id: 95,
        height: 88,
        weight: 2100,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png',
        species: {
            name: 'onix',
            url: 'https://pokeapi.co/api/v2/pokemon-species/95/',
        },
        abilities: [
            {
                name: 'rock-head',
                url: 'https://pokeapi.co/api/v2/ability/69/',
            },
            { name: 'sturdy', url: 'https://pokeapi.co/api/v2/ability/5/' },
            {
                name: 'weak-armor',
                url: 'https://pokeapi.co/api/v2/ability/133/',
            },
        ],
        types: [
            { name: 'rock', url: 'https://pokeapi.co/api/v2/type/6/' },
            { name: 'ground', url: 'https://pokeapi.co/api/v2/type/5/' },
        ],
    },
    {
        name: 'drowzee',
        id: 96,
        height: 10,
        weight: 324,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png',
        species: {
            name: 'drowzee',
            url: 'https://pokeapi.co/api/v2/pokemon-species/96/',
        },
        abilities: [
            {
                name: 'insomnia',
                url: 'https://pokeapi.co/api/v2/ability/15/',
            },
            {
                name: 'forewarn',
                url: 'https://pokeapi.co/api/v2/ability/108/',
            },
            {
                name: 'inner-focus',
                url: 'https://pokeapi.co/api/v2/ability/39/',
            },
        ],
        types: [{ name: 'psychic', url: 'https://pokeapi.co/api/v2/type/14/' }],
    },
    {
        name: 'hypno',
        id: 97,
        height: 16,
        weight: 756,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png',
        species: {
            name: 'hypno',
            url: 'https://pokeapi.co/api/v2/pokemon-species/97/',
        },
        abilities: [
            {
                name: 'insomnia',
                url: 'https://pokeapi.co/api/v2/ability/15/',
            },
            {
                name: 'forewarn',
                url: 'https://pokeapi.co/api/v2/ability/108/',
            },
            {
                name: 'inner-focus',
                url: 'https://pokeapi.co/api/v2/ability/39/',
            },
        ],
        types: [{ name: 'psychic', url: 'https://pokeapi.co/api/v2/type/14/' }],
    },
    {
        name: 'krabby',
        id: 98,
        height: 4,
        weight: 65,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png',
        species: {
            name: 'krabby',
            url: 'https://pokeapi.co/api/v2/pokemon-species/98/',
        },
        abilities: [
            {
                name: 'hyper-cutter',
                url: 'https://pokeapi.co/api/v2/ability/52/',
            },
            {
                name: 'shell-armor',
                url: 'https://pokeapi.co/api/v2/ability/75/',
            },
            {
                name: 'sheer-force',
                url: 'https://pokeapi.co/api/v2/ability/125/',
            },
        ],
        types: [{ name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' }],
    },
    {
        name: 'kingler',
        id: 99,
        height: 13,
        weight: 600,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png',
        species: {
            name: 'kingler',
            url: 'https://pokeapi.co/api/v2/pokemon-species/99/',
        },
        abilities: [
            {
                name: 'hyper-cutter',
                url: 'https://pokeapi.co/api/v2/ability/52/',
            },
            {
                name: 'shell-armor',
                url: 'https://pokeapi.co/api/v2/ability/75/',
            },
            {
                name: 'sheer-force',
                url: 'https://pokeapi.co/api/v2/ability/125/',
            },
        ],
        types: [{ name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' }],
    },
    {
        name: 'voltorb',
        id: 100,
        height: 5,
        weight: 104,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png',
        species: {
            name: 'voltorb',
            url: 'https://pokeapi.co/api/v2/pokemon-species/100/',
        },
        abilities: [
            {
                name: 'soundproof',
                url: 'https://pokeapi.co/api/v2/ability/43/',
            },
            { name: 'static', url: 'https://pokeapi.co/api/v2/ability/9/' },
            {
                name: 'aftermath',
                url: 'https://pokeapi.co/api/v2/ability/106/',
            },
        ],
        types: [
            { name: 'electric', url: 'https://pokeapi.co/api/v2/type/13/' },
        ],
    },
    {
        name: 'electrode',
        id: 101,
        height: 12,
        weight: 666,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png',
        species: {
            name: 'electrode',
            url: 'https://pokeapi.co/api/v2/pokemon-species/101/',
        },
        abilities: [
            {
                name: 'soundproof',
                url: 'https://pokeapi.co/api/v2/ability/43/',
            },
            { name: 'static', url: 'https://pokeapi.co/api/v2/ability/9/' },
            {
                name: 'aftermath',
                url: 'https://pokeapi.co/api/v2/ability/106/',
            },
        ],
        types: [
            { name: 'electric', url: 'https://pokeapi.co/api/v2/type/13/' },
        ],
    },
    {
        name: 'exeggcute',
        id: 102,
        height: 4,
        weight: 25,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png',
        species: {
            name: 'exeggcute',
            url: 'https://pokeapi.co/api/v2/pokemon-species/102/',
        },
        abilities: [
            {
                name: 'chlorophyll',
                url: 'https://pokeapi.co/api/v2/ability/34/',
            },
            {
                name: 'harvest',
                url: 'https://pokeapi.co/api/v2/ability/139/',
            },
        ],
        types: [
            { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
            { name: 'psychic', url: 'https://pokeapi.co/api/v2/type/14/' },
        ],
    },
    {
        name: 'exeggutor',
        id: 103,
        height: 20,
        weight: 1200,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png',
        species: {
            name: 'exeggutor',
            url: 'https://pokeapi.co/api/v2/pokemon-species/103/',
        },
        abilities: [
            {
                name: 'chlorophyll',
                url: 'https://pokeapi.co/api/v2/ability/34/',
            },
            {
                name: 'harvest',
                url: 'https://pokeapi.co/api/v2/ability/139/',
            },
        ],
        types: [
            { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
            { name: 'psychic', url: 'https://pokeapi.co/api/v2/type/14/' },
        ],
    },
    {
        name: 'cubone',
        id: 104,
        height: 4,
        weight: 65,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png',
        species: {
            name: 'cubone',
            url: 'https://pokeapi.co/api/v2/pokemon-species/104/',
        },
        abilities: [
            {
                name: 'rock-head',
                url: 'https://pokeapi.co/api/v2/ability/69/',
            },
            {
                name: 'lightning-rod',
                url: 'https://pokeapi.co/api/v2/ability/31/',
            },
            {
                name: 'battle-armor',
                url: 'https://pokeapi.co/api/v2/ability/4/',
            },
        ],
        types: [{ name: 'ground', url: 'https://pokeapi.co/api/v2/type/5/' }],
    },
    {
        name: 'marowak',
        id: 105,
        height: 10,
        weight: 450,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png',
        species: {
            name: 'marowak',
            url: 'https://pokeapi.co/api/v2/pokemon-species/105/',
        },
        abilities: [
            {
                name: 'rock-head',
                url: 'https://pokeapi.co/api/v2/ability/69/',
            },
            {
                name: 'lightning-rod',
                url: 'https://pokeapi.co/api/v2/ability/31/',
            },
            {
                name: 'battle-armor',
                url: 'https://pokeapi.co/api/v2/ability/4/',
            },
        ],
        types: [{ name: 'ground', url: 'https://pokeapi.co/api/v2/type/5/' }],
    },
    {
        name: 'hitmonlee',
        id: 106,
        height: 15,
        weight: 498,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png',
        species: {
            name: 'hitmonlee',
            url: 'https://pokeapi.co/api/v2/pokemon-species/106/',
        },
        abilities: [
            { name: 'limber', url: 'https://pokeapi.co/api/v2/ability/7/' },
            {
                name: 'reckless',
                url: 'https://pokeapi.co/api/v2/ability/120/',
            },
            {
                name: 'unburden',
                url: 'https://pokeapi.co/api/v2/ability/84/',
            },
        ],
        types: [{ name: 'fighting', url: 'https://pokeapi.co/api/v2/type/2/' }],
    },
    {
        name: 'hitmonchan',
        id: 107,
        height: 14,
        weight: 502,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png',
        species: {
            name: 'hitmonchan',
            url: 'https://pokeapi.co/api/v2/pokemon-species/107/',
        },
        abilities: [
            {
                name: 'keen-eye',
                url: 'https://pokeapi.co/api/v2/ability/51/',
            },
            {
                name: 'iron-fist',
                url: 'https://pokeapi.co/api/v2/ability/89/',
            },
            {
                name: 'inner-focus',
                url: 'https://pokeapi.co/api/v2/ability/39/',
            },
        ],
        types: [{ name: 'fighting', url: 'https://pokeapi.co/api/v2/type/2/' }],
    },
    {
        name: 'lickitung',
        id: 108,
        height: 12,
        weight: 655,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png',
        species: {
            name: 'lickitung',
            url: 'https://pokeapi.co/api/v2/pokemon-species/108/',
        },
        abilities: [
            {
                name: 'own-tempo',
                url: 'https://pokeapi.co/api/v2/ability/20/',
            },
            {
                name: 'oblivious',
                url: 'https://pokeapi.co/api/v2/ability/12/',
            },
            {
                name: 'cloud-nine',
                url: 'https://pokeapi.co/api/v2/ability/13/',
            },
        ],
        types: [{ name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' }],
    },
    {
        name: 'koffing',
        id: 109,
        height: 6,
        weight: 10,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png',
        species: {
            name: 'koffing',
            url: 'https://pokeapi.co/api/v2/pokemon-species/109/',
        },
        abilities: [
            {
                name: 'levitate',
                url: 'https://pokeapi.co/api/v2/ability/26/',
            },
            {
                name: 'neutralizing-gas',
                url: 'https://pokeapi.co/api/v2/ability/256/',
            },
            { name: 'stench', url: 'https://pokeapi.co/api/v2/ability/1/' },
        ],
        types: [{ name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' }],
    },
    {
        name: 'weezing',
        id: 110,
        height: 12,
        weight: 95,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png',
        species: {
            name: 'weezing',
            url: 'https://pokeapi.co/api/v2/pokemon-species/110/',
        },
        abilities: [
            {
                name: 'levitate',
                url: 'https://pokeapi.co/api/v2/ability/26/',
            },
            {
                name: 'neutralizing-gas',
                url: 'https://pokeapi.co/api/v2/ability/256/',
            },
            { name: 'stench', url: 'https://pokeapi.co/api/v2/ability/1/' },
        ],
        types: [{ name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' }],
    },
    {
        name: 'rhyhorn',
        id: 111,
        height: 10,
        weight: 1150,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png',
        species: {
            name: 'rhyhorn',
            url: 'https://pokeapi.co/api/v2/pokemon-species/111/',
        },
        abilities: [
            {
                name: 'lightning-rod',
                url: 'https://pokeapi.co/api/v2/ability/31/',
            },
            {
                name: 'rock-head',
                url: 'https://pokeapi.co/api/v2/ability/69/',
            },
            {
                name: 'reckless',
                url: 'https://pokeapi.co/api/v2/ability/120/',
            },
        ],
        types: [
            { name: 'ground', url: 'https://pokeapi.co/api/v2/type/5/' },
            { name: 'rock', url: 'https://pokeapi.co/api/v2/type/6/' },
        ],
    },
    {
        name: 'rhydon',
        id: 112,
        height: 19,
        weight: 1200,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png',
        species: {
            name: 'rhydon',
            url: 'https://pokeapi.co/api/v2/pokemon-species/112/',
        },
        abilities: [
            {
                name: 'lightning-rod',
                url: 'https://pokeapi.co/api/v2/ability/31/',
            },
            {
                name: 'rock-head',
                url: 'https://pokeapi.co/api/v2/ability/69/',
            },
            {
                name: 'reckless',
                url: 'https://pokeapi.co/api/v2/ability/120/',
            },
        ],
        types: [
            { name: 'ground', url: 'https://pokeapi.co/api/v2/type/5/' },
            { name: 'rock', url: 'https://pokeapi.co/api/v2/type/6/' },
        ],
    },
    {
        name: 'chansey',
        id: 113,
        height: 11,
        weight: 346,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png',
        species: {
            name: 'chansey',
            url: 'https://pokeapi.co/api/v2/pokemon-species/113/',
        },
        abilities: [
            {
                name: 'natural-cure',
                url: 'https://pokeapi.co/api/v2/ability/30/',
            },
            {
                name: 'serene-grace',
                url: 'https://pokeapi.co/api/v2/ability/32/',
            },
            {
                name: 'healer',
                url: 'https://pokeapi.co/api/v2/ability/131/',
            },
        ],
        types: [{ name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' }],
    },
    {
        name: 'tangela',
        id: 114,
        height: 10,
        weight: 350,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png',
        species: {
            name: 'tangela',
            url: 'https://pokeapi.co/api/v2/pokemon-species/114/',
        },
        abilities: [
            {
                name: 'chlorophyll',
                url: 'https://pokeapi.co/api/v2/ability/34/',
            },
            {
                name: 'leaf-guard',
                url: 'https://pokeapi.co/api/v2/ability/102/',
            },
            {
                name: 'regenerator',
                url: 'https://pokeapi.co/api/v2/ability/144/',
            },
        ],
        types: [{ name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' }],
    },
    {
        name: 'kangaskhan',
        id: 115,
        height: 22,
        weight: 800,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png',
        species: {
            name: 'kangaskhan',
            url: 'https://pokeapi.co/api/v2/pokemon-species/115/',
        },
        abilities: [
            {
                name: 'early-bird',
                url: 'https://pokeapi.co/api/v2/ability/48/',
            },
            {
                name: 'scrappy',
                url: 'https://pokeapi.co/api/v2/ability/113/',
            },
            {
                name: 'inner-focus',
                url: 'https://pokeapi.co/api/v2/ability/39/',
            },
        ],
        types: [{ name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' }],
    },
    {
        name: 'horsea',
        id: 116,
        height: 4,
        weight: 80,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png',
        species: {
            name: 'horsea',
            url: 'https://pokeapi.co/api/v2/pokemon-species/116/',
        },
        abilities: [
            {
                name: 'swift-swim',
                url: 'https://pokeapi.co/api/v2/ability/33/',
            },
            {
                name: 'sniper',
                url: 'https://pokeapi.co/api/v2/ability/97/',
            },
            { name: 'damp', url: 'https://pokeapi.co/api/v2/ability/6/' },
        ],
        types: [{ name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' }],
    },
    {
        name: 'seadra',
        id: 117,
        height: 12,
        weight: 250,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png',
        species: {
            name: 'seadra',
            url: 'https://pokeapi.co/api/v2/pokemon-species/117/',
        },
        abilities: [
            {
                name: 'poison-point',
                url: 'https://pokeapi.co/api/v2/ability/38/',
            },
            {
                name: 'sniper',
                url: 'https://pokeapi.co/api/v2/ability/97/',
            },
            { name: 'damp', url: 'https://pokeapi.co/api/v2/ability/6/' },
        ],
        types: [{ name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' }],
    },
    {
        name: 'goldeen',
        id: 118,
        height: 6,
        weight: 150,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png',
        species: {
            name: 'goldeen',
            url: 'https://pokeapi.co/api/v2/pokemon-species/118/',
        },
        abilities: [
            {
                name: 'swift-swim',
                url: 'https://pokeapi.co/api/v2/ability/33/',
            },
            {
                name: 'water-veil',
                url: 'https://pokeapi.co/api/v2/ability/41/',
            },
            {
                name: 'lightning-rod',
                url: 'https://pokeapi.co/api/v2/ability/31/',
            },
        ],
        types: [{ name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' }],
    },
    {
        name: 'seaking',
        id: 119,
        height: 13,
        weight: 390,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png',
        species: {
            name: 'seaking',
            url: 'https://pokeapi.co/api/v2/pokemon-species/119/',
        },
        abilities: [
            {
                name: 'swift-swim',
                url: 'https://pokeapi.co/api/v2/ability/33/',
            },
            {
                name: 'water-veil',
                url: 'https://pokeapi.co/api/v2/ability/41/',
            },
            {
                name: 'lightning-rod',
                url: 'https://pokeapi.co/api/v2/ability/31/',
            },
        ],
        types: [{ name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' }],
    },
    {
        name: 'staryu',
        id: 120,
        height: 8,
        weight: 345,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png',
        species: {
            name: 'staryu',
            url: 'https://pokeapi.co/api/v2/pokemon-species/120/',
        },
        abilities: [
            {
                name: 'illuminate',
                url: 'https://pokeapi.co/api/v2/ability/35/',
            },
            {
                name: 'natural-cure',
                url: 'https://pokeapi.co/api/v2/ability/30/',
            },
            {
                name: 'analytic',
                url: 'https://pokeapi.co/api/v2/ability/148/',
            },
        ],
        types: [{ name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' }],
    },
    {
        name: 'starmie',
        id: 121,
        height: 11,
        weight: 800,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png',
        species: {
            name: 'starmie',
            url: 'https://pokeapi.co/api/v2/pokemon-species/121/',
        },
        abilities: [
            {
                name: 'illuminate',
                url: 'https://pokeapi.co/api/v2/ability/35/',
            },
            {
                name: 'natural-cure',
                url: 'https://pokeapi.co/api/v2/ability/30/',
            },
            {
                name: 'analytic',
                url: 'https://pokeapi.co/api/v2/ability/148/',
            },
        ],
        types: [
            { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' },
            { name: 'psychic', url: 'https://pokeapi.co/api/v2/type/14/' },
        ],
    },
    {
        name: 'mr-mime',
        id: 122,
        height: 13,
        weight: 545,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png',
        species: {
            name: 'mr-mime',
            url: 'https://pokeapi.co/api/v2/pokemon-species/122/',
        },
        abilities: [
            {
                name: 'soundproof',
                url: 'https://pokeapi.co/api/v2/ability/43/',
            },
            {
                name: 'filter',
                url: 'https://pokeapi.co/api/v2/ability/111/',
            },
            {
                name: 'technician',
                url: 'https://pokeapi.co/api/v2/ability/101/',
            },
        ],
        types: [
            { name: 'psychic', url: 'https://pokeapi.co/api/v2/type/14/' },
            { name: 'fairy', url: 'https://pokeapi.co/api/v2/type/18/' },
        ],
    },
    {
        name: 'scyther',
        id: 123,
        height: 15,
        weight: 560,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png',
        species: {
            name: 'scyther',
            url: 'https://pokeapi.co/api/v2/pokemon-species/123/',
        },
        abilities: [
            { name: 'swarm', url: 'https://pokeapi.co/api/v2/ability/68/' },
            {
                name: 'technician',
                url: 'https://pokeapi.co/api/v2/ability/101/',
            },
            {
                name: 'steadfast',
                url: 'https://pokeapi.co/api/v2/ability/80/',
            },
        ],
        types: [
            { name: 'bug', url: 'https://pokeapi.co/api/v2/type/7/' },
            { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' },
        ],
    },
    {
        name: 'jynx',
        id: 124,
        height: 14,
        weight: 406,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png',
        species: {
            name: 'jynx',
            url: 'https://pokeapi.co/api/v2/pokemon-species/124/',
        },
        abilities: [
            {
                name: 'oblivious',
                url: 'https://pokeapi.co/api/v2/ability/12/',
            },
            {
                name: 'forewarn',
                url: 'https://pokeapi.co/api/v2/ability/108/',
            },
            {
                name: 'dry-skin',
                url: 'https://pokeapi.co/api/v2/ability/87/',
            },
        ],
        types: [
            { name: 'ice', url: 'https://pokeapi.co/api/v2/type/15/' },
            { name: 'psychic', url: 'https://pokeapi.co/api/v2/type/14/' },
        ],
    },
    {
        name: 'electabuzz',
        id: 125,
        height: 11,
        weight: 300,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png',
        species: {
            name: 'electabuzz',
            url: 'https://pokeapi.co/api/v2/pokemon-species/125/',
        },
        abilities: [
            { name: 'static', url: 'https://pokeapi.co/api/v2/ability/9/' },
            {
                name: 'vital-spirit',
                url: 'https://pokeapi.co/api/v2/ability/72/',
            },
        ],
        types: [
            { name: 'electric', url: 'https://pokeapi.co/api/v2/type/13/' },
        ],
    },
    {
        name: 'magmar',
        id: 126,
        height: 13,
        weight: 445,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png',
        species: {
            name: 'magmar',
            url: 'https://pokeapi.co/api/v2/pokemon-species/126/',
        },
        abilities: [
            {
                name: 'flame-body',
                url: 'https://pokeapi.co/api/v2/ability/49/',
            },
            {
                name: 'vital-spirit',
                url: 'https://pokeapi.co/api/v2/ability/72/',
            },
        ],
        types: [{ name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' }],
    },
    {
        name: 'pinsir',
        id: 127,
        height: 15,
        weight: 550,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png',
        species: {
            name: 'pinsir',
            url: 'https://pokeapi.co/api/v2/pokemon-species/127/',
        },
        abilities: [
            {
                name: 'hyper-cutter',
                url: 'https://pokeapi.co/api/v2/ability/52/',
            },
            {
                name: 'mold-breaker',
                url: 'https://pokeapi.co/api/v2/ability/104/',
            },
            { name: 'moxie', url: 'https://pokeapi.co/api/v2/ability/153/' },
        ],
        types: [{ name: 'bug', url: 'https://pokeapi.co/api/v2/type/7/' }],
    },
    {
        name: 'tauros',
        id: 128,
        height: 14,
        weight: 884,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png',
        species: {
            name: 'tauros',
            url: 'https://pokeapi.co/api/v2/pokemon-species/128/',
        },
        abilities: [
            {
                name: 'intimidate',
                url: 'https://pokeapi.co/api/v2/ability/22/',
            },
            {
                name: 'anger-point',
                url: 'https://pokeapi.co/api/v2/ability/83/',
            },
            {
                name: 'sheer-force',
                url: 'https://pokeapi.co/api/v2/ability/125/',
            },
        ],
        types: [{ name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' }],
    },
    {
        name: 'magikarp',
        id: 129,
        height: 9,
        weight: 100,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png',
        species: {
            name: 'magikarp',
            url: 'https://pokeapi.co/api/v2/pokemon-species/129/',
        },
        abilities: [
            {
                name: 'swift-swim',
                url: 'https://pokeapi.co/api/v2/ability/33/',
            },
            {
                name: 'rattled',
                url: 'https://pokeapi.co/api/v2/ability/155/',
            },
        ],
        types: [{ name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' }],
    },
    {
        name: 'gyarados',
        id: 130,
        height: 65,
        weight: 2350,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png',
        species: {
            name: 'gyarados',
            url: 'https://pokeapi.co/api/v2/pokemon-species/130/',
        },
        abilities: [
            {
                name: 'intimidate',
                url: 'https://pokeapi.co/api/v2/ability/22/',
            },
            { name: 'moxie', url: 'https://pokeapi.co/api/v2/ability/153/' },
        ],
        types: [
            { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' },
            { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' },
        ],
    },
    {
        name: 'lapras',
        id: 131,
        height: 25,
        weight: 2200,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png',
        species: {
            name: 'lapras',
            url: 'https://pokeapi.co/api/v2/pokemon-species/131/',
        },
        abilities: [
            {
                name: 'water-absorb',
                url: 'https://pokeapi.co/api/v2/ability/11/',
            },
            {
                name: 'shell-armor',
                url: 'https://pokeapi.co/api/v2/ability/75/',
            },
            {
                name: 'hydration',
                url: 'https://pokeapi.co/api/v2/ability/93/',
            },
        ],
        types: [
            { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' },
            { name: 'ice', url: 'https://pokeapi.co/api/v2/type/15/' },
        ],
    },
    {
        name: 'ditto',
        id: 132,
        height: 3,
        weight: 40,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
        species: {
            name: 'ditto',
            url: 'https://pokeapi.co/api/v2/pokemon-species/132/',
        },
        abilities: [
            { name: 'limber', url: 'https://pokeapi.co/api/v2/ability/7/' },
            {
                name: 'imposter',
                url: 'https://pokeapi.co/api/v2/ability/150/',
            },
        ],
        types: [{ name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' }],
    },
    {
        name: 'eevee',
        id: 133,
        height: 3,
        weight: 65,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
        species: {
            name: 'eevee',
            url: 'https://pokeapi.co/api/v2/pokemon-species/133/',
        },
        abilities: [
            {
                name: 'run-away',
                url: 'https://pokeapi.co/api/v2/ability/50/',
            },
            {
                name: 'adaptability',
                url: 'https://pokeapi.co/api/v2/ability/91/',
            },
            {
                name: 'anticipation',
                url: 'https://pokeapi.co/api/v2/ability/107/',
            },
        ],
        types: [{ name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' }],
    },
    {
        name: 'vaporeon',
        id: 134,
        height: 10,
        weight: 290,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png',
        species: {
            name: 'vaporeon',
            url: 'https://pokeapi.co/api/v2/pokemon-species/134/',
        },
        abilities: [
            {
                name: 'water-absorb',
                url: 'https://pokeapi.co/api/v2/ability/11/',
            },
            {
                name: 'hydration',
                url: 'https://pokeapi.co/api/v2/ability/93/',
            },
        ],
        types: [{ name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' }],
    },
    {
        name: 'jolteon',
        id: 135,
        height: 8,
        weight: 245,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png',
        species: {
            name: 'jolteon',
            url: 'https://pokeapi.co/api/v2/pokemon-species/135/',
        },
        abilities: [
            {
                name: 'volt-absorb',
                url: 'https://pokeapi.co/api/v2/ability/10/',
            },
            {
                name: 'quick-feet',
                url: 'https://pokeapi.co/api/v2/ability/95/',
            },
        ],
        types: [
            { name: 'electric', url: 'https://pokeapi.co/api/v2/type/13/' },
        ],
    },
    {
        name: 'flareon',
        id: 136,
        height: 9,
        weight: 250,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png',
        species: {
            name: 'flareon',
            url: 'https://pokeapi.co/api/v2/pokemon-species/136/',
        },
        abilities: [
            {
                name: 'flash-fire',
                url: 'https://pokeapi.co/api/v2/ability/18/',
            },
            { name: 'guts', url: 'https://pokeapi.co/api/v2/ability/62/' },
        ],
        types: [{ name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' }],
    },
    {
        name: 'porygon',
        id: 137,
        height: 8,
        weight: 365,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png',
        species: {
            name: 'porygon',
            url: 'https://pokeapi.co/api/v2/pokemon-species/137/',
        },
        abilities: [
            { name: 'trace', url: 'https://pokeapi.co/api/v2/ability/36/' },
            {
                name: 'download',
                url: 'https://pokeapi.co/api/v2/ability/88/',
            },
            {
                name: 'analytic',
                url: 'https://pokeapi.co/api/v2/ability/148/',
            },
        ],
        types: [{ name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' }],
    },
    {
        name: 'omanyte',
        id: 138,
        height: 4,
        weight: 75,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png',
        species: {
            name: 'omanyte',
            url: 'https://pokeapi.co/api/v2/pokemon-species/138/',
        },
        abilities: [
            {
                name: 'swift-swim',
                url: 'https://pokeapi.co/api/v2/ability/33/',
            },
            {
                name: 'shell-armor',
                url: 'https://pokeapi.co/api/v2/ability/75/',
            },
            {
                name: 'weak-armor',
                url: 'https://pokeapi.co/api/v2/ability/133/',
            },
        ],
        types: [
            { name: 'rock', url: 'https://pokeapi.co/api/v2/type/6/' },
            { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' },
        ],
    },
    {
        name: 'omastar',
        id: 139,
        height: 10,
        weight: 350,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png',
        species: {
            name: 'omastar',
            url: 'https://pokeapi.co/api/v2/pokemon-species/139/',
        },
        abilities: [
            {
                name: 'swift-swim',
                url: 'https://pokeapi.co/api/v2/ability/33/',
            },
            {
                name: 'shell-armor',
                url: 'https://pokeapi.co/api/v2/ability/75/',
            },
            {
                name: 'weak-armor',
                url: 'https://pokeapi.co/api/v2/ability/133/',
            },
        ],
        types: [
            { name: 'rock', url: 'https://pokeapi.co/api/v2/type/6/' },
            { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' },
        ],
    },
    {
        name: 'kabuto',
        id: 140,
        height: 5,
        weight: 115,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png',
        species: {
            name: 'kabuto',
            url: 'https://pokeapi.co/api/v2/pokemon-species/140/',
        },
        abilities: [
            {
                name: 'swift-swim',
                url: 'https://pokeapi.co/api/v2/ability/33/',
            },
            {
                name: 'battle-armor',
                url: 'https://pokeapi.co/api/v2/ability/4/',
            },
            {
                name: 'weak-armor',
                url: 'https://pokeapi.co/api/v2/ability/133/',
            },
        ],
        types: [
            { name: 'rock', url: 'https://pokeapi.co/api/v2/type/6/' },
            { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' },
        ],
    },
    {
        name: 'kabutops',
        id: 141,
        height: 13,
        weight: 405,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png',
        species: {
            name: 'kabutops',
            url: 'https://pokeapi.co/api/v2/pokemon-species/141/',
        },
        abilities: [
            {
                name: 'swift-swim',
                url: 'https://pokeapi.co/api/v2/ability/33/',
            },
            {
                name: 'battle-armor',
                url: 'https://pokeapi.co/api/v2/ability/4/',
            },
            {
                name: 'weak-armor',
                url: 'https://pokeapi.co/api/v2/ability/133/',
            },
        ],
        types: [
            { name: 'rock', url: 'https://pokeapi.co/api/v2/type/6/' },
            { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' },
        ],
    },
    {
        name: 'aerodactyl',
        id: 142,
        height: 18,
        weight: 590,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png',
        species: {
            name: 'aerodactyl',
            url: 'https://pokeapi.co/api/v2/pokemon-species/142/',
        },
        abilities: [
            {
                name: 'rock-head',
                url: 'https://pokeapi.co/api/v2/ability/69/',
            },
            {
                name: 'pressure',
                url: 'https://pokeapi.co/api/v2/ability/46/',
            },
            {
                name: 'unnerve',
                url: 'https://pokeapi.co/api/v2/ability/127/',
            },
        ],
        types: [
            { name: 'rock', url: 'https://pokeapi.co/api/v2/type/6/' },
            { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' },
        ],
    },
    {
        name: 'snorlax',
        id: 143,
        height: 21,
        weight: 4600,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
        species: {
            name: 'snorlax',
            url: 'https://pokeapi.co/api/v2/pokemon-species/143/',
        },
        abilities: [
            {
                name: 'immunity',
                url: 'https://pokeapi.co/api/v2/ability/17/',
            },
            {
                name: 'thick-fat',
                url: 'https://pokeapi.co/api/v2/ability/47/',
            },
            {
                name: 'gluttony',
                url: 'https://pokeapi.co/api/v2/ability/82/',
            },
        ],
        types: [{ name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' }],
    },
    {
        name: 'articuno',
        id: 144,
        height: 17,
        weight: 554,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png',
        species: {
            name: 'articuno',
            url: 'https://pokeapi.co/api/v2/pokemon-species/144/',
        },
        abilities: [
            {
                name: 'pressure',
                url: 'https://pokeapi.co/api/v2/ability/46/',
            },
            {
                name: 'snow-cloak',
                url: 'https://pokeapi.co/api/v2/ability/81/',
            },
        ],
        types: [
            { name: 'ice', url: 'https://pokeapi.co/api/v2/type/15/' },
            { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' },
        ],
    },
    {
        name: 'zapdos',
        id: 145,
        height: 16,
        weight: 526,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png',
        species: {
            name: 'zapdos',
            url: 'https://pokeapi.co/api/v2/pokemon-species/145/',
        },
        abilities: [
            {
                name: 'pressure',
                url: 'https://pokeapi.co/api/v2/ability/46/',
            },
            { name: 'static', url: 'https://pokeapi.co/api/v2/ability/9/' },
        ],
        types: [
            { name: 'electric', url: 'https://pokeapi.co/api/v2/type/13/' },
            { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' },
        ],
    },
    {
        name: 'moltres',
        id: 146,
        height: 20,
        weight: 600,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png',
        species: {
            name: 'moltres',
            url: 'https://pokeapi.co/api/v2/pokemon-species/146/',
        },
        abilities: [
            {
                name: 'pressure',
                url: 'https://pokeapi.co/api/v2/ability/46/',
            },
            {
                name: 'flame-body',
                url: 'https://pokeapi.co/api/v2/ability/49/',
            },
        ],
        types: [
            { name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' },
            { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' },
        ],
    },
    {
        name: 'dratini',
        id: 147,
        height: 18,
        weight: 33,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png',
        species: {
            name: 'dratini',
            url: 'https://pokeapi.co/api/v2/pokemon-species/147/',
        },
        abilities: [
            {
                name: 'shed-skin',
                url: 'https://pokeapi.co/api/v2/ability/61/',
            },
            {
                name: 'marvel-scale',
                url: 'https://pokeapi.co/api/v2/ability/63/',
            },
        ],
        types: [{ name: 'dragon', url: 'https://pokeapi.co/api/v2/type/16/' }],
    },
    {
        name: 'dragonair',
        id: 148,
        height: 40,
        weight: 165,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png',
        species: {
            name: 'dragonair',
            url: 'https://pokeapi.co/api/v2/pokemon-species/148/',
        },
        abilities: [
            {
                name: 'shed-skin',
                url: 'https://pokeapi.co/api/v2/ability/61/',
            },
            {
                name: 'marvel-scale',
                url: 'https://pokeapi.co/api/v2/ability/63/',
            },
        ],
        types: [{ name: 'dragon', url: 'https://pokeapi.co/api/v2/type/16/' }],
    },
    {
        name: 'dragonite',
        id: 149,
        height: 22,
        weight: 2100,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
        species: {
            name: 'dragonite',
            url: 'https://pokeapi.co/api/v2/pokemon-species/149/',
        },
        abilities: [
            {
                name: 'inner-focus',
                url: 'https://pokeapi.co/api/v2/ability/39/',
            },
            {
                name: 'multiscale',
                url: 'https://pokeapi.co/api/v2/ability/136/',
            },
        ],
        types: [
            { name: 'dragon', url: 'https://pokeapi.co/api/v2/type/16/' },
            { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' },
        ],
    },
    {
        name: 'mewtwo',
        id: 150,
        height: 20,
        weight: 1220,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
        species: {
            name: 'mewtwo',
            url: 'https://pokeapi.co/api/v2/pokemon-species/150/',
        },
        abilities: [
            {
                name: 'pressure',
                url: 'https://pokeapi.co/api/v2/ability/46/',
            },
            {
                name: 'unnerve',
                url: 'https://pokeapi.co/api/v2/ability/127/',
            },
        ],
        types: [{ name: 'psychic', url: 'https://pokeapi.co/api/v2/type/14/' }],
    },
];

const abilities = Array.from(
    new Map(pokemons.flatMap((p) => p.abilities).map((p) => [p.name, p.url]))
).map(([name, image], id) => ({ name, image, id }));
const abilityNameToID = new Map(abilities.map((p) => [p.name, p.id]));
const species = Array.from(
    new Map(pokemons.map((p) => p.species).map((p) => [p.name, p.url]))
).map(([name, image], id) => ({ name, image, id }));
const speciesNameToID = new Map(species.map((p) => [p.name, p.id]));
const types = Array.from(
    new Map(pokemons.flatMap((p) => p.types).map((p) => [p.name, p.url]))
).map(([name, image], id) => ({ name, image, id }));
const typeNameToID = new Map(types.map((p) => [p.name, p.id]));
const pokemonToDb = pokemons.map(
    ({ id, height, image, name, weight, species, abilities, types }) => ({
        id,
        height,
        image,
        name,
        weight,
        speciesId: speciesNameToID.get(species.name)!,
        abilities,
        types,
    })
);
const pokemonToType = pokemons.flatMap((p) =>
    p.types.map((t) => ({
        pokemonId: p.id,
        typeId: typeNameToID.get(t.name),
    }))
);
const pokemonToAbility = pokemons.flatMap((p) =>
    p.types.map((t) => ({
        pokemonId: p.id,
        abilityId: abilityNameToID.get(t.name),
    }))
);

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    pokemonToDb.forEach(({ abilities, types, ...rest }) =>
        prisma.pokemon.create({
            data: {
                ...rest,
                abilities: {
                    connect: abilities.map((a) => ({
                        id: abilityNameToID.get(a.name),
                    })),
                },
                types: {
                    connect: types.map((t) => ({
                        id: typeNameToID.get(t.name),
                    })),
                },
            },
        })
    );
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
