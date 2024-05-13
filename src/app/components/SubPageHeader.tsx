
export default function SubPageHeader({pageTitle,}) {
  return (
    <>
      <div className={`h-24 bg-fuchsia-800 p-3 pt-7 flex place-content-center`}>
        <h1 className="text-center text-4xl md:text-4xl font-bold">
          {pageTitle}
        </h1>
      </div>
    </>
  )
}
