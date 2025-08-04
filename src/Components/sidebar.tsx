import { ChevronFirst }  from "lucide-react";

interface SidebarProps {
    className?: string;
}

export default function Sidebar({className = ""}: SidebarProps) {
    return(
        <aside className = "h-screen">  
            <nav className = "h-[90%] flex flex-col bg-gray-700 ">
                <div className="p-4  pb-2 flex justify-between items-center">
                    <img src="/images/med.png" className="w-32"/>
                    <button className = "p1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                        <ChevronFirst/>
                        </button>

                </div>
                <ul className = "flex-1 px-3">{}</ul>
                <div className ="border-t flex p-3">
                    <img
                    src=""
                    alt="Something app stuff"
                    />
                </div>
            </nav>    
            

        </aside>

    )
}