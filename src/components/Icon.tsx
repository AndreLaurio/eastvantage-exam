import React from 'react'

interface IIcon {
    backgroundColor: string;
    icon: React.ReactNode;
}

const Icon: React.FC<IIcon> = ({backgroundColor, icon}) => {
    return (
        <div className='h-[50px] !w-[50px] flex items-center justify-center rounded-[4px] flex-shrink-0' style={{ backgroundColor }}>
            {icon}
        </div>
    )
}

export default Icon;
