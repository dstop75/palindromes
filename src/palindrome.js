var palindrome = {};

palindrome.count = function(phrases) {
    var count = 0;
    phrases.forEach(function(phrase) {
        var concat = phrase.split(' ').join('');
        var lower = concat.toLowerCase();
        var reverse = lower.split('').reverse().join('');
        if (lower === reverse) {
            count += 1;
        }
    });
    return count;
};
