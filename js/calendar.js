$(document).ready(function() {
    // Calendar object
    var Calendar = {
      // Init calendar with initial json data
      init: function() {
        this.events = []
        this.data = {
          "events": [
            {
              "occasion": "Birthday party",
              "invited_count": 120,
              "year": 2015,
              "month": 3,
              "day": 14
            },
            {
              "occasion": "Technical discussion",
              "invited_count": 23,
              "year": 2015,
              "month": 4,
              "day": 24
            },
            {
              "occasion": "Press release",
              "invited_count": 64,
              "year": 2015,
              "month": 6,
              "day": 7,
              "cancelled": true
            },
            {
              "occasion": "New year party",
              "invited_count": 55,
              "year": 2016,
              "month": 1,
              "day": 1
            }
          ]
        }
      },
      // Load json events in the event object list
      loadEvents: function() {
        for (event in this.data.events) {
          this.events.push({
            title: this.data.events[event].occasion,
            start: this.data.events[event].year+"-"+this.data.events[event].month+"-"+this.data.events[event].day
          })
        }     
      },
      // Show the events using Full Calendar library
      printEvents: function() {
        $('#calendar').fullCalendar({
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
          },
          defaultDate: '2016-01-12',
          editable: true,
          eventLimit: true, 
          events: this.events
        });
      }
    } 

    // Instance calendar object, load and print events
    var calendar = Object.create(Calendar)
    calendar.init()
    calendar.loadEvents()
    calendar.printEvents() 
  });
