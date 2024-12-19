"use client"
import Nav from '../components/nav/nav'
import { CgMenuGridO } from "react-icons/cg";
import { IoPersonSharp, IoLayersOutline } from "react-icons/io5";
import { MdOutlineHome, MdNotificationsActive } from "react-icons/md";
import { TbTruckDelivery, TbShoppingBagCheck, TbHelpSquareFilled } from "react-icons/tb";
import { GiVerticalBanner, GiCheckeredDiamond } from "react-icons/gi";
import './dashboard.css'
import { useState } from 'react';
import Overview from './components/overview/overview';
import Delivery from './components/delivery/delivery';
import BannerContent from "./components/banner/BannerContent";
import BrandContent from "./components/brand/BrandContent";
import LayerContent from "./components/layer/LayerContent";
import GifContent from "./components/gif/GifContent";
import HelpContent from "./components/help/HelpContent";
import NotificationContent from "./components/notifcation/NotificationContent";

export default function Dashboard() {
    const [selectedIcon, setSelectedIcon] = useState('circles');
    const [selectedOption, setSelectedOption] = useState('Overview');

    const handleIconClick = (option: string) => {
        setSelectedIcon(option);
        // setSelectedOption('');
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        console.log(option);
    };

    return (
        <div className="dashboard-component">
            <div className="dashboard-component-nav">
                <Nav />
            </div>
            <div className="dashboard-component-main-content">
                <div className="dashboard-component-icon-sidebar">
                    <div className={`dashboard-component-icon-sidebar-opt ${selectedIcon === 'circles' ? 'active' : ''}`} onClick={() => handleIconClick('circles')}>
                        <CgMenuGridO />
                    </div>
                    <div className={`dashboard-component-icon-sidebar-opt ${selectedIcon === 'home' ? 'active' : ''}`} onClick={() => handleIconClick('home')}>
                        <MdOutlineHome />
                    </div>
                    <div className={`dashboard-component-icon-sidebar-opt ${selectedIcon === 'profile' ? 'active' : ''}`} onClick={() => handleIconClick('profile')}>
                        <IoPersonSharp />
                    </div>
                    <div className={`dashboard-component-icon-sidebar-opt ${selectedIcon === 'notifications' ? 'active' : ''}`} onClick={() => handleIconClick('notifications')}>
                        <MdNotificationsActive />
                    </div>
                    <div className={`dashboard-component-icon-sidebar-opt ${selectedIcon === 'delivery' ? 'active' : ''}`} onClick={() => handleIconClick('delivery')}>
                        <TbTruckDelivery />
                    </div>
                </div>
                <div className="dashboard-component-options-sidebar">
                    {selectedIcon === 'circles' && 
                        <div className='dashboard-component-options-sidebar-in'>
                            <div className='dashboard-component-options-sidebar-opt active' onClick={ () => handleOptionClick('Overview')}>
                                <CgMenuGridO />Over View
                            </div>
                        </div>}
                    {selectedIcon === 'home' && 
                        <div className='dashboard-component-options-sidebar-in'>
                            <div className="dashboard-component-options-sidebar-opt active" onClick={() => handleOptionClick('banners')}>
                                <GiVerticalBanner />Banners
                            </div>
                            <div className="dashboard-component-options-sidebar-opt" onClick={() => handleOptionClick('brands')}>
                                <TbShoppingBagCheck />Brands
                            </div>
                            <div className="dashboard-component-options-sidebar-opt" onClick={() => handleOptionClick('layerStyle')}>
                                <IoLayersOutline />Layer Style
                            </div>
                        </div>}
                    {selectedIcon === 'profile' && 
                        <div className='dashboard-component-options-sidebar-in'>
                            <div className="dashboard-component-options-sidebar-opt active" onClick={() => handleOptionClick('gif')}>
                                <GiCheckeredDiamond />Promotion Gif
                            </div>
                            <div className="dashboard-component-options-sidebar-opt" onClick={() => handleOptionClick('help')}>
                                <TbHelpSquareFilled />Help Center
                            </div>
                        </div>}
                    {selectedIcon === 'notifications' && 
                        <div className='dashboard-component-options-sidebar-in'>
                            <div className="dashboard-component-options-sidebar-opt active" onClick={() => handleOptionClick('notification')}>
                                <MdNotificationsActive />Notification
                            </div>
                        </div>}
                    {selectedIcon === 'delivery' && 
                        <div className='dashboard-component-options-sidebar-in'>
                            <div className="dashboard-component-options-sidebar-opt active" onClick={() => handleOptionClick('delivery')}>
                                <TbTruckDelivery />Delivery
                            </div>
                        </div>}
                </div>
                <div className="dashboard-component-content">
                    {selectedOption === 'Overview' && <Overview />}
                    {selectedOption === 'banners' && <BannerContent />}
                    {selectedOption === 'brands' && <BrandContent />}
                    {selectedOption === 'layerStyle' && <LayerContent />}
                    {selectedOption === 'gif' && <GifContent />}
                    {selectedOption === 'help' && <HelpContent />}
                    {selectedOption === 'notification' && <NotificationContent />}
                    {selectedOption === 'delivery' && <Delivery />}
                </div>
            </div>
        </div>
    )
}