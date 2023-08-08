import Sidebar from '~/components/Sidebar/Sidebar'
import { type Payment, columns } from '../../components/columns'
import { DataTable } from '@/components/data-table'

function getData(): Payment[] {
  // Fetch data from your API here.
  // eslint-disable-next-line @typescript-eslint/await-thenable
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com'
    }
    // ...
  ]
}

export default function Dashboard() {
  const data = getData()
  return (
    <>
      <Sidebar />

      <div className={`ml-56 text-xl`}>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  )
}
