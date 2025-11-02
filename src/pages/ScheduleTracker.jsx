import { useState, useEffect } from "react";
import { useCurrentTime } from "../hooks/useCurrentTime";
import { useNotification } from "../hooks/useNotification";
import CurrentReminder from "../components/CurrentReminder";
import SyllabusProgress from "../components/SyllabusProgress";
import ScheduleList from "../components/ScheduleList";
import SubjectProgress from "../components/SubjectProgress";
import PerformanceSummary from "../components/PerformanceSummary";
import FloatingAction from "../components/FloatingAction";

export default function ScheduleTracker() {
  const currentTime = useCurrentTime();
  const { permission, requestPermission } = useNotification();

  return (
    <div className="min-h-screen bg-ios-bg">
      <div className="container mx-auto max-w-2xl px-5 py-8">
        <header className="text-center mb-10 bounce-in">
          <h1 className="text-5xl font-bold mb-3 header-gradient">
            Daily Schedule
          </h1>
          <p className="text-xl text-gray-600">120-Day Syllabus Progress Tracker</p>
        </header>
        
        <CurrentReminder 
          currentTime={currentTime}
          notificationPermission={permission}
          onRequestNotification={requestPermission}
        />
        
        <SyllabusProgress currentTime={currentTime} />
        <ScheduleList currentTime={currentTime} />
        <SubjectProgress />
        <PerformanceSummary />
      </div>
      
      <FloatingAction />
    </div>
  );
}
