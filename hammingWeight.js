var hammingWeight = function(n) {
    var res = n.toString(2);
    var count = 0;
    for (var i=0; i<res.length; i++) {
        if (res[i] == 1) {
            count++;
        }
    }
    return count;
};