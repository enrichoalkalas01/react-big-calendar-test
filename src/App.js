import React, { useState } from 'react'

import DatePicker from 'react-datepicker'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'

// CSS React Calendar
import "react-datepicker/dist/react-datepicker.css"
import "react-big-calendar/lib/css/react-big-calendar.css"

// Setup React Calendar
const locales = {
    "en-US": require('date-fns/locale/en-US')
}

// Setup Data Settings For Calendar
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

// Setup Date Use Dummy
const events = [
    {
        title: 'Meeting Testing One',
        allDay: true,
        start: new Date(2021, 7, 3),
        end: new Date(2021, 7, 3)
    },

    {
        title: 'Meeting Testing Two',
        allDay: true,
        start: new Date(2021, 7, 3),
        end: new Date(2021, 7, 5)
    },

    {
        title: 'Vacation',
        allDay: true,
        start: new Date(2021, 7, 10),
        end: new Date(2021, 7, 15)
    }
]


// Render Calendar
function App() {
    const [ newEvent, setNewEvent ] = useState({ title:"", start:"", end:"" })
    const [ allEvents, setAllEvents ] = useState(events)

    const handleAddEvent = () => {
        setAllEvents([ ...allEvents, newEvent ])
    }

    return (
        <div className="App">
            <div>
                <input
                    type="text"
                    placeholder="Add title"
                    style={{ width: '25%', marginRight: '10px' }}
                    value={ newEvent.title }
                    onChange={ (e) => setNewEvent({ ...newEvent, title: e.target.value }) }
                />
                <DatePicker
                    placeholderText={ "Start Date" }
                    style={{ marginRight: '10px' }}
                    selected={ newEvent.start }
                    onChange={ (start) => setNewEvent({ ...newEvent, start }) }
                />
                <DatePicker
                    placeholderText={ "End Date" }
                    style={{ marginRight: '10px' }}
                    selected={ newEvent.end }
                    onChange={ (end) => setNewEvent({ ...newEvent, end }) }
                />
                <button onClick={ handleAddEvent }>Submit</button>
            </div>
            <Calendar
                localizer={ localizer }
                events={ allEvents }
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, margin: '50px' }}
            />
        </div>
    )
}

export default App
