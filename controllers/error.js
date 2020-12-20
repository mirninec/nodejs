exports.get404 = (req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Страница не найдена',
        path: '',
        url: req.path,
        ip: req.ip
    });
}