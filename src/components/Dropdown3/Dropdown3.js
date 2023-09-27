import 'bootstrap/dist/css/bootstrap.min.css'
import { CDropdown } from '@coreui/react'
import { CDropdownMenu } from '@coreui/react'
import { CDropdownItem } from '@coreui/react'
import { CDropdownToggle } from '@coreui/react'

import './Dropdown3.css';

const Dropdown3 = () => {
    const handleItemClick = (itemName) => {
        console.log(`Selected item: ${itemName}`);
    };

    return (
        <>
            <CDropdown>
                <CDropdownToggle className='dropdown__title' color="black text-yellow">Dropdown 3</CDropdownToggle>
                <CDropdownMenu className='bg-black'>
                    <CDropdownItem className='dropdown__item' onClick={() => handleItemClick('Item 1')}>Item 1</CDropdownItem>
                    <CDropdownItem className='dropdown__item' onClick={() => handleItemClick('Item 2')}>Item 2</CDropdownItem>
                    <CDropdownItem className='dropdown__item' onClick={() => handleItemClick('Item 3')}>Item 3</CDropdownItem>
                </CDropdownMenu>
            </CDropdown>
        </>
    )
}

export default Dropdown3;
