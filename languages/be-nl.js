/*! 
 * numeral.js language configuration
 * language : belgium-dutch (be-nl)
 * author : Dieter Luypaert : https://github.com/moeriki
 */
(function () {
    var language = {
        delimiters: {
            thousands: '\xa0',
            decimal  : ','
        },
        abbreviations: {
            thousand : 'k',
            million  : '\xa0mln',
            billion  : '\xa0mld',
            trillion : '\xa0bln'
        },
        ordinal : function (number) {
            var remainder = number % 100;
            return (number !== 0 && remainder <= 1 || remainder === 8 || remainder >= 20) ? 'ste' : 'de';
        },
        currency: {
            symbol: '€\xa0'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numeral && this.numeral.language) {
        this.numeral.language('be-nl', language);
    }
}());