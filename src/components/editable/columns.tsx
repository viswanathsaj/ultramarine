import { createColumnHelper } from '@tanstack/react-table'

type Student = {
  studentId: number
  name: string
  dateOfBirth: string
  major: string
}
const defaultData: Student[] = [
  {
    studentId: 1111,
    name: 'Bahar Constantia',
    dateOfBirth: '1984-01-04',
    major: 'Computer Science'
  },
  {
    studentId: 2222,
    name: 'Harold Nona',
    dateOfBirth: '1961-05-10',
    major: 'Communications'
  },
  {
    studentId: 3333,
    name: 'Raginolf Arnulf',
    dateOfBirth: '1991-10-12',
    major: 'Business'
  },
  {
    studentId: 4444,
    name: 'Marvyn Wendi',
    dateOfBirth: '1978-09-24',
    major: 'Psychology'
  }
]
const columnHelper = createColumnHelper<Student>()
const columns = [
  columnHelper.accessor('studentId', {
    header: 'Student ID'
  }),
  columnHelper.accessor('name', {
    header: 'Full Name'
  }),
  columnHelper.accessor('dateOfBirth', {
    header: 'Date Of Birth'
  }),
  columnHelper.accessor('major', {
    header: 'Major'
  })
]
