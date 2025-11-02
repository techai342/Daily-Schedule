import { useCurrentTime } from "../hooks/useCurrentTime";
import CurrentReminder from "../components/CurrentReminder";
import ScheduleList from "../components/ScheduleList";
import SyllabusProgress from "../components/SyllabusProgress";
import SubjectProgress from "../components/SubjectProgress";
import PerformanceSummary from "../components/PerformanceSummary";
import FloatingAction from "../components/FloatingAction";
import { useNotification } from "../hooks/useNotification";

export default function Home() {
  const currentTime = useCurrentTime();
  const { permission, requestPermission } = useNotification();

  const handleRequestNotification = async () => {
    if (permission === "default") {
      await requestPermission();
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-2 header-gradient">
        Daily Study Planner
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Track your study schedule and stay disciplined
      </p>

      <CurrentReminder 
        currentTime={currentTime}
        notificationPermission={permission}
        onRequestNotification={handleRequestNotification}
      />
      
      <SyllabusProgress currentTime={currentTime} />
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-3 text-blue-500">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Today's Schedule
          </h2>
          <ScheduleList currentTime={currentTime} />
        </div>
        
        <div>
          <SubjectProgress />
          <PerformanceSummary />
        </div>
      </div>
      
      <FloatingAction />
    </div>
  );
}
