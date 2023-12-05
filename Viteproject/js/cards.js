const cards = [
    {
        name: "Gible",
        type: "Dragon",
        region: "Sinnoh",
        image: "https://marriland.com/wp-content/plugins/marriland-core/images/pokemon/sprites/home/full/gible.png",

    },

    {
        name: "Dialga",
        type: "Dragon/Steel",
        region: "Sinnoh",
        image: "https://vignette.wikia.nocookie.net/vsbattles/images/3/31/483Dialga_DP_anime.png/revision/latest?cb=20150702195325",

    },

    {
        name: "Torterra",
        type: "Grass/Ground",
        region: "Sinnoh",
        image: "https://marriland.com/wp-content/plugins/marriland-core/images/pokemon/sprites/home/full/torterra.png",

    },

    {
        name: "Lucario",
        type: "Fighting/Steel",
        region: "Sinnoh",
        image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-go/e/ec/448.png",

    },

    {
        name: "Darmanitan",
        type: "Fire",
        region: "Unova",
        image: "https://img.pokemondb.net/artwork/vector/large/darmanitan-standard.png",

    },

    {
        name: "Hydreigon",
        type: "Dark/Dragon",
        region: "Unova",
        image: "https://img00.deviantart.net/f2d0/i/2017/295/7/5/hydreigon_by_gyarados10-dbrfqiu.png",

    },

    {
        name: "Emboar",
        type: "Fighting/Fire",
        region: "Unova",
        image: "https://vignette3.wikia.nocookie.net/pokemon/images/4/47/500Emboar_BW_anime.png/revision/latest?cb=20160216043256",

    },

    {
        name: "Oshawatt",
        type: "Water",
        region: "Unova",
        image: "https://pre00.deviantart.net/df13/th/pre/f/2012/246/7/e/oshawott_by_kizarin-d5dh4zm.png",

    },

    {
        name: "Moltres",
        type: "Fire/Flying",
        region: "Kanto",
        image: "https://th.bing.com/th/id/OIP.V3Sed8ZjGy5UnE2LFWsclAHaFr?rs=1&pid=ImgDetMain",

    },

    {
        name: "Charizard",
        type: "Fire/Flying",
        region: "Kanto",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1f/Pok%C3%A9mon_Charizard_art.png",

    },

    {
        name: "Blastoise",
        type: "Water",
        region: "Kanto",
        image: "https://orig00.deviantart.net/aa7e/f/2015/082/2/c/009_blastoise_by_rayo123000-d8mw3f1.png",

    },

    {
        name: "Lapras",
        type: "Water/Ice",
        region: "Kanto",
        image: "https://img.pokemondb.net/artwork/vector/large/lapras.png",

    },

    {
        name: "Treecko",
        type: "Grass",
        region: "Hoenn",
        image: "https://gamepress.gg/pokemongo/sites/pokemongo/files/2017-08/252_1.png",

    },

    {
        name: "Gardevoir",
        type: "Psychic/Fairy",
        region: "Hoenn",
        image: "https://img00.deviantart.net/e4ef/i/2016/195/c/e/gardevoir_vector_by_pokemon_vector_art-daa1s70.png",

    },

    {
        name: "Slaking",
        type: "Normal",
        region: "Hoenn",
        image: "https://th.bing.com/th/id/R.46123c6534e6c774b982b1bead41d2b0?rik=VBWg7mGUVRtSBQ&pid=ImgRaw&r=0",

    },

    {
        name: "Magikarp",
        type: "Water",
        region: "Hoenn",
        image: "https://th.bing.com/th/id/R.ce2a1196a61367d890977a739cfeeafc?rik=q7h1tozdp3k0Dw&pid=ImgRaw&r=0",

    },

    {
        name: "Kyogre",
        type: "Water",
        region: "Hoenn",
        image: "https://vignette.wikia.nocookie.net/pokeverse/images/0/09/Kyogre_by_porygon2z-db3q9nn.png/revision/latest?cb=20180914230412",

    },

    {
        name: "Xerneas",
        type: "Fairy",
        region: "Kalos",
        image: "https://th.bing.com/th/id/R.c2d2a3a977a79b649926d0a5696a1400?rik=DgQdSUVnXXMMkA&pid=ImgRaw&r=0",

    },


    {
        name: "Aggron",
        type: "Steel/Rock",
        region: "Kalos",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/306.png",

    },

    {
        name: "Greninja",
        type: "Water/Dark",
        region: "Kalos",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/905d008d-e774-4f04-8d1b-6aac3ef243c4/dam41b1-3c37f47f-d179-4a26-b84b-f69f031c31b6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkwNWQwMDhkLWU3NzQtNGYwNC04ZDFiLTZhYWMzZWYyNDNjNFwvZGFtNDFiMS0zYzM3ZjQ3Zi1kMTc5LTRhMjYtYjg0Yi1mNjlmMDMxYzMxYjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.m9JKsDV0bzwYqXPF-CzjsinXnlsMuhUKCrhPEWhxlDw",

    },

    {
        name: "Tyrunt",
        type: "Rock/Dragon",
        region: "Kalos",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/696.png",

    },

    {
        name: "Hoopa",
        type: "Psychic/Ghost",
        region: "Kalos",
        image: "https://th.bing.com/th/id/R.f7e928fc762864a77a460a97af6cae8b?rik=WAnGZ99BFdRvmg&pid=ImgRaw&r=0",

    },

    {
        name: "Litten",
        type: "Fire",
        region: "Alola",
        image: "https://i.pinimg.com/originals/3d/24/45/3d24456e8d301cd5a9b3b1216e07cb92.png",

    },

    {
        name: "Bewear",
        type: "Normal/Fighting",
        region: "Alola",
        image: "https://vignette.wikia.nocookie.net/nintendo/images/0/04/Bewear.png/revision/latest?cb=20160724005829&path-prefix=en",

    },

    {
        name: "Silvally",
        type: "Normal",
        region: "Alola",
        image: "https://www.serebii.net/swordshield/pokemon/773.png",

    },

    {
        name: "Lunala",
        type: "Psychic/Ghost",
        region: "Alola",
        image: "https://marriland.com/wp-content/plugins/marriland-core/images/pokemon/sprites/home/full/lunala.png",

    }
];

export { cards };