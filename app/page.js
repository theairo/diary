import Image from 'next/image'
import Subject from './subject'
import Column from './column'

export default function Home() {
  return (
    <div className='bg-slate-50 pb-8'>
        <div className='flex justify-center mt-12'>
        <div className='flex flex-col md:flex-row md:gap-5 lg:gap-6'>
            <Column>
                <div className='font-bold text-lg mt-8'>
                    Понеділок
                </div>
                <Subject name="Геометрія" cab="201" />
                <Subject name="Геометрія" cab="201" />
                <Subject name="Укр. літ" cab="112" />
                <Subject name="Зар. літ" cab="113" />
                <Subject name="Захист/Мист." cab="116" />
                <Subject name="Хімія" cab="310" />
                <Subject name="Англ. мова" cab="317" />
            </Column>
            <Column>
                <div className='font-bold text-lg mt-8'>
                    Вівторок
                </div>
                <Subject name="Інформатика" cab="314" />
                <Subject name="Фіз-ра" />
                <Subject name="Фізика" cab="215" />
                <Subject name="Алгебра" cab="112" />
                <Subject name="Алгебра" cab="112" />
                <Subject name="Укр. мова" cab="112" />
                <Subject name="Історія" cab="110" />
                <Subject name="Біологія" cab="203" />
            </Column>
            <Column>
                <div className='font-bold text-lg mt-8'>
                    Середа
                </div>
                <Subject name="Захист" cab="116" />
                <Subject name="Алгебра" cab="201" />
                <Subject name="Алгебра" cab="201" />
                <Subject name="Укр. літ" cab="112" />
                <Subject name="Астрономія" cab="211" />
                <Subject name="Географія" cab="210" />
            </Column>
            <Column>
                <div className='font-bold text-lg mt-8'>
                    Четвер
                </div>
                <Subject name="Біологія" cab="203" />
                <Subject name="Геометрія" cab="201" />
                <Subject name="Фізика" cab="111" />
                <Subject name="Укр. мова" cab="112" />
                <Subject name="Англ. мова" cab="317" />
                <Subject name="Фіз-ра" />
                <Subject name="Історія/Інф." cab="311" />
            </Column>
            <Column>
                <div className='font-bold text-lg mt-8'>
                    П'ятниця
                </div>
                <Subject name="Хімія" cab="311" />
                <Subject name="Алгебра" cab="201" />
                <Subject name="Алгебра" cab="201" />
                <Subject name="Фізика" cab="111" />
                <Subject name="Історія" cab="203" />
                <Subject name="Фіз-ра"/>
                <Subject name="Мистецтво" cab="110" />
            </Column>
        </div>
        </div>
        
        
        
    </div>
  )
}
