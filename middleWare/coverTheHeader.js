const { format } = require('date-fns');

const hidden = (req, res, next) => {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'dd/MM/yyyy HH:mm:ss', { locale: require('date-fns/locale/he') });

    res.setHeader('x-Powered-By', 'unknown');
    res.setHeader('Date', formattedDate);

    next();
};

module.exports = hidden;
