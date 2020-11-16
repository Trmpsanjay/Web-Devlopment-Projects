function checkLovePercentage() {
    //  Validations
    const yourName = document.getElementById("yourName").value;
    const loverName = document.getElementById("loverName").value;
    if (yourName === "") {
        alert("Your Name Cannot Be Empty");
    } else if (yourName.length <= 3) {
        alert("Name Must Be More Than 3 Charecters");
    }
    // debugger;
    else if (loverName === "") {
        alert("Lover Name Cannot Be Empty");
    } else if (loverName.length <= 3) {
        alert("Name Must Be More Than 3 Charecters");
    } else {
        const lovePercentage = Math.round(Math.random() * 100);
        document.getElementById("lovePercentage").value = lovePercentage

    }



}


// if (loverName === "") {
//     alert("Lover Name Cannot Be Empty");
// } else if (loverName.length <= 3 ) {
//     alert("Name Must Be more than 3 charecters");
// }