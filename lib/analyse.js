/**
 * Created by lihe on 5/11/15.
 */

var jquery  = require('jquery'),
    env     = require('jsdom').env,
    Promise = require('bluebird'),

    analyse,
    __findLabel;


/**
 * analyse the web page
 * @param html can be html string, filename, or url
 * @param prefix indicate the page name
 */
analyse = function analyse (html, prefix) {
    var $,
        count = 0,
        ret = [];

    return new Promise(function (resolve, reject) {
        env(html, function (errors, window) {
            if (errors) {
                return reject(errors);
            }

            $ = jquery(window);

            $('form').each(function (index, form) {
                if (!form.name) {
                    return;
                }
                $(form).find(':input').each(function (i, input) {
                    if (!input.name) {
                        return;
                    }
                    count += 1;
                    ret.push(count + ',' +
                        prefix + '.' + form.name + '.' + input.name + ',' +
                        $(__findLabel($, input)).text());
                });
            });

            resolve(ret);
        });
    });
};

/**
 * find closest label
 * @private
 */
__findLabel = function __findLabel ($, input) {
    var ret = $(input).siblings('label:first');
    if (ret.length === 0) {
        input = $(input).parent(':first')[0];
        if (input.tagName === 'FORM') {
            return 'No Label';
        }
        return __findLabel($, input);
    } else {
        return ret[0];
    }
};

module.exports.analyse = analyse;