export const dayNames = [
  'Minggu',
  'Senin',
  'Selasa',
  'Rabu',
  'Kamis',
  'Jumat',
  'Sabtu',
]

export enum CounselorType {
  PSYHOPE = 'PSYHOPE',
  FACULTY = 'FACULTY',
}

export const DateSegment = [
  {
    value: '08:00',
    label: '08:00',
    disabled: false,
  },
  {
    value: '09:00',
    label: '09:00',
    disabled: false,
  },
  {
    value: '10:00',
    label: '10:00',
    disabled: false,
  },
  {
    value: '11:00',
    label: '11:00',
    disabled: false,
  },
  {
    value: '12:00',
    label: '12:00',
    disabled: false,
  },
  {
    value: '13:00',
    label: '13:00',
    disabled: true,
  },
  {
    value: '14:00',
    label: '14:00',
    disabled: true,
  },
  {
    value: '15:00',
    label: '15:00',
    disabled: true,
  },
  {
    value: '16:00',
    label: '16:00',
    disabled: false,
  },
  {
    value: '17:00',
    label: '17:00',
    disabled: false,
  },
  {
    value: '18:00',
    label: '18:00',
    disabled: false,
  },
  {
    value: '19:00',
    label: '19:00',
    disabled: false,
  },
]

export const DateSegmentDummy = [
  {
    value: '08:00',
    label: '08:00',
    disabled: true,
  },
  {
    value: '09:00',
    label: '09:00',
    disabled: true,
  },
  {
    value: '10:00',
    label: '10:00',
    disabled: true,
  },
  {
    value: '11:00',
    label: '11:00',
    disabled: false,
  },
  {
    value: '12:00',
    label: '12:00',
    disabled: false,
  },
  {
    value: '13:00',
    label: '13:00',
    disabled: true,
  },
  {
    value: '14:00',
    label: '14:00',
    disabled: true,
  },
  {
    value: '15:00',
    label: '15:00',
    disabled: true,
  },
  {
    value: '16:00',
    label: '16:00',
    disabled: false,
  },
  {
    value: '17:00',
    label: '17:00',
    disabled: false,
  },
  {
    value: '18:00',
    label: '18:00',
    disabled: false,
  },
  {
    value: '19:00',
    label: '19:00',
    disabled: false,
  },
]

export interface queryScheduleInterface {
  dayTime: string
  dayTime2: string
}

export const querySchedule = [
  {
    dayTime: '08:00',
    dayTime2: '10:00',
  },
  {
    dayTime: '10:00',
    dayTime2: '12:00',
  },
  {
    dayTime: '12:00',
    dayTime2: '14:00',
  },
  {
    dayTime: '14:00',
    dayTime2: '16:00',
  },
  {
    dayTime: '16:00',
    dayTime2: '18:00',
  },
  {
    dayTime: '18:00',
    dayTime2: '20:00',
  },
]
