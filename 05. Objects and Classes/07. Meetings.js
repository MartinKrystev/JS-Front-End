function meetings(arr) {
   
    let meetingList = {};
    for (const meeting of arr) {
        
        let [day, name] = meeting.split(' ');
        if(!meetingList.hasOwnProperty(day)) {
            meetingList[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (const meeting in meetingList) {
        console.log(meeting + " -> " + meetingList[meeting]);
    }
}

// meetings(
//     ['Monday Peter',
//     'Wednesday Bill',
//     'Monday Tim',
//     'Friday Tim']
// );