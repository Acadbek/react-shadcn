import { DataTable } from "@/components/users/table"

function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed53242f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52fse",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    }
  ]
}

export const UsersPage = () => {
  const data = getData()

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users Page</h1>
      <p>This is the users page content.</p>
      <DataTable data={data} />
    </div>
  )
}
