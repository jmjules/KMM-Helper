import Link from 'next/link'

export default function SubPageHeader({pageTitle, colorString}) {
  return (
    <>
      <div className={`h-32 ${colorString} p-3 pt-7 flex items-center`}>
        <Link href="/">
          <img src="/icons/icon-home.svg" className="w-10" />
        </Link>
        <h1 className="text-4xl md:text-4xl font-bold ml-3">
          {pageTitle}
        </h1>
      </div>
    </>
  )
}
