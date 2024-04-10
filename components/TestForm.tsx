"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const items = [
  {
    id: "home",
    label:
      "Persistent cough for two or more weeks, (cough of any duration for HIV positives)",
  },
  {
    id: "recents",
    label: "Night sweats ",
  },
  {
    id: "applications",
    label: "Unexplained weight loss ",
  },
  {
    id: "desktop",
    label: "Fever for more than 2 weeks",
  },
  {
    id: "downloads",
    label: "Swelling on the neck",
  },
] as const;

const FormSchema = z.object({
  items: z.array(z.string()),
});

type FormType = {
  onSubmit: (data: string) => void;
};

const TestForm = ({ onSubmit }: FormType) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
    },
  });

  function handleSubmit(data: z.infer<typeof FormSchema>) {
    onSubmit(JSON.stringify(data));
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-8 my-3 px-6"
      >
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            className="font-medium text-base my-1"
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-medium text-base">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size={"lg"} type="submit">
          Evaluate
        </Button>
      </form>
    </Form>
  );
};

export default TestForm;
