
export default function SubPageHeader({pageTitle,}) {
  return (
    <>
      <div className={`h-24 bg-fuchsia-900 p-3 pt-7 flex items-center`}>
        <h1 className="text-4xl md:text-4xl font-bold ml-3">
          {pageTitle}
        </h1>
      </div>
    </>
  )
}
