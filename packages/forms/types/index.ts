import { Dayjs } from "dayjs"

export type MinuteStep = 1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30

export type DateObject = {
  currentDate: Dayjs
  selectedDate: Dayjs | null
  value: string | null | undefined
  minDate: string | Dayjs | undefined
  maxDate: string | Dayjs | undefined
  disabledDays: number[] | undefined
  disabledDates: string[] | undefined
}
