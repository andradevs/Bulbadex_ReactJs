class Pokemon {
    constructor(poke) {

        this.id = poke.id;
        this.name = poke.name;
        this.types = this._getTypes(poke.types);
        this.sprite = poke.sprites.front_default;
        this.height = this._Convert(poke.height);
        this.weight = this._Convert(poke.weight);
        this.stats = this._getStats(poke.stats)
    }

    _getTypes(types) {
        if (types.length > 0) {
            types = types.map(type => {
                return type.type.name
            })
            types = types.reverse().join("/")
        }
        return types
    }

    _Convert(unit) {
        return unit / 10
    }

    _getStats(stats) {
        return stats.map(stat => {
            return {
                subject: stat.stat.name.toUpperCase(),
                A: stat.base_stat
            }
        })
    }
}

export default Pokemon;