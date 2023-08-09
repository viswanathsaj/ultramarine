import Sidebar from '~/components/Sidebar/Sidebar'
import { type Payment, columns } from '../../components/columns'
import { DataTable } from '@/components/data-table'
import { Button } from '~/components/ui/button'
import Link from 'next/link'

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
        <Button asChild>
          <Link href='/quotations/add'>Add</Link>
        </Button>

        <DataTable columns={columns} data={data} />
      </div>
    </>
  )
}
