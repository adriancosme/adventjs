function manufacture(gifts: string[], materials: string) {
    console.log(gifts, materials);
    // Code here
    return []
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

manufacture(gifts2, materials2) // ["puzzle"]

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

manufacture(gifts3, materials3) // []