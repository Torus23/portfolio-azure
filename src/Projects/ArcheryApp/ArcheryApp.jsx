import React from "react";

function ArcheryApp() {
    return(
    <>
        <div>
            <div>
                <h1>Designing the future of archery scoring</h1>
                <p>I worked as the database and back-end architect on an archery scoring mobile and web application. We took the old way of scoring on paper to an easier and more effective way to record archery scores.</p>
            </div>
            <div>
                <h1>The problem</h1>
                <p>In 2024, We approached Ardy Ayto founder & president of deep south archery club to begin a project to build an entirely new application from the ground up to serve as the scoring method to create away to easily score and cutdown on paperwork. The old way was to fill out a paper score card this led to a number of user problems such as filling it out and calculating correctly. To solve this a mobile and web application was suggested to the client.  The primary goals for the project were reducing user errors and making the way to fill out the score both easier for new and advance users.</p>
            </div>
            <div>
                <h1>Database design</h1>
                <p>During the planning stage it was apparent that just only making a database to cover only the scoring was not going to cut it as in the club data was on excel spreadsheet so because of that we decided to increase the scope to include this data. The database management system (DBMS) chosen was MS SQL server as most businesses in Invercargill are Microsoft based this means that support is readily available.    </p>
            </div>
            <div>
                <h1>API design</h1>
                <p>The API was done in ASP.NET Core as the team was familiar with it, the reason why this was chosen was to connect the two different parts of the project the mobile application and the web application together.</p>
            </div>
        </div>
    </>
    )
}

export default ArcheryApp