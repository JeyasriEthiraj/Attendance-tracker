// session data structure
let sessions = [];

// function to create session
function createSession(sessionName, sessionDate, sessionTime) {
    const newSession = { sessionName, sessionDate, sessionTime, attendees: [] };
    sessions.push(newSession);
    renderSessionList();
}

// function to render session list
function renderSessionList() {
    const sessionList = document.getElementById('session-list');
    sessionList.innerHTML = '';

    sessions.forEach((session, index) => {
        const sessionListItem = document.createElement('li');
        sessionListItem.innerHTML = `
            ${session.sessionName} - ${session.sessionDate} ${session.sessionTime}
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        sessionList.appendChild(sessionListItem);
    });
}

// function to track attendance
function trackAttendance(sessionIndex) {
    const session = sessions[sessionIndex];
    const attendees = session.attendees;
    const attendanceTable = document.getElementById('attendance-table');

    attendanceTable.innerHTML = `
        <table>
            <thead>