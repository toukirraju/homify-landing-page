"use client"
import { Icon } from '@iconify/react/dist/iconify.js';
import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import Modal from '../Modal';
import dynamic from 'next/dynamic';

const ThemeMode = dynamic(() => import('twr-theme').then(mod => mod.ThemeMode), { ssr: false });
const ThemePalette = dynamic(() => import('twr-theme').then(mod => mod.ThemePalette), { ssr: false });
const ThemePreset = dynamic(() => import('twr-theme').then(mod => mod.ThemePreset), { ssr: false });

const SpeedDial = () => {
    const [isClient, setIsClient] = useState(false);
    const [open, setOpen] = useState(false);
    const [appearanceShow, setAppearanceShow] = useState(false);
    const [colorPresetShow, setColorPresetShow] = useState(false);
    const [themeMode, setThemeMode] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null; // Avoid server-side rendering issues

    return (
        <div className="fixed bottom-8 right-8 space-y-5 z-50">
            <div className={`flex flex-col items-center space-y-4 transition-transform duration-300 ${open ? 'scale-100' : 'scale-0'}`}>
                <button onClick={() => setThemeMode(true)} className="bg-primary-500 text-white p-3 rounded-full shadow-lg hover:bg-primary-600 transition-colors">
                    <Icon icon="gg:dark-mode" className='text-2xl' />
                </button>
                <Modal isOpen={themeMode} onClose={() => setThemeMode(false)}>
                    <div className="flex flex-col space-y-4">
                        <ThemeMode />
                    </div>
                </Modal>

                <button onClick={() => setColorPresetShow(true)} className="bg-primary-500 text-white p-3 rounded-full shadow-lg hover:bg-primary-600 transition-colors">
                    <Icon icon="icon-park-twotone:color-filter" className='text-2xl' />
                </button>
                <Modal isOpen={colorPresetShow} onClose={() => setColorPresetShow(false)}>
                    <div className="flex flex-col space-y-4">
                        <ThemePreset />
                    </div>
                </Modal>

                <button onClick={() => setAppearanceShow(true)} className="bg-primary-500 text-white p-3 rounded-full shadow-lg hover:bg-primary-600 transition-colors">
                    <Icon icon="ic:twotone-color-lens" className='text-2xl' />
                </button>
                <Modal isOpen={appearanceShow} onClose={() => setAppearanceShow(false)}>
                    <div className="flex flex-col space-y-4">
                        <ThemePalette />
                    </div>
                </Modal>
            </div>
            <button
                onClick={() => setOpen(!open)}
                className={classNames("bg-primary-500/50 text-white p-5 rounded-full shadow-lg hover:bg-primary-600 transition-all duration-200 transform",
                    { "rotate-45": open }
                )}
            >
                <Icon icon="akar-icons:plus" />
            </button>
        </div>
    );
};

export default SpeedDial;
