export const index = function index(req, res) {
    res.render('index');
};

export const about = function about(req, res) {
    res.render('about');
};

export const notFound = function notFound(req, res) {
    res.status(404).render('404');
};