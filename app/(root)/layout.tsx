import Navbar from "@/app/components/Navbar/Navbar";
export default function layout({children} : Readonly <{ children: React.ReactNode}>){
    return(
        <>
            <main className="">
                <Navbar/>
                {children}
            </main>
        </>
    );
}