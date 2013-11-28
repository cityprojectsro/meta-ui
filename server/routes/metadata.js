exports.entity = {
    persons : {
        name: "Persons",
        keys: [{
            key: "id",
            label: "ID",
            type: "number"
        }, {
            key: "firstName",
            label: "First Name",
            type: "text"
        }, {
            key: "lastName",
            label: "Last Name",
            type: "text"
        }, {
            key: "age",
            label: "Age",
            type: "number"
        }, {
            key: "email",
            label: "Email",
            type: "email"
        }, {
            key: "homePhoneNumber",
            label: "Home Phone Number",
            type: "tel"
        }, {
            key: "userName",
            label: "User Name",
            type: "text"
        }]
    },
    apartments: {
        name: "Apartments",
        keys: [{
            key: "id",
            label: "ID",
            type: "number"
        }, {
            key: "entranceId",
            label: "Entrance",
            type: "text"
        },{
            key: "identifier",
            label: "Identifier",
            type: "text"
        },{
            key: "alias",
            label: "Alias",
            type: "text"
        },{
            key: "numberOfPersons",
            label: "Number of Persons",
            type: "number"
        },{
            key: "surface",
            label: "Surface",
            type: "number"
        }]
    },
    associations: {
        name: "Associations",
        keys: [{
            key: "id",
            label: "ID",
            type: "number"
        }, {
            key: "name",
            label: "Name",
            type: "text"
        },{
            key: "postalCode",
            label: "Postal Code",
            type: "number"
        }]
    }
}
