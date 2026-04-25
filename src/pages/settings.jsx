import { getUsers } from "@/services/users"
import { useEffect, useState } from "react"
import { DataTable } from "@/components/users/table"
import { toast } from "sonner"
import { CreateUserDialog } from "@/components/settings/create-user-modal"
import * as z from "zod"

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
});

export const Settings = () => {
  const [users, setUsers] = useState([]);

  const result = userSchema.safeParse({ name: 12, age: '25' });

  if (result.success) {
    console.log("✅ Ma’lumot to‘g‘ri:", result.data);
  } else {
    console.log("❌ Xatolik:", toast(result.error.issues.map(issue => issue.message).join(", ")));
  }

  useEffect(() => {
    getUsers()
      .then(res => setUsers(res.data))
      .catch(err => {
        toast.error("Failed to fetch users: " + err.message);
      });
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <p className="text-gray-600">Manage your account settings and preferences.</p>
      <DataTable data={users} />
      <CreateUserDialog />
    </div>
  )
}