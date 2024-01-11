export function findNaughtyStep(original: string, modified: string) {
    if (original.length === modified.length) {
        return '';
    }    
    const [shorterStr, longerStr] = [original, modified].sort(
        (a, b) => a.length - b.length
    );

    const result = [...longerStr].filter((char, index) => {
        if(shorterStr[index] !== longerStr[index]) {
            return char
        }
    });

    return result.at(0);
}