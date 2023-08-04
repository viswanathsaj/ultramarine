import { useAtom } from 'jotai'
import { expandedAtom } from '../atoms'

import { RiLayoutGridFill, RiMenuLine } from 'react-icons/ri'

export default function Sidebar() {
  const [expanded, setExpanded] = useAtom(expandedAtom)

  // const [expanded, setExpanded] = useState(true)

  const handleToggle = () => {
    if (expanded) {
      setExpanded(false)
      console.log(expanded)
      return
    }
    setExpanded(true)
  }

  return (
    <>
      <div className={`fixed bottom-0 left-0 top-0 flex h-full w-52 flex-col bg-slate-500 ${expanded ? '' : '!w-14'}`}>
        <div className='flex items-center p-4'>
          <RiMenuLine className='mr-4 h-5 w-5 shrink-0 cursor-pointer select-none' onClick={() => handleToggle()} />
          <h1 className={`text-sm ${expanded ? '' : 'hidden'}`}>Ultramarine</h1>
        </div>

        <div className='flex flex-col pl-4'>
          <div className='flex items-center pr-2 pt-4 hover:text-cyan-400'>
            <RiLayoutGridFill
              className={`mr-4 h-5 w-5 shrink-0 cursor-pointer select-none ${expanded ? '' : 'mr-0'}`}
            />
            <h2 className={`inline-flex text-sm ${expanded ? '' : 'hidden'}`}>Dashboard</h2>
          </div>
        </div>
      </div>
    </>
  )
}

// Dashboard
// My Inbox
// Clients
// Enquiries
// Quotations
// Jobs
// Invoicing
// Certification
// Inventory
// Issues
// Applications
