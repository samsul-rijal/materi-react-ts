import { useState } from "react";
import MainTemplate from "../components/templates/MainTemplate"
import { Drawer } from "flowbite-react";

const mieGacoan = [
  {
    nama: 'MIE GACOAN LV 0',
    harga: 12500,
    deskripsi: 'test deskripsi'
  },
  {
    nama: 'MIE GACOAN LV 1',
    harga: 12500,
    deskripsi: 'test deskripsi'
  },
  {
    nama: 'MIE GACOAN LV 2',
    harga: 12500,
    deskripsi: 'test deskripsi'
  },
]


function Contact() {

  const [isOpen, setIsOpen] = useState(true);
  const [order, setOrder] = useState()

  const handleClose = () => setIsOpen(false);

  const handleOrder = (item: any) => {
    setIsOpen(true)
    // setOrder(item)
  }



// layout tampilan
// flex
// grid
// position


  return (
    <MainTemplate pageTitle="Contact">

      <div>
        <div className="px-72">
          {mieGacoan.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="shadow-md w-48 p-5 mb-5">
                <p>{item.nama}</p>
                <p>{item.harga}</p>
                <p>{item.deskripsi}</p>
              </div>
              <div className="hidden sm:inline md:inline lg:inline">
                <button onClick={() => handleOrder(item)}>Add + </button>
              </div>
            </div>
          ))}
        </div>
      </div>
        

      <Drawer open={isOpen} onClose={handleClose} position="bottom">
          <h2 className="font-bold">Mie Gacoan</h2>
          <Drawer.Items>
            <p className="mb-3">Test deskripsi</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <a
                href="#"
                className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Learn more
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Get access&nbsp;
                <svg
                  className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </Drawer.Items>
      </Drawer>




    </MainTemplate>
  )
}

export default Contact
