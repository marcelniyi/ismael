

function encrypt(){
    var keys = {
        a:"₡",
        b:"₲",
        c:"₰",
        d:"₣",
        e:"ƒ",
        f:"₥",
        g:"₦",
        h:"₧",
        i:"؋",
        j:"₩",
        k:"₪",
        l:"₭",
        m:"₴",
        n:"₳",
        o:"૱",
        p:"₠",
        q:"₹",
        r:"£",
        s:"₢",
        t:"¥",
        u:"֏",
        v:"₱",
        x:"₯",
        w:"€",
        y:"㍐",
        z:"₮",
    }
    var plain = document.getElementById("plainText").value;
    var hash = document.getElementById("encryptedText");
    var newvalue = plain.split(""); 
    //console.log(newvalue);
    var newValue1 = [];
    newvalue.forEach((element, index) => {
        if(element === " "){
            newValue1.push(element);
        }else{
            newValue1.push(keys[element]);
        }
        
    });
    var joinArray = newValue1.join("");
    hash.value=joinArray;

}





document.getElementById("plainText1").value="₧ƒ₭₭૱ ₲£૱¥₧ƒ£";

function decrypt1(){
    var plain = document.getElementById("plainText1").value;
    var hash = document.getElementById("encryptedText1").value="hello there brother";

}