// Get events from LocalStorage
let events =
    JSON.parse(
        localStorage.getItem("events")
    ) || [];


// Get HTML elements
const eventForm =
    document.getElementById("eventForm");

const eventId =
    document.getElementById("eventId");

const eventTitle =
    document.getElementById("eventTitle");

const eventDate =
    document.getElementById("eventDate");

const eventTime =
    document.getElementById("eventTime");

const eventVenue =
    document.getElementById("eventVenue");

const eventCategory =
    document.getElementById("eventCategory");

const eventDescription =
    document.getElementById("eventDescription");

const adminEvents =
    document.getElementById("adminEvents");

const cancelEdit =
    document.getElementById("cancelEdit");


// Save events
function saveEvents() {

    localStorage.setItem(
        "events",
        JSON.stringify(events)
    );
}


// Display events in admin dashboard
function displayAdminEvents() {

    adminEvents.innerHTML = "";


    if (events.length === 0) {

        adminEvents.innerHTML =
            "<p>No events available.</p>";

        return;
    }


    events.forEach(event => {

        const div =
            document.createElement("div");

        div.className = "admin-event";


        div.innerHTML = `
            <div>

                <strong>
                    ${event.title}
                </strong>

                <p>
                    ${event.category}
                    |
                    ${event.date}
                    |
                    ${event.venue}
                </p>

            </div>

            <div class="admin-actions">

                <button
                    class="small-btn edit-btn"
                    onclick="editEvent(${event.id})">

                    Edit

                </button>

                <button
                    class="small-btn delete-btn"
                    onclick="deleteEvent(${event.id})">

                    Delete

                </button>

            </div>
        `;


        adminEvents.appendChild(div);

    });
}


// Add or update event
eventForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const id =
            eventId.value;


        const eventData = {

            id: id
                ? Number(id)
                : Date.now(),

            title:
                eventTitle.value,

            date:
                eventDate.value,

            time:
                eventTime.value,

            venue:
                eventVenue.value,

            category:
                eventCategory.value,

            description:
                eventDescription.value

        };


        // Edit existing event
        if (id) {

            events =
                events.map(item => {

                    if (item.id === Number(id)) {
                        return eventData;
                    }

                    return item;
                });

        }

        // Add new event
        else {

            events.push(eventData);

        }


        saveEvents();

        displayAdminEvents();

        resetForm();


        alert(
            "Event saved successfully!"
        );
    }
);


// Edit event
function editEvent(id) {

    const event =
        events.find(
            item => item.id === id
        );


    if (!event) return;


    eventId.value =
        event.id;

    eventTitle.value =
        event.title;

    eventDate.value =
        event.date;

    eventTime.value =
        event.time;

    eventVenue.value =
        event.venue;

    eventCategory.value =
        event.category;

    eventDescription.value =
        event.description;


    cancelEdit.classList.remove(
        "hidden"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Delete event
function deleteEvent(id) {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete this event?"
        );


    if (!confirmDelete) {
        return;
    }


    events =
        events.filter(
            event => event.id !== id
        );


    saveEvents();

    displayAdminEvents();


    alert(
        "Event deleted successfully!"
    );
}


// Cancel edit
cancelEdit.addEventListener(
    "click",
    resetForm
);


// Reset form
function resetForm() {

    eventForm.reset();

    eventId.value = "";

    cancelEdit.classList.add(
        "hidden"
    );
}


// Display registrations
function displayRegistrations() {

    const container =
        document.getElementById(
            "registrationsContainer"
        );


    const search =
        document
            .getElementById(
                "registrationSearch"
            )
            .value
            .toLowerCase();


    const registrations =
        JSON.parse(
            localStorage.getItem(
                "registrations"
            )
        ) || [];


    const filtered =
        registrations.filter(registration => {

            return (
                registration.name
                    .toLowerCase()
                    .includes(search) ||

                registration.email
                    .toLowerCase()
                    .includes(search) ||

                registration.event
                    .toLowerCase()
                    .includes(search)
            );
        });


    if (filtered.length === 0) {

        container.innerHTML =
            "<p>No registrations found.</p>";

        return;
    }


    let table = `

        <table>

            <thead>

                <tr>

                    <th>Event</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>College / Year</th>
                    <th>Phone</th>
                    <th>Registered At</th>

                </tr>

            </thead>

            <tbody>
    `;


    filtered.forEach(registration => {

        table += `

            <tr>

                <td>
                    ${registration.event}
                </td>

                <td>
                    ${registration.name}
                </td>

                <td>
                    ${registration.email}
                </td>

                <td>
                    ${registration.collegeYear}
                </td>

                <td>
                    ${registration.phone}
                </td>

                <td>
                    ${registration.registeredAt}
                </td>

            </tr>

        `;
    });


    table += `

            </tbody>

        </table>
    `;


    container.innerHTML = table;
}


// Registration search
document
    .getElementById(
        "registrationSearch"
    )
    .addEventListener(
        "input",
        displayRegistrations
    );


// Load admin page
displayAdminEvents();

displayRegistrations();