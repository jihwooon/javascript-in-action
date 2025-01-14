import Link from "next/link";

export default function layout({sidebar, feed, children}: {
    children: React.ReactNode,
    sidebar: React.ReactNode,
    feed: React.ReactNode
}) {
    return (
        <div>
            <div>
                <Link href={"/parallel"}>parallel</Link>
                &nbsp;
                <Link href={"/parallel/setting"}>parallel/setting</Link>
            </div>
            <br/>
            {sidebar}
            {feed}
            {children}
        </div>
    )
}