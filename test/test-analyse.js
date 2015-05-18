/*global describe:true, it:true, before:true, after:true */

var must    = require('must'),
    fs        = require('fs'),
    path      = require('path'),

    autoform = require('../index');

function readPage(pageName) {
    return fs.readFileSync(path.join(__dirname, pageName + '.html')).toString();
}

function writeFromInfo(array, pageName) {
    return fs.writeFileSync(path.join(__dirname, pageName + '.csv'), array.join('\n'));
}

describe('Analyse file', function() {
    var basic,
        detail,
        upload;

    before(function () {
        basic = readPage('basic');
        detail = readPage('detail');
        upload = readPage('upload');
    });

    it('basic page', function (done) {
        autoform.analyse(basic, 'basic').then(function (ret) {
            writeFromInfo(ret, "basic");
            ret.length.must.be(11);
            done();
        }).catch(done);

    });

    it('detail page', function (done) {
        autoform.analyse(detail, 'detail').then(function (ret) {
            writeFromInfo(ret, "detail");
            ret.length.must.be(33);
            done();
        }).catch(done);

    });

    it('upload page', function (done) {
        autoform.analyse(upload, 'upload').then(function (ret) {
            writeFromInfo(ret, "upload");
            ret.length.must.be(5);
            done();
        }).catch(done);

    });
});
