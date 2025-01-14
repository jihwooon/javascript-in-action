'use client'

import {createPortal} from "react-dom";
import style from "./modal.module.css"
import {useEffect, useRef} from "react";
import {useRouter} from 'next/navigation'

export default function Modal({children}: { children: React.ReactNode }) {

    const dialogRef = useRef<HTMLDialogElement>(null);
    const router = useRouter()

    useEffect(() => {
        if (!dialogRef.current?.open) {
            dialogRef.current?.showModal();
            dialogRef.current?.scrollTo({
                top: 0,
            })
        }
    }, [])

    return createPortal(
        <dialog
            className={style.modal}
            ref={dialogRef}
            onClose={() => router.back()}
            onClick={(e) => {
                if ((e.target as any).nodeName === 'DIALOG') {
                    router.back()
                }
            }
            }
        >
            {children}
        </dialog>,
        document.getElementById("modal-root") as HTMLElement
    )
}