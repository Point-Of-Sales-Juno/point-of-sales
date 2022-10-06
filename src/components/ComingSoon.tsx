import { BsBoxArrowUpRight } from 'react-icons/bs';


export function ComingSoon () {
    return (
        <>
            <h1>
                <span className="text-6xl">Coming </span> 
                <span className="text-6xl text-brightRed">Soon</span>
            </h1>
            <h2 className='mt-5 hover:text-brightRed'>
                <a href="https://www.behance.net/gallery/121326943/Point-of-Sale-App-UIUX-Design?tracking_source=search_projects%7Cpos">UX & UI Design<BsBoxArrowUpRight className='inline text-xs '></BsBoxArrowUpRight></a>
            </h2>
            <h2 className="mt-5 text-xl underline text-subtleGray">Creators:</h2>
            <ul className="mt-3">
                <li className="flex flex-col">
                    <a target="_blank" rel="noopener noreferrer"  href="https://alicetsai.ca/" className='hover:text-brightRed'>
                        Alice Tsai <BsBoxArrowUpRight className='inline text-xs '/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer"  href="https://www.charlesli.ca/" className='hover:text-brightRed'>
                        Charles Li <BsBoxArrowUpRight className='inline text-xs '/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer"  href="https://jeremychai.com/" className='hover:text-brightRed'>
                        Jeremy Chai <BsBoxArrowUpRight className='inline text-xs '/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer"  href="https://paridhishah.dev/" className='hover:text-brightRed'>     
                        Paridhi Shah <BsBoxArrowUpRight className='inline text-xs '/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer"  href="https://www.shannontao.dev/" className='hover:text-brightRed'>
                        Shannon Tao <BsBoxArrowUpRight className='inline text-xs '/>
                    </a>
                </li>
            </ul>
            
        </>
    )
}
