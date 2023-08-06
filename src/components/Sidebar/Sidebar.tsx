import Image from 'next/image'
import { type IconType } from 'react-icons'

import {
  MdOutlineSpaceDashboard,
  MdOutlineInbox,
  MdPeopleOutline,
  MdRequestQuote,
  MdOutlineReportGmailerrorred
} from 'react-icons/md'
import { LuMailQuestion, LuHardHat, LuFolderCheck, LuDatabase, LuFileSignature } from 'react-icons/lu'
import { FaFileInvoiceDollar } from 'react-icons/fa'

const SideBarButton: React.FC<{ Icon: IconType; label: string }> = ({ Icon, label }) => {
  return (
    <div className=' mt-1 flex rounded p-2 hover:bg-slate-200'>
      <Icon className={`mr-2 inline h-5 w-5 shrink-0 cursor-pointer select-none`} />
      <h1 className={`inline text-sm font-medium`}>{label}</h1>
    </div>
  )
}

export default function Sidebar() {
  return (
    <>
      <div className={`fixed bottom-0 left-0 top-0 flex h-full w-48 flex-col bg-white drop-shadow-md`}>
        <div className='ml-2 flex items-center p-4'>
          <Image
            src={'/UMLogo.svg'}
            alt='Picture of the author'
            width={'46'}
            height={'26'}
            className='mr-4 shrink-0 cursor-pointer select-none'
          />
          <h1 className={`font-poppins text-sm`}>Ultramarine</h1>
        </div>

        <div className='mt-2 flex flex-col p-4'>
          <SideBarButton Icon={MdOutlineSpaceDashboard} label='Dashboard' />
          <SideBarButton Icon={MdOutlineInbox} label='Inbox' />

          <div className='mt-6'>
            <SideBarButton Icon={MdPeopleOutline} label='Clients' />
            <SideBarButton Icon={LuMailQuestion} label='Enquiries' />
            <SideBarButton Icon={MdRequestQuote} label='Quotations' />
            <SideBarButton Icon={LuHardHat} label='Jobs' />
            <SideBarButton Icon={FaFileInvoiceDollar} label='Invoicing' />
            <SideBarButton Icon={LuFolderCheck} label='Certification' />
            <SideBarButton Icon={LuDatabase} label='Inventory' />
          </div>

          <div className='mt-6'>
            <SideBarButton Icon={MdOutlineReportGmailerrorred} label='Issues' />
            <SideBarButton Icon={LuFileSignature} label='Applications' />
          </div>
        </div>
      </div>
    </>
  )
}
