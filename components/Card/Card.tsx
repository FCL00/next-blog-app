import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import styles from "./Card.module.css";

import { formatDate } from "@/lib/utils";

export default function Card({post} : {post: Card}){

    const {_createAt, view, author: { _id: authorId, name}, _id, description, image, category, title} = post;

    return (
        <li className={styles['card']}>

            <div className="flex justify-between">
                <p>{formatDate(_createAt)}</p>
                <div className="flex gap-1.5    ">
                    <EyeIcon className="size-6 text-violet-700"/>
                    <span className="">{view}</span>
                </div>
            </div>

            <div className="flex-between">
                <div className="flex-1">
                    <Link href={`/user/${authorId}`}>
                        <p className="font-medium line-clamp-1">{name}</p>
                    </Link>
                    <Link href={`startup/${_id}`} className="text-2xl font-bold line-clamp-1">{title}</Link>
                </div>
                <Link href={`/user/${authorId}`}>
                    <Image src="https://picsum.photos/48/48" width={48} height={48} className="rounded-full" alt="placehold image"/>
                </Link>
            </div>
            <Link href={`startup/${_id}`}  className="font-normal text-[16px] line-clamp-2 my-3 text-black break-all">
                <p>{description}</p>
                <img className="rounded-lg" src={image} alt="sample image" />
            </Link>

            <div className="flex-between gap-3 mt-5">
                <Link href={`/?query=${category?.toLowerCase()}`}>
                    <p className="text-16-medium">{category}</p>
                </Link>
                <Button className="rounded-full bg-black font-medium text-[16px] text-white px-5 py-3 !important" asChild>
                    <Link href={`/startup/${_id}`}>Details</Link>
                </Button>
            </div>
        </li>
    )
    
}