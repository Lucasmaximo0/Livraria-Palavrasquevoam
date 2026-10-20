import { useMemo, useState } from 'react'
import { toIsoDate } from '../../../shared/lib/formatDate'

function monthDate(monthValue) {
  return new Date(`${monthValue}-01T00:00:00`)
}

export function useAvailabilityCalendar(availableDates, calendarMonths) {
  const [monthIndex, setMonthIndex] = useState(0)
  const [selectedDay, setSelectedDay] = useState(null)

  const currentMonth = calendarMonths[monthIndex]

  const availableMap = useMemo(() => {
    const map = new Map()
    availableDates.forEach((item) => map.set(item.date, item.period))
    return map
  }, [availableDates])

  const monthGrid = useMemo(() => {
    const start = monthDate(currentMonth)
    const firstWeekDay = start.getDay()
    const startOffset = (firstWeekDay + 6) % 7
    const firstCell = new Date(start)
    firstCell.setDate(firstCell.getDate() - startOffset)

    return Array.from({ length: 42 }, (_, index) => {
      const date = new Date(firstCell)
      date.setDate(firstCell.getDate() + index)
      const iso = toIsoDate(date)
      const isCurrentMonth = iso.startsWith(currentMonth)
      const period = availableMap.get(iso)
      const isAvailable = Boolean(period)
      const isSelected = selectedDay?.date === iso

      return {
        iso,
        day: date.getDate(),
        period,
        isCurrentMonth,
        isAvailable,
        isSelected
      }
    })
  }, [availableMap, currentMonth, selectedDay])

  const prevMonth = () => setMonthIndex((prev) => Math.max(0, prev - 1))
  const nextMonth = () => setMonthIndex((prev) => Math.min(calendarMonths.length - 1, prev + 1))

  const selectDay = (cell) => {
    if (!cell.isAvailable) {
      return
    }

    setSelectedDay({ date: cell.iso, period: cell.period })
  }

  return {
    monthIndex,
    currentMonth,
    monthGrid,
    selectedDay,
    prevMonth,
    nextMonth,
    selectDay,
    hasPrev: monthIndex > 0,
    hasNext: monthIndex < calendarMonths.length - 1
  }
}
