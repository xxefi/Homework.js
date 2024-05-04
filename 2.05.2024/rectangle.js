function LengthOrHeight(length, height) {
    if (height === undefined) {
        return length * length;
    }
    return length * height;
}
console.log(LengthOrHeight(12));
