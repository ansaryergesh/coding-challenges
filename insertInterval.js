var insert = function(intervals, n) {
    let i, l;
    
    /** 
     * General idea is to first find where we fit in, merge the new interval with that interval and repeat
     *  There are 6 positions: 
     *  to left, to right, 
     *  to left with overlap, to right with overlap
     *  completely contained, completely containing
     *
     *  Each position needs a slightly different treatment, except the 2 overlap ones turn out to be the same logic
     *  The if statements to capture all 6 just need to carefully written down, considering what is an overlap and what isn't
     **/
    
   
    // Shortcut
    if (intervals.length === 0) {
        return [n];
    }
    
    // Find the first interval we interact with
    for (i = 0, l = intervals.length; i < l; i++) {
        let o = intervals[i];
             
        // all 6 posibilities:
        if (n[0] >= o[0] && o[1] >= n[1]) {
            
            // #1 new is inside, do nothing and done: it's already contained
            return intervals;
            
        } else if (n[0] > o[1]) {
            
            // #2 new is to right completely
            if (i === intervals.length - 1) {
                // insert at end if last one and done
                intervals.push(n);
                return intervals;
            } else {
                // else continue the loop, we can't assume it will fit here
                continue;
            }
            
        } else if (n[1] < o[0]) {
            
            // #3 new is to left completely, insert here and done
            intervals.splice(i, 0, n);
            return intervals;
            
        } else if (n[0] >= o[0] && n[1] >= o[1]) {
            
            // #4 new is to right but with an overlap: a merge needs to happen
            
            // remove old
            old = intervals.splice(i, 1)[0];
            
            // repeat with old and new merged, as the new interval could have further overlaps
            let merged = merge(old, n);

            return insert(intervals, merged);
            
        } else if (n[1] >= o[0] && n[1] <= o[1]) {

            // #5 new is to left but with an overlap: a merge needs to happen
                        
            // remove old
            old = intervals.splice(i, 1)[0];
            
            // repeat with old and new merged, as the new interval could have further overlaps
            let merged = merge(old, n);
          
            return insert(intervals, merged);
            
        } else if (n[0] < o[0] && n[1] > o[1]) {
            // #6 new envelopes this old interval
                
            // old needs to be removed
            old = intervals.splice(i, 1);
            
            // repeat with new    
            return insert(intervals, n);
                   
        } else {
            console.log('your code is broke');
        }  
        
    }

};

var merge = function(i1,i2) {
    // simple function to make a new range out of two
    let start = Math.min(i1[0], i2[0]);
    let end = Math.max(i1[1], i2[1]);
    
    return [start, end];
}