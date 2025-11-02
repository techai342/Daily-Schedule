export function timeToMinutes(timeStr) {
  if (!timeStr) return -1;
  
  // Handle overnight sleep case
  if (timeStr.includes("10:30 PM – 5:00 AM")) {
    return {
      startMinutes: 22 * 60 + 30, // 10:30 PM
      endMinutes: 5 * 60, // 5:00 AM
      isOvernight: true
    };
  }
  
  const [startTimeStr, endTimeStr] = timeStr.split(' – ').map(s => s.trim());
  
  const parseTime = (timeString) => {
    const [time, period] = timeString.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    
    if (period.toLowerCase() === 'pm' && hours !== 12) hours += 12;
    if (period.toLowerCase() === 'am' && hours === 12) hours = 0;
    
    return hours * 60 + minutes;
  };
  
  return {
    startMinutes: parseTime(startTimeStr),
    endMinutes: parseTime(endTimeStr),
    isOvernight: false
  };
}

export function calculateProgress(startDate, endDate, currentDate) {
  const start = startDate.getTime();
  const end = endDate.getTime();
  const current = currentDate.getTime();
  
  if (current < start) return 0;
  if (current > end) return 100;
  
  const totalDuration = end - start;
  const elapsedDuration = current - start;
  return Math.min(100, Math.max(0, (elapsedDuration / totalDuration) * 100));
}

export function getDaysRemaining(endDate, currentDate) {
  const msPerDay = 1000 * 60 * 60 * 24;
  const timeDiff = endDate.getTime() - currentDate.getTime();
  return Math.max(0, Math.ceil(timeDiff / msPerDay));
}

export function formatTimeRemaining(minutes) {
  if (minutes <= 0) return "0 min";
  
  const hours = Math.floor(minutes / 60);
  const mins = Math.round(minutes % 60);
  
  if (hours > 0 && mins > 0) {
    return `${hours} hr ${mins} min`;
  } else if (hours > 0) {
    return `${hours} hr`;
  } else {
    return `${mins} min`;
  }
}
