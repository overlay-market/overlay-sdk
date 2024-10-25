export function paginate(data, page, pageSize) {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return {
        data: data.slice(start, end),
        total: data.length,
    };
}
//# sourceMappingURL=paginate.js.map