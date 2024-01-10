export function manufacture(gifts: string[], materials: string) {
    return gifts.filter((gift) => {
        return [...gift].every((char) => materials.includes(char));
    });
};