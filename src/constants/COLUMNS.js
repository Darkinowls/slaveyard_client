const COLUMNS =
{
    teacher: [
        {
            "field": "firstname",
            "headerName": "First name",
            "editable": true,
            "width": 100
        },
        {
            "field": "lastname",
            "headerName": "Last name",
            "editable": true,
            "width": 100
        },
        {
            "field": "experienceMonths",
            "headerName": "Experience in months",
            "editable": true,
            "width": 200
        }
    ],
    subject: [
        {
            "field": "name",
            "headerName": "Name of subject",
            "editable": true,
            "width": 200
        }
    ],
    student: [
        {
            "field": "firstname",
            "headerName": "First name",
            "editable": true,
            "width": 100
        },
        {
            "field": "lastname",
            "headerName": "Last name",
            "editable": true,
            "width": 100
        }
    ],
    lesson: [
        {
            "field": "date",
            "headerName": "Date",
            "width": 100,
            "type": "date",
            "valueGetter": ({ value }) => value && new Date(value),
            // TODO: VALUE SETTER
        },

        {
            "field": "clazz",
            "headerName": "Class",
            "width": 75,
            "valueGetter": ({ value }) => value?.name
        },

        {
            "field": "time",
            "headerName": "Lesson #",
            "width": 100,
            "valueGetter": ({ value }) => value?.id
        },

        {
            "field": "subject",
            "headerName": "Subject",
            "width": 100,
            "valueGetter": ({ value }) => value?.name
        },

        {
            "field": "teacher",
            "headerName": "Teacher",
            "width": 150,
            "valueGetter": ({ value }) => value?.firstname + " " + value?.lastname
        }


    ],


    class: [

        {
            "field": "name",
            "headerName": "Class name",
            "editable": true,
            "width": 125
        },

        {
            "field": "teacher",
            "headerName": "Teacher",
            "width": 150,
            "valueGetter": ({ value }) => value?.firstname + " " + value?.lastname
        }

    ],

    grade: [
        {
            "field": "grade",
            "headerName": "Grade",
            "editable": true,
            "width": 75
        },
        {
            "field": "presence",
            "headerName": "Presence",
            "editable": true,
            "type": "boolean",
            "width": 100
        },
        {
            "field": "student",
            "headerName": "Student",
            "width": 150,
            "valueGetter": ({ value }) => value?.firstname + " " + value?.lastname
        },
        {
            "field": "lesson",
            "headerName": "Date",
            "width": 100,
            "type": "date",
            "valueGetter": ({ value }) => value?.date && new Date(value?.date),
        },

        {
            "field": "time",
            "headerName": "Lesson#",
            "width": 100,
            "valueGetter": ({ value }) => value?.id,
        }


    ]
}

export default COLUMNS;