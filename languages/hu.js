/*!
 * numeral.js language configuration
 * language : Hungarian (hu)
 * author : Peter Bakondy : https://github.com/pbakondy
 */
(function () {
    var language = {
        delimiters: {
            thousands: '\xa0',
            decimal: ','
        },
        abbreviations: {
            thousand: 'E',  // ezer
            million: 'M',   // millió
            billion: 'Mrd', // milliárd
            trillion: 'T'   // trillió
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: '\xa0Ft'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numeral && this.numeral.language) {
        this.numeral.language('hu', language);
    }
}());