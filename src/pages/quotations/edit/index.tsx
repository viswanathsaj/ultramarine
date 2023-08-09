import Sidebar from '~/components/Sidebar/Sidebar'
// import { type Stude, columns } from '@/components/columns'
// import { DataTable } from '@/components/data-table'
import { Button } from '~/components/ui/button'
import Link from 'next/link'
import { ProfileForm } from '@/components/add-form/form'

export default function Dashboard() {
  return (
    <>
      <Sidebar />

      <div className={`ml-56 text-xl`}>
        <Button asChild>
          <Link href='/quotations/add'>Add</Link>
        </Button>

        <ProfileForm />
      </div>
    </>
  )
}
