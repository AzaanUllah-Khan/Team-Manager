
var name = prompt("Wjhat do you want to name your Team")
var teamList = []
var num = + prompt("How many players do you want to add")
var flag = false
for (let i = 0; i < num; i++) {
    var user = prompt("Enter player")
    teamList.push(user)
}
console.log(teamList)
var changes = prompt("Doyou want any changes in this team")
if (changes == "yes") {
    var typeChange = prompt("Do you want to 'DELETE' or 'ADD MORE' or 'SORT'")
    var change = "yes"
}
else {
    console.log("This is your final team i.e : " + teamList)
    change = "no"
}
if (change == "yes" && typeChange == "DELETE") {
    var remove = prompt("This is Your team whihc player do you want to remove")
    var index = teamList.indexOf(remove)
    for (let i = 0; i < teamList.length; i++) {
        if (index !== -1) {
            teamList.splice(index, 1); // remove the item from the array
            console.log(remove + " has been removed from the array. The final array is now: " + teamList);
            break;
        } else {
            console.log(remove + " is not in the array.");
        }
    }
}
else if (change == "yes" && typeChange == "ADD") {
    var add = prompt("This is Your team whihc player do you want to add")
    var index = teamList.indexOf(add)
    for (let i = 0; i < teamList.length; i++) {
        teamList.push(add); // remove the item from the array
        console.log(add + " has been added to the array. The final array is now: " + teamList);
        break;
    }
}
else if (change == "yes" && typeChange == "SORT") {
    console.log("Sorted array is " + teamList.sort)
}
else {
    console.log("Ok the final array is " + teamList)
}
var last = prompt("do you want to check a member of the team")
if (last == "yes") {
    var secure = false
    var check = prompt("Enter the name of player to check whether if it is in the team or not")
    for (i = 0; i < teamList.length; i++) {
        if (check == teamList[i]) {
            console.log(check + " is in the team")
            secure = true
            break
        }
    }
    if (secure == false) {
        console.log(check + " is not in the team")

    }
}
else {
    console.log(teamList)
}
document.write("<center>"+"<h1>"+'<table border = "1">'+"<tr>"+"<td>"+name+"</td>"+"</tr>"+"</table>"+"</h1>"+"</center>")
document.write("<center>"+"<h1>"+'<table border = "1">'+"<tr>"+"<td>"+teamList+"</td>"+"</table>"+"</h1>"+"</center>")
