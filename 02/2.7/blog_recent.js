const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    getTitles(req, res);
}).listen(8080, function() {
    console.log('Server running at http://localhost:8080/');
});

function getTitles(req, res) {
    if (req.url === '/') {
        fs.readFile('./titles.json', (err, data) => {
            if (err) {
                hasError(err, res);
            } else {
                getTemplate(data, res);
            }
        });
    }

}

function getTemplate(data, res) {
    const titles = JSON.parse(data.toString());
    fs.readFile('./template.html', (err, data) => {
        if (err) {
            hasError(err, res);
        } else {
            formatHtml(data, titles, res);
        }
    });
}

function formatHtml(data, titles, res) {
    const tmpl = data.toString();
    const html = tmpl.replace('%', titles.join('</li><li>'));
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
}

function hasError(err, res) {
    console.error(err);
    res.end('Server Error');
}

