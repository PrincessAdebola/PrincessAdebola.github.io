document.addEventListener("DOMContentLoaded", function () {
    const slackNameElement =document.querySelector("[data-testid='slackUserName']");
    const slackImageElement = document.querySelector("[data-testid='slackDisplayImage']");
    const currentDayElement =document.querySelector("[data-testid='currentDayOfTheWeek']");
    const currentUTCTimeElememt = document.querySelector("[data-testid='currentUTCTime']");
    
    // Get the current date and time
    const now = new Date ();

    // Set Slack name
    slackNameElement.textContent = "Adebola Adewara";

    // Set Slack Profile Picture
    slackImageElement.src = "https://ca.slack-edge.com/T05FFAA91JP-U05RD4X8NTE-a4250ef2567e-512";
    slackImageElement.alt = "Adebola Adewara";

    // Set current day of the week
    const daysofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayOfTheWeek = daysofWeek [now.getUTCDay()];
    currentDayElement.textContent = currentDayOfTheWeek;

    //set current UTC time
    const utcTimeString = now.toISOString() .split("T")[1].split (".")[0];
    currentUTCTimeElememt.textContent=utcTimeString;
});