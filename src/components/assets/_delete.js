export const _delete = (id, arr) => {
    const idx = arr.findIndex((el) => el.id === id);
    return [
        ...arr.slice(0, idx),
        ...arr.slice(idx + 1)
    ];
}
