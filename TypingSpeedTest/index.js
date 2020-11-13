const words = ["The greatest glory in living lies not in never falling, but in rising every time we fall : Nelson Mandela",
                "our time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking : Steve Jobs",
                "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough : Oprah Winfrey",
                "Spread love everywhere you go. Let no one ever come to you without leaving happier :Mother Teresa",
                "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart : Helen Keller"
            ]
const typingMsg = document.getElementById("typingMsg");
const userTypedMsg = document.getElementById("userTypedMsg");
userTypedMsg.disabled = false;
const btn = document.getElementById("btn");
var startTime,endTime;

// function to print words and starting the time
const printwordsAndStartCount = () =>{
    var index = Math.floor(Math.random()*words.length);
    console.log("Index : "+index);
    typingMsg.innerText = words[index];
    var date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
    console.log("Start Time : "+startTime);
}
// function to stop and give result
const stopCount = () =>{
    var date = new Date();
    endTime = date.getTime();
    const totalTime = Math.floor((endTime-startTime)/1000);
    console.log("Total Time "+totalTime);
    const userstringCount = userTypedMsg.value;
    const wordCount = wordCounter(userstringCount);
    const speed =Math.round((wordCount/totalTime)*60); // gives in minutes per second
    console.log("speed is "+speed);
    var resultSpeed = "Your typing speed is "+ speed +" words per minutes ";
    resultSpeed = resultSpeed + compareWords(typingMsg.innerText,userstringCount);
    typingMsg.innerText = resultSpeed;
    userTypedMsg.value="";


}
const compareWords = (str1,str2) => {
    const words1Count = str1.split(" ");
    const words2Count = str2.split(" ");
    var count = 0;
    words1Count.forEach(function (item,index){
        if(item == words2Count[index])
            count++;
    })
    const errorWords = words1Count.length-count;
    return (count+" correct out of "+words1Count.length +" and the total number of error are "+errorWords );


}
const wordCounter = (str) =>{
    var count = str.split(" ").length;
    console.log("Count : "+count);
    return count;
    
}

// if clicked on start then only text area is enabled otherwise disabled
btn.addEventListener("click",function(){
    if(this.innerText=="Start"){
        userTypedMsg.disabled = false;
        printwordsAndStartCount();

    }
    else if(this.innerText == "Done"){
        userTypedMsg.disabled = true;
        btn.innerText = "Start";
        stopCount();
    }
});

