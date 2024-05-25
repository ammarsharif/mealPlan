import React from 'react';
import DayColumn from './DayColumn';

const PlannerGrid = () => {
  const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'];

  return (
    <div className="planner-grid grid grid-cols-7 gap-4 p-4">
      {days.map((day, index) => (
        <DayColumn key={index} dayIndex={index} />
      ))}
    </div>
  );
};

export default PlannerGrid;
