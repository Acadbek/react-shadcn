import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea";
import { Controller, useForm } from 'react-hook-form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import * as z from "zod";
import { toast } from "sonner"
import { Activity } from "react"

const items = [
  { label: "Select a category", value: null },
  { label: "Clothes", value: "Clothes" },
  { label: "Electronics", value: "Electronics" },
  { label: "Furniture", value: "Furniture" },
  { label: "Shoes", value: "Shoes" },
  { label: "Miscellaneous", value: "Miscellaneous" },
]

const schema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  price: z.coerce.number().min(0.01, "Price must be greater than 0"),
  description: z.string().min(1).max(500, "Description must be less than 500 characters"),
  category: z.string().min(1, "Category is required"),
  image: z.url("Image must be a valid URL"),
})

export function SignupForm({
  className,
  ...props
}) {

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      price: 0,
      description: "",
      category: "",
      image: "",
    }
  })

  const onSubmit = (data) => {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      },
    })
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your product</h1>
        </div>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input
                {...field}
                id="name"
                type="text"
                placeholder="T-Shirt - Blue, Large"
                className="bg-background"
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        <Controller
          name="price"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="email">Price</FieldLabel>
              <Input
                {...field}
                id="price"
                type="number"
                placeholder="$10"
                className="bg-background"
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        <Controller
          name="description"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="password">Description</FieldLabel>
              <Textarea
                {...field}
                value={field.value ?? ""}
                id="description"
                placeholder='Description'
              />
              <Activity mode={fieldState.invalid ? "visible" : "hidden"}>
                <FieldError errors={[fieldState.error]} />
              </Activity>
            </Field>
          )}
        />

        <Controller
          name='category'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} items={items}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    {items.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />


        <Controller
          name='image'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="name">Image</FieldLabel>
              <Input
                {...field}
                id="image"
                type="url"
                placeholder="https://example.com/image.jpg"
                className="bg-background"
              />

              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />
        <Field>
          <Button type="submit">Create Product</Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
