import moment from 'moment';
import React from 'react';
import { IUser } from '../App';
import { TbPhone } from "react-icons/tb";
import { TbMail } from "react-icons/tb";
import { TbMapPin } from "react-icons/tb";
import { TbUserSquare } from "react-icons/tb";
import { TbCake } from "react-icons/tb";
import Icon from './Icon';
import _ from 'lodash'

interface ICardProfileProps {
    data: IUser
}

const CardProfile: React.FC<ICardProfileProps> = ({data}) => {
    return (
        <div className='w-auto sm:w-[600px] md:w-[700px] lg:w-[1000px] relative mt-[250px] lg:mt-[0px] transition-all duration-300 ease-in-out'>
            {/* First Half */}
            <div className='bg-[#F9F9F9]'>
                <div className='flex justify-center'>
                    <img src={_.get(data, 'picture.large', '')} className="rounded-full w-[250px] -mt-[125px]"/>
                </div>
                <div className='py-[25px] text-center text-[#000000] sm:text-[40px] font-[600] leading-[47.4px]'>
                    {_.get(data, 'name.title', 'N/A')} {_.get(data, 'name.first', 'N/A')} {_.get(data, 'name.last', 'N/A')}
                </div>
            </div>
            {/* Second Half */}
            <div className='bg-[#FFFFFF] px-[62px] pb-[60px]'>
                <div className='grid grid-cols-12 pt-[60px]'>
                    <div className='col-span-12 lg:col-span-6'>
                        <div className='text-[#8B8B8B] sm:text-[26px] font-[400] leading-[30.81px]'>
                            About Me
                        </div>

                        <div className='text-[#000000] sm:text-[20px] font-[400] leading-[30.81px]'>
                            <div className='flex items-center mt-[15px]'>
                                <Icon 
                                    icon={<TbUserSquare color='#FB9600'/>} 
                                    backgroundColor={'#FFEBCD'}
                                />
                                <span className='capitalize ml-[20px]'>
                                    {_.get(data, 'gender', 'N/A')}
                                </span>
                            </div>
                            <div className='flex items-center mt-[15px]'>
                                <Icon 
                                    icon={<TbCake color='#04A901'/>} 
                                    backgroundColor={'#E1FFE4'}
                                />
                                <span className='ml-[20px]'>
                                    {moment(_.get(data, 'dob.date', 'N/A')).format('LL')}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-6 mt-[50px] lg:mt-[0px]'>
                        <div className='text-[#8B8B8B] sm:text-[26px] font-[400] leading-[30.81px]'>
                            Contact
                        </div>
                        <div className='text-[#000000] sm:text-[20px] font-[400] leading-[30.81px]'>
                            <div className='flex items-center mt-[15px]'>
                                <Icon 
                                    icon={<TbPhone color='#ED0000'/>} 
                                    backgroundColor={'#FFE4E4'}
                                />
                                <span className='ml-[20px]'>
                                    {_.get(data, 'phone', 'N/A')}
                                </span>
                            </div>
                            <div className='flex items-center mt-[15px]'>
                                <Icon 
                                    icon={<TbMail color='#6909E3'/>} 
                                    backgroundColor={'#EEE0FF'}
                                />
                                <span className='ml-[20px]'>
                                    {_.get(data, 'email', 'N/A')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex mt-[15px] items-center h-[50px] text-[#000000] sm:text-[20px] font-[400] leading-[30.81px]'>
                    <Icon 
                        icon={<TbMapPin color='#3460FF'/>} 
                        backgroundColor={'#DFE6FF'}
                    />
                    <span className='ml-[20px]'>
                        {_.get(data, 'location.street.number', 'N/A')} {_.get(data, 'location.street.name', 'N/A')} {_.get(data, 'location.city', 'N/A')} {_.get(data, 'location.country', 'N/A')}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CardProfile;
