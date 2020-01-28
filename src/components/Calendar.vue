<template>
  <FullCalendar
    defaultView="dayGridMonth"
    eventColor="#e65100"
    :plugins="calendarPlugins"
    :locale="locale"
    :googleCalendarApiKey="googleCalendarApiKey"
    :events="events"
    :eventClick="eventClick"
    :header="{
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    }"
  />
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import jaLocale from "@fullcalendar/core/locales/ja";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

export default {
  name: "Calendar",
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarPlugins: [dayGridPlugin, timeGridPlugin, googleCalendarPlugin],
      locale: jaLocale,
      googleCalendarApiKey: "AIzaSyCGbxMfMBY-hIajaDK9GjHN6l9zw1JGkIc",
      events: {
        googleCalendarId:
          "rb9hqd1uuhg6vm91a19thqcno4@group.calendar.google.com",
        className: "gcal-event"
      },
      eventClick: function(info) {
        if (info.event.url) {
          window.open(info.event.url, "_blank");
        }
      }
    };
  }
};
</script>

<style>
.fc-day-grid-event .fc-content {
  white-space: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.fc-content {
  font-size: 80%;
}
</style>
