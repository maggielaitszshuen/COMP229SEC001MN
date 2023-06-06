/*<!---File name: index.server.controller.js-->
<!---Student name: Tsz Shuen Lai-->
<!---Student ID: 301278443-->
<!---Date: 1 Jun 2023-->*/

exports.render = function (req, res) {
    res.render('index', {
    title: 'Hello World'
    })
};