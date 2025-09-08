export const index = function index(req, res) {
    res.render('index', { title: 'Home' });
};

export const about = function about(req, res) {
    res.render('about', { title: 'About' });
};

export const notFound = function notFound(req, res) {
    res.status(404).render('404', { title: 'Not Found' });
};