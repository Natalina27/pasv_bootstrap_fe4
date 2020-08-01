export const _deleteCounter = (id, list) => {
    const idx =list.findIndex((el) => el.id === id);
    return [
        ...list.slice(0, idx),
        ...list.slice(idx + 1)
    ];
}
