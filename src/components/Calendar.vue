<template>
  <ClientOnly>
    <FullCalendar :options="calendarOptions" />
  </ClientOnly>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
// import jaLocale from "@fullcalendar/core/locales/ja";

export default {
  name: "Calendar",
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          googleCalendarPlugin,
        ],
        // locale: jaLocale,
        initialView: "dayGridMonth",
        height: "auto",
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        googleCalendarApiKey: process.env.GRIDSOME_GOOGLE_CAL_KEY,
        eventSources: [
          {
            googleCalendarId:
              "rb9hqd1uuhg6vm91a19thqcno4@group.calendar.google.com",
            className: "gcal-event",
            color: "#e65100",
          },
          {
            googleCalendarId:
              "qqoqm77vt3548hk3o0n266hpsg@group.calendar.google.com",
            className: "gcal-onair",
            color: "#26E",
          },
          {
            googleCalendarId:
              "478gijl532qrkkrcu1brcf15i8@group.calendar.google.com",
            className: "canceled-event",
            color: "black",
          },
        ],
        eventClick: function(info) {
          info.jsEvent.preventDefault();
          if (info.event.url) {
            window.open(info.event.url, "_blank");
          }
          // alert("Event: " + info.event.title);
        },
      },
    };
  },
};
</script>

<style>
.fc a {
  color: black;
}
.fc-daygrid-dot-event .fc-event-title {
  white-space: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.fc-event-title {
  font-weight: normal !important;
}
</style>
