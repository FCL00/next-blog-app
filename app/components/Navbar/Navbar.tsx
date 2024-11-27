// components
import Link from "next/link";
import { auth, signOut, signIn } from "@/auth";

//styles
import styles from "./Navbar.module.css";


export default async function Navbar() {

    const session = await auth();

    return (
        <header className={styles['header']}>
            <nav className={styles['navbar']}>
                <Link className={styles['nav-logo']} href="/">Logo</Link>
                <div className={styles['nav-links']}>
                    { session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>
                            <form action={ async ()=> {
                                "use server";
                                
                                await signOut({ redirectTo: "/" });
                            }}>
                                <button type="submit">
                                    <span>Logout</span>
                                </button>
                            </form>

                            <Link href={`user/${session?.id}`}>
                                <span>{session ?.user?.name}</span>
                            </Link>
                        </>
                    ): (
                        <>
                            <form action={async () => {
                                "use server";
                                await signIn("github");
                            }}>
                                <button type="submit">Login</button>
                            </form>
                        </>
                    )}
                </div>
            </nav>
        </header>
    )
}