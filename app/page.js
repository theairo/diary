'use client'
import { useState, useEffect } from 'react';

import Subject from './subject'
import Column from './column'


export default function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
        const storedArray = localStorage.getItem('data');
        if (storedArray) {
            setData(JSON.parse(storedArray));
        }
        }, []);


    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data));
        }, [data]);



  return (
    <div className='bg-slate-50 pb-8'>
        <div className='flex justify-center mt-12'>
        <div className='flex flex-col md:flex-row md:gap-5 lg:gap-6'>
            <Column>
                <div className='font-bold text-lg mt-8'>
                    Понеділок
                </div>
                <Subject name="Геометрія" cab="201" id="0"/>
                <Subject name="Геометрія" cab="201" id="1"/>
                <Subject name="Укр. літ" cab="112" id="2"/>
                <Subject name="Зар. літ" cab="113" id="3"/>
                <Subject name="Захист/Мист." cab="116" id="4"/>
                <Subject name="Хімія" cab="310" id="5"/>
                <Subject name="Англ. мова" cab="317" id="6"/>
            </Column>
            <Column>
                <div className='font-bold text-lg mt-8'>
                    Вівторок
                </div>
                <Subject name="Інформатика" cab="314" id="7"/>
                <Subject name="Фіз-ра" id="8"/>
                <Subject name="Фізика" cab="215" id="9"/>
                <Subject name="Алгебра" cab="112" id="10"/>
                <Subject name="Алгебра" cab="112" id="11"/>
                <Subject name="Укр. мова" cab="112" id="12"/>
                <Subject name="Історія" cab="110" id="13"/>
                <Subject name="Біологія" cab="203" id="14"/>
            </Column>
            <Column>
                <div className='font-bold text-lg mt-8'>
                    Середа
                </div>
                <Subject name="Захист" cab="116" id="15"/>
                <Subject name="Алгебра" cab="201" id="16"/>
                <Subject name="Алгебра" cab="201" id="17"/>
                <Subject name="Укр. літ" cab="112" id="18"/>
                <Subject name="Астрономія" cab="211" id="19"/>
                <Subject name="Географія" cab="210" id="20"/>
            </Column>
            <Column>
                <div className='font-bold text-lg mt-8'>
                    Четвер
                </div>
                <Subject name="Біологія" cab="203" id="21"/>
                <Subject name="Геометрія" cab="201" id="22"/>
                <Subject name="Фізика" cab="111" id="23"/>
                <Subject name="Укр. мова" cab="112" id="24"/>
                <Subject name="Англ. мова" cab="317" id="25"/>
                <Subject name="Фіз-ра" id="26"/>
                <Subject name="Історія/Інф." cab="311" id="27"/>
            </Column>
            <Column>
                <div className='font-bold text-lg mt-8'>
                    П&apos;ятниця
                </div>
                <Subject name="Хімія" cab="311" id="28"/>
                <Subject name="Алгебра" cab="201" id="29"/>
                <Subject name="Алгебра" cab="201" id="30"/>
                <Subject name="Фізика" cab="111" id="31"/>
                <Subject name="Історія" cab="203" id="32"/>
                <Subject name="Фіз-ра" id="33"/>
                <Subject name="Мистецтво" cab="110" id="34"/>
            </Column>
        </div>
        </div>
        
        
        
    </div>
  )
}
