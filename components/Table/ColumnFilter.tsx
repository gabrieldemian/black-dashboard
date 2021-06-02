import { Input } from "~/components"

export default function ColumnFilter({
  column: { filterValue, setFilter },
}: any) {

  return (
    <Input
      onChange={(e: any) => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      value={filterValue || ''}
      placeholder="Search"
      icon="search"
      className="p-3 mt-4 text-sm"
    />
  )
}