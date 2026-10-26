export const getNotes = (req, res) => {
    return res.json({
        status: 'success',
        data: { notes }
    });
};

export const getNoteById = (req, res) => {
};