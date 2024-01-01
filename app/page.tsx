import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto">
      <article className="prose">
        <h1 className="my-3">NextJS boilerplate</h1>
        <Link href={'/form'} type="button" className="btn btn-primary">Form showcases</Link>
      </article>
    </main>
  )
}
