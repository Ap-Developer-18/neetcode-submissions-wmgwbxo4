let s = "jar";
let t = "jam";

class Solution {
  isAnagram(s, t) {
    if(s.length !== t.length){
        return false
    }

    let obj = {};

    for (let char of s) {
      obj[char] = (obj[char] || 0) + 1;
    }

    for (let char of t) {
      obj[char] = (obj[char] || 0) - 1;
    }

    const isAnagram = Object.values(obj).every((val) => val == 0);

    if (isAnagram) {
    return true
    } else {
     return false
    }
  }
}

const obj = new Solution();
obj.isAnagram(s, t);