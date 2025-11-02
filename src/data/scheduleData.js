export const schedule = [
  { 
    time: "5:00 AM – 6:30 AM", 
    area: "Math", 
    icon: "??", 
    timeIcon: "sunrise", 
    color: "border-blue-500", 
    note: "Early morning study builds strong focus.",
    subject: "Math"
  },
  { 
    time: "6:30 AM – 8:00 AM", 
    area: "Free / Mind Time (Morning)", 
    icon: "?", 
    timeIcon: "coffee", 
    color: "border-teal-500", 
    note: "Relax, eat breakfast, and prepare for college.",
    subject: "Break"
  },
  { 
    time: "8:00 AM – 2:00 PM", 
    area: "College", 
    icon: "??", 
    timeIcon: "sun", 
    color: "border-purple-500", 
    note: "Be active and take class notes seriously.",
    subject: "College"
  },
  { 
    time: "2:00 PM – 2:30 PM", 
    area: "Free / Lunch Break", 
    icon: "??", 
    timeIcon: "sandwich", 
    color: "border-teal-500", 
    note: "Quick lunch and rest.",
    subject: "Break"
  },
  { 
    time: "2:30 PM – 4:00 PM", 
    area: "Physics", 
    icon: "??", 
    timeIcon: "sun", 
    color: "border-green-500", 
    note: "Practice numerical problems daily.",
    subject: "Physics"
  },
  { 
    time: "4:00 PM – 4:30 PM", 
    area: "Free / Exercise Time", 
    icon: "??", 
    timeIcon: "dumbbell", 
    color: "border-teal-500", 
    note: "Do light stretching or walk.",
    subject: "Break"
  },
  { 
    time: "4:30 PM – 6:00 PM", 
    area: "Computer", 
    icon: "??", 
    timeIcon: "sunset", 
    color: "border-red-500", 
    note: "Learn coding or computer topics.",
    subject: "Computer"
  },
  { 
    time: "6:00 PM – 7:00 PM", 
    area: "Free / Family Time", 
    icon: "??", 
    timeIcon: "home", 
    color: "border-teal-500", 
    note: "Relax and spend time with family.",
    subject: "Break"
  },
  { 
    time: "7:00 PM – 8:00 PM", 
    area: "English", 
    icon: "??", 
    timeIcon: "moon", 
    color: "border-yellow-500", 
    note: "Practice grammar and writing.",
    subject: "English"
  },
  { 
    time: "8:00 PM – 9:00 PM", 
    area: "Dinner / Relax", 
    icon: "???", 
    timeIcon: "utensils", 
    color: "border-teal-500", 
    note: "Eat dinner peacefully.",
    subject: "Break"
  },
  { 
    time: "9:00 PM – 10:30 PM", 
    area: "Revision / Urdu / Pak Studies", 
    icon: "??", 
    timeIcon: "moon", 
    color: "border-indigo-500", 
    note: "Calm revision before bed.",
    subject: "Revision"
  },
  { 
    time: "10:30 PM – 5:00 AM", 
    area: "?? Rest & Sleep", 
    icon: "??", 
    timeIcon: "bed", 
    color: "border-gray-700", 
    note: "Sleep restores brain energy.",
    subject: "Sleep"
  }
];

export const SUBJECT_CONFIG = {
  "Math": { 
    totalUnits: 20, 
    completed: 0, 
    color: "bg-blue-500",
    phases: {
      long: { days: 60, chapters: 12, completed: 0 },
      short: { days: 40, chapters: 6, completed: 0 },
      mcq: { days: 20, chapters: 2, completed: 0 }
    }
  },
  "Physics": { 
    totalUnits: 15, 
    completed: 0, 
    color: "bg-green-500",
    phases: {
      long: { days: 60, chapters: 9, completed: 0 },
      short: { days: 40, chapters: 5, completed: 0 },
      mcq: { days: 20, chapters: 1, completed: 0 }
    }
  },
  "Computer": { 
    totalUnits: 15, 
    completed: 0, 
    color: "bg-red-500",
    phases: {
      long: { days: 60, chapters: 9, completed: 0 },
      short: { days: 40, chapters: 5, completed: 0 },
      mcq: { days: 20, chapters: 1, completed: 0 }
    }
  },
  "English": { 
    totalUnits: 10, 
    completed: 0, 
    color: "bg-yellow-500",
    phases: {
      long: { days: 60, chapters: 6, completed: 0 },
      short: { days: 40, chapters: 3, completed: 0 },
      mcq: { days: 20, chapters: 1, completed: 0 }
    }
  },
  "Urdu": { 
    totalUnits: 12, 
    completed: 0, 
    color: "bg-purple-500",
    phases: {
      long: { days: 60, chapters: 7, completed: 0 },
      short: { days: 40, chapters: 4, completed: 0 },
      mcq: { days: 20, chapters: 1, completed: 0 }
    }
  },
  "Pakistan Studies": { 
    totalUnits: 8, 
    completed: 0, 
    color: "bg-indigo-500",
    phases: {
      long: { days: 60, chapters: 5, completed: 0 },
      short: { days: 40, chapters: 2, completed: 0 },
      mcq: { days: 20, chapters: 1, completed: 0 }
    }
  },
  "Arabic": { 
    totalUnits: 6, 
    completed: 0, 
    color: "bg-rose-500",
    phases: {
      long: { days: 60, chapters: 4, completed: 0 },
      short: { days: 40, chapters: 2, completed: 0 },
      mcq: { days: 20, chapters: 0, completed: 0 }
    }
  }
};

export const SYLLABUS_START_DATE = new Date(2025, 10, 2);
export const SYLLABUS_END_DATE = new Date(2026, 2, 2);