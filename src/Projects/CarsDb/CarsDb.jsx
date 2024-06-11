import React from "react";

function CarsDB() {
    return(
    <>
        <div>
            <div>
                <h1>Designing a car database</h1>
                <p>I worked as the database architect to design a database for a new business called Kar’s cars that wanted an easy way to store all the data a car business needed.</p>
            </div>
            <div>
                <h1>Database design</h1>
                <p>The database had to include the make, model, year of production, engine size, fuel type, number of passengers, registration number, purchase price, purchase date, daily rent price and the insurance details. As well as Subcontractors, company expenditures, revenues, customers and booking data.</p>
            </div>
            <div>
                <h1>Deployment</h1>
                <p>Microsoft Azure was chosen to deploy and host the database as the process is easy to do and autoscaling and scalability to meet peak demands of the business without provisioning for excess capacity cuts down on costs and for the client not having to host their own database saves a lot of money in the long run.</p>
            </div>
        </div>
    
    </>
    )
}

export default CarsDB