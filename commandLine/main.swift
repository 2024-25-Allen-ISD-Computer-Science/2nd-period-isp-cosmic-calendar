func getInput(want: String, Question: String) -> String {
    print(Question)
    if let  want = readLine() {
        return want
    } else {
        return "No input"
    }
}

func main() {
    var correct = true
    repeat {
        let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        var month = getInput(want: "month", Question: "What month is it?")
        if let holder = Int(month){
            let monthValue = holder - 1
            let convertedMonth = months[monthValue]
            month = String(convertedMonth)
        }
        // Asking user for input day and year
        let day = getInput(want: "day", Question: "What day is it?")
        let year = getInput(want: "year", Question: "What year is it?")
        // Returning entered day
        print("It is " + month + " " + day + " " + year)
        // Ask user if the date entered is correct
        print("Is this date correct (y/n)")
        var ui = readLine()
        if ui == "n" {
            correct = false
        }
    } while correct == false
    
        print("What celestial body do you want the calendar of?")
    // This next bit is just used for NASA HUNCH Example not actually working
    
    let convertTo = readLine()
    if convertTo == "Moon" {
        print("Waning Cresent 2024")
    } else {
        print("Sol 632")
    }
}
main()
