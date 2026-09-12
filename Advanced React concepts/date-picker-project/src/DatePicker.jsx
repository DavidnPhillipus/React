import { useState } from "react";
import format from "date-fns/format";

export function DatePicker({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div class="date-picker-container">
      <button class="date-picker-button" onClick={() => setIsOpen((q) => !q)}>
        {(value = null ? "select a Date" : format(value, "MMM do,  yyyy"))}
      </button>
      {isOpen && <DatePickerModal value={value} onChange={setValue} />}
    </div>
  );
}

function DatePickerModal({ value, onChange }) {
  const [visibleMonth, setVisibleMonth] = useState(value || new Date());

  const visibleDates = eachDayOfInterval({
    start: startOfWeek(startOfMonth(visibleMonth)),
    end: endOfWeek(endOfMonth(visibleMonth)),
  });

  function showPreviousMonth() {
    setVisibleMonth((currentMonth) => {
      return addMonths(currentMonth, -1);
    });
  }

  function showNextMonth() {
    setVisibleMonth((currentMonth) => {
      return addMonths(currentMonth, 1);
    });
  }
  return (
    <div className="date-picker">
      <div className="date-picker-header">
        <button
          className="prev-month-button month-button"
          onClick={showPreviousMonth}
        >
          &larr;
        </button>
        <div className="current-month">
          {format(visibleMonth, "MMMM - yyyy")}
        </div>
        <button
          className="next-month-button month-button"
          onClick={showNextMonth}
        >
          &rarr;
        </button>
      </div>
      <div className="date-picker-grid-header date-picker-grid">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="date-picker-grid-dates date-picker-grid">
        {visibleDates.map((date) => {
          const isOtherMonth = date.getMonth() !== visibleMonth.getMonth();
          const isSelected =
            value && format(date, "yyyy-MM-dd") === format(value, "yyyy-MM-dd");
          const isToday =
            format(date, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");
          let className = "date";
          if (isOtherMonth) className += " date-picker-other-month-date";
          if (isSelected) className += " selected";
          if (isToday) className += " today";
          return (
            <button
              key={date.toISOString()}
              className={className}
              onClick={() => onChange(date)}
              type="button"
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

//The code at the bottom was create by copilot so it does not includ the gate fns function to check those out go to the code on the video
