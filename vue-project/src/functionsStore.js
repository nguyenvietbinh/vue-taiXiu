
export function useMyFunction() {
    const kiemTraTienCuoc = (input, lim) => {
        if (!isNaN(input)) {
            parseInt(input)
            if ((input <= 0) || (input > lim)) {
                return false
            } else {
                return true
            }
        } else {
            return false
        }
    }
    return {
        kiemTraTienCuoc
    }
}