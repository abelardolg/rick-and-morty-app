
export const hasFilterData = (payload) => {
    return !((payload.name.length === 0) && (payload.status.length === 0));
}