type HashMap = {
    [key: number]: number
}

export function findFirstRepeated(gifts: number[]) {
    const map: HashMap = {};
    const repeteadGifts = gifts.filter((value) => {
        if (map[value]) {
            return value;
        } else {
            map[value] = 1;            
        }
    });
    return repeteadGifts[0] ?? -1;
}