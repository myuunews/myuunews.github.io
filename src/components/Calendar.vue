<template>
  <FullCalendar
    defaultView="dayGridMonth"
    :plugins="calendarPlugins"
    :locale="locale"
    :height="height"
    :googleCalendarApiKey="googleCalendarApiKey"
    :eventSources="eventSources"
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
      height: "auto",
      googleCalendarApiKey: process.env.VUE_APP_GOOGLE_CAL_KEY,
      eventSources: [
        {
          googleCalendarId:
            "rb9hqd1uuhg6vm91a19thqcno4@group.calendar.google.com",
          className: "gcal-event"
        },
        {
          googleCalendarId:
            "478gijl532qrkkrcu1brcf15i8@group.calendar.google.com",
          className: "canceled-event"
        }
      ],
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
.gcal-event {
  background-color: #e65100;
  border-color: #e65100;
}
.canceled-event {
  background-color: gray;
  border-color: gray;
}
</style>
