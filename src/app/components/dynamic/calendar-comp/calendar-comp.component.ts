import { format, setDate, setMonth, setYear, startOfDay } from 'date-fns';
import { setMinutes, setHours } from 'date-fns';
import {  Component, OnInit} from '@angular/core';
import {RRule} from 'rrule';


import { CalendarView, CalendarEvent, DateFormatterParams } from 'angular-calendar';

interface RecurringEvent {
  title: string;
  rrule?:{
    freq:any;
    bymonth?:number;
    bymonthday?:number;
    byweekday?: any;
  }
}

@Component({
  selector: 'app-calendar-comp',
  templateUrl: './calendar-comp.component.html',
  styleUrls: ['./calendar-comp.component.scss']
})
export class CalendarCompComponent {
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  setView(view: CalendarView) {
    this.view = view;
  }

  recurringEvent: RecurringEvent[] =[
    {
      title: "recurring test",
      rrule: {
        freq: RRule.WEEKLY,
        byweekday: 3,
      },

    },
  ]

  events: CalendarEvent[] =[
    {
      start: new Date(2022, 7, 19),
      title: 'Baccalaureate Exam Report Due (for August Degree Conferral)',
    },
    {
      start: new Date(2022, 7, 21),
      end: new Date(2022, 7, 24),
      title: 'Orientation for New Students',
    },
    {
      start: new Date(2022, 7, 24),
      title: 'Returning Student Check-in 9:00 AM',
    },
    {
      start: new Date(2022, 7, 25),
      end: new Date(2022, 7, 26),
      title: 'Mini-Classes',
    },
    {
      start: new Date(2022, 7, 26),
    
      title: 'August Degree Conferral',
    },
    {
      start: new Date(2022, 7, 29),
      title: 'Fall Classes Begin',
    },
    {
      start: new Date(2022, 7, 29),
      title: 'Fall Off-Campus Study Contracts & Tuition Waivers Deadline',
    },
    {
      start: new Date(2022, 8, 2),
      title: 'Residency Reclassification Application Deadline',
    },
    {
      start: new Date(2022, 8, 5),
      title: 'Labor Day (No Classes; Offices Closed)',
    },
    {
      start: new Date(2022, 8, 7),
      title: 'Fall Contract Submission Deadline',
    },
    {
      start: new Date(2022, 8, 8),
      end: new Date(2022, 8, 9),
      title: 'Late Fall Contract Submission Period ($50 Fee)',
    },
    {
      start: new Date(2022, 8, 9),
      title: 'Last day for 100% Tuition Refund',
    },
    {
      start: new Date(2022, 8, 9),
      title: 'Tuition & Fees Payment Deadline ($100 Penalty) (Registrations canceled after 5:00 PM if account is not cleared)',
    },
    {
      start: new Date(2022, 8, 23),
      title: 'Last day for 25% Tuition Refund',
    },
    {
      start: new Date(2022, 8, 23),
      title: 'Financial Aid Unit Drop Grace Period Deadline',
    },
    {
      start: new Date(2022, 9, 7),
      title: 'Advising Day (No Classes)',
    },
    {
      start: new Date(2022, 9, 14),
      title: 'Module I Ends',
    },
    {
      start: new Date(2022, 9, 17),
      end: new Date(2022, 9, 21),
      title: 'Fall Break',
    },
    {
      start: new Date(2022, 9, 24),
      title: 'Module II Begins',
    },
    {
      start: new Date(2022, 9, 31),
      title: 'Spring Semester Academic Contract Registration Begins',
    },
    {
      start: new Date(2022, 10, 1),
      title: 'Deadline to Request Readmission for Spring Semester',
    },
    {
      start: new Date(2022, 10, 1),
      title: 'Off-Campus Study Declaration Deadline',
    },
    {
      start: new Date(2022, 10, 3),
      title: 'Advising Day (No Classes)',
    },
    {
      start: new Date(2022, 10, 4),
      title: 'Provisional AOC Plan Submission Deadline (for 4th Term Students)',
    },
    {
      start: new Date(2022, 10, 4),
      title: 'Thesis Prospectus/AOC Form Deadline (for 6th Term Students)',
    },
    {
      start: new Date(2022, 10, 4),
      title: 'Final Payment Due on Payment Plans (payments due 8/5, 9/9, 10/7, 11/4)',
    },
    {
      start: new Date(2022, 10, 11),
      title: 'Veterans Day (No Classes; Offices Closed)',
    },
    {
      start: new Date(2022, 10, 14),
      title: 'Fall Contract Renegotiation Deadline',
    },
    {
      start: new Date(2022, 10, 24),
      end: new Date(2022, 10, 25),
      title: 'Thanksgiving Holiday (Offices Closed)',
    },
    {
      start: new Date(2022, 11, 1),
      title: 'ISP Description Forms Due',
    },
    {
      start: new Date(2022, 11, 9),
      title: 'Fall Classes End',
    },
    {
      start: new Date(2022, 11, 12),
      end: new Date(2022, 11, 13),
      title: 'Reading/Hurricane Make-Up Days',
    },
    {
      start: new Date(2022, 11, 14),
      end: new Date(2022, 11, 16),
      title: 'Final Exams/Advising',
    },
    {
      start: new Date(2022, 11, 20),
      title: 'Evaluation Submission Deadline (students on probation)',
    },
    {
      start: new Date(2022, 11, 21),
      title: 'Contract Certification Deadline (students on probation)',
    },
    {
      start: new Date(2022, 11, 28),
      title: 'Evaluation Submission Deadline (all students)',
    },


    {
      start: new Date(2023, 0, 3),
      title: 'January Interterm Begins',
    },
    {
      start: new Date(2023, 0, 5),
      title: 'January ISP Drop/Add Deadline',
    },
    {
      start: new Date(2023, 0, 16),
      title: 'Martin Luther King Jr. Day (Offices Closed)',
    },
    {
      start: new Date(2023, 0, 20),
      title: 'Baccalaureate Exam Report Due (for January Degree Conferral)',
    },
    {
      start: new Date(2023, 0, 23),
      end: new Date(2023, 0, 25),
      title: 'Orientation for New Students',
    },
    {
      start: new Date(2023, 0, 26),
      end: new Date(2023, 0, 27),
      title: 'Mini-Classes',
    },
    {
      start: new Date(2023, 0, 27),
      title: 'January Interterm Ends',
    },
    {
      start: new Date(2023, 0, 27),
      title: 'January Degree conferral',
    },
    {
      start: new Date(2023, 0, 30),
      title: 'Spring Classes Begin',
    },
    {
      start: new Date(2023, 0, 30),
      title: 'Spring Off-Campus Study Contracts & Tuition Waivers Deadline',
    },
    {
      start: new Date(2023, 1, 3),
      title: 'Residency Reclassification Application Deadline',
    },
    {
      start: new Date(2023, 1, 8),
      title: 'Spring Contract Submission Deadline',
    },
    {
      start: new Date(2023, 1, 9),
      end: new Date(2023, 1, 10),
      title: 'Late Contracts Submission Period ($50 Fee)',
    },
    {
      start: new Date(2023, 1, 10),
      title: 'Last Day for 100% Tuition Refund',
    },
    {
      start: new Date(2023, 1, 10),
      title: 'Tuition & Fees Payment Deadline ($100 Penalty) (Registration canceled after 5:00 PM if account is not cleared)',
    },
    {
      start: new Date(2023, 1, 24),
      title: 'Last Day for 25% Tuition Refund',
    },
    {
      start: new Date(2023, 1, 24),
      title: 'Financial Aid Unit Drop Grace Period Deadline',
    },
    {
      start: new Date(2023, 2, 10),
      title: 'Advising Day (No Classes)',
    },
    {
      start: new Date(2023, 2, 17),
      title: 'Final Payment Due on Payment Plans ($100 Penalty)',
    },
    {
      start: new Date(2023, 2, 17),
      title: 'Module I Ends',
    },
    {
      start: new Date(2023, 2, 20),
      end: new Date(2023, 2, 24),
      title: 'Spring Break',
    },
    {
      start: new Date(2023, 2, 27),
      title: 'Module II Begins',
    },
    {
      start: new Date(2023, 2, 31),
      title: 'Deadline to Request Readmission for Fall Semester',
    },
    {
      start: new Date(2023, 2, 31),
      title: 'Off-Campus Study Declaration Deadline',
    },
    {
      start: new Date(2023, 3, 3),
      title: 'Fall Semester Academic Contract Registration Begins',
    },
    {
      start: new Date(2023, 3, 6),
      title: 'Advising Day (No Classes)',
    },
    {
      start: new Date(2023, 3, 7),
      title: 'Provisional AOC Plan Submission Deadline (for 4th Term Students)',
    },
    {
      start: new Date(2023, 3, 7),
      title: 'Thesis Prospectus/AOC Form Deadline (for 6th Term Students)',
    },
    {
      start: new Date(2023, 3, 21),
      title: 'Spring Contract Renegotiation Deadline',
    },
    {
      start: new Date(2023, 3, 24),
      end: new Date(2023, 3, 26),
      title: 'Baccalaureate/ Reading Days (No Classes)',
    },
    {
      start: new Date(2023, 4, 12),
      title: 'Spring Classes End',
    },
    {
      start: new Date(2023, 4, 12),
      title: 'Baccalaureate Exam Reports Due for May Degree Conferral',
    },
    {
      start: new Date(2023, 4, 15),
      end: new Date(2023, 4, 16),
      title: 'Reading Days (No Classes)',
    },
    {
      start: new Date(2023, 4, 15),
      title: 'Evaluation Submission Deadline (potential graduates)',
    },
    {
      start: new Date(2023, 4, 16),
      title: 'Contract Certification Deadline (potential graduates)',
    },
    {
      start: new Date(2023, 4, 17),
      end: new Date(2023, 4, 19),
      title: 'Final Exams/Advising',
    },
    {
      start: new Date(2023, 4, 19),
      title: 'May Degree Conferral',
    },
    {
      start: new Date(2023, 4, 19),
      title: 'Commencement (Aug, Jan, and May degree conferrals included)',
    },
    {
      start: new Date(2023, 4, 23),
      title: 'Evaluation Submission Deadline (students on probation)',
    },
    {
      start: new Date(2023, 4, 24),
      title: 'Contract Certification Deadline (students on probation)',
    },
    {
      start: new Date(2023, 4, 29),
      title: 'Memorial Day (Offices Closed)',
    },
    {
      start: new Date(2023, 4, 31),
      title: 'Interterm ISP Evaluation Deadline',
    },
    {
      start: new Date(2023, 4, 31),
      title: 'Evaluation Submission Deadline (all students)',
    },
  ]

  

  dayClicked({ date, events,recurringEvent }: { date: Date; events: CalendarEvent[];recurringEvent: RecurringEvent[] }): void {
    console.log(date);
    //let x=this.adminService.dateFormat(date)
    //this.openAppointmentList(x)
  }

}
