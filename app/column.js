export default function Column({children}) {
    return (
        <div className='flex flex-col gap-2 lg:gap-4 md:gap-3'>
            {children}
        </div>
    )
}