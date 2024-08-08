export function checkIfCorrect(email: string, password: string) {
    return email === process.env.ADMIN_mail && password === process.env.ADMIN_password;
}

export function splitArrayIntoChunks<T>(array: T[], chunkSize: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);
        result.push(chunk);
    }
    return result;
}