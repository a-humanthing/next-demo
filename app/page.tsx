import Image from "next/image"
import styles from "./page.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1>a.humanthing Says hi to Next.js 4</h1>
      <Link href={"/about"}>Click to about</Link>
    </>
  )
}
