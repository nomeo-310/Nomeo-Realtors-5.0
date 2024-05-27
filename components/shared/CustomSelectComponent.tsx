import React from 'react'
import { HiChevronDown, HiChevronUp, HiMagnifyingGlass } from 'react-icons/hi2'
import { twMerge } from 'tailwind-merge'

type customSelectProps = {
  selectStyle?: string
  title?: string
  data: any
  selected: string
  placeholder: string
  flowTop?: boolean
  setSelected: React.Dispatch<React.SetStateAction<string>>
  useSearch?:boolean
  flowTopHeight?: string
  flowBottomHeight?: string
}

const CustomSelectComponent = ({flowTopHeight, flowBottomHeight,selectStyle, title, data, selected, setSelected, placeholder, flowTop, useSearch}: customSelectProps) => {

  const [inputValue, setInputValue] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelection = (item:any) => {
    if (item.toLowerCase() !== selected?.toLowerCase()) {
      setSelected(item);
      setIsOpen(false);
      setInputValue('');
    } else {
      setSelected('')
    }
  };

  return (
    <div className={twMerge('w-full relative ', selectStyle)}>
      {title && <h2 className='uppercase ml-2 mb-1 text-sm'>{title}</h2>}
      <div onClick={() => setIsOpen((prevState) => !prevState)} className={`bg-gray-200 w-full cursor-pointer flex items-center justify-between md:p-4 p-3.5 rounded ${!selected && 'text-gray-400'}`}>
        <div className='grow lg:text-lg'>{selected ? selected : `select ${placeholder}`}</div>
        <div className="border-l md:pl-4 pl-3.5 border-black text-black">
          { isOpen ? <HiChevronDown size={16}/> : <HiChevronUp size={16}/> }
        </div>
      </div>
      <ul className={twMerge(`bg-white z-[120] px-3.5 absolute ${flowTop ? '-top-[145px]' : '-bottom-[170px]'}  ${flowTop ? flowTopHeight : flowBottomHeight} left-0 w-full rounded overflow-hidden overflow-y-auto ${isOpen ? 'max-h-44' : 'max-h-0'}`)}>
        { useSearch && data?.length > 0 &&
          <React.Fragment>
            <div className="flex items-center sticky top-0 md:px-4 px-3.5 py-3.5 bg-white">
              <div className='md:pr-4 pr-3.5'>
                <HiMagnifyingGlass size={16}/>
              </div>
              <input type='text' className='grow focus:outline-none'
                placeholder={`search ${placeholder}...`}
                value={inputValue} 
                onChange={(event) => setInputValue(event.target.value.toLowerCase())}
                autoFocus
              />
            </div>
            <hr className='mb-1'/>
          </React.Fragment>
        }
        {data && data.length > 0 && data.map((item:any, index:number) => (
          <li key={index}
            onClick={() =>handleSelection(item)}
            className={`${useSearch ? '': 'mt-1'} capitalize mb-1 text-black p-2 cursor-pointer rounded ${item.toLowerCase().startsWith(inputValue) ? 'block': 'hidden'} ${item?.toLowerCase() === selected?.toLowerCase() ? 'bg-gray-300' : 'hover:bg-gray-200'}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CustomSelectComponent;