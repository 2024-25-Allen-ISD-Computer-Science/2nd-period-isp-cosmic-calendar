func getInput(want: String, Question: String) -> String {
    print(Question)
    if let  want = readLine() {
        return want
    } else {
        return "No input"
    }
}  
func main() {
    let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var month = getInput(want: "month", Question: "What month is it?")
    if let holder = Int(month){
        let monthValue = holder - 1
        let convertedMonth = months[monthValue]
        month = String(convertedMonth)
    }
    let day = getInput(want: "day", Question: "What day is it?")
    let year = getInput(want: "year", Question: "What year is it?")
    print("It is " + month + " " + day + " " + year)
    
}
main()
