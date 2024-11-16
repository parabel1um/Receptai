import { X } from "lucide-react";
import { Input } from "./ui/input";
import { Form, FormControl } from "./ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Pavadinimą turi sudaryti ne mažiau kaip 2 simboliai.",
  }),
  text: z.string().min(10, {
    message: "Aprašymą turi sudaryti ne mažiau kaip 10 simbolių.",
  }),
});

const NewReceptWindow = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      text: "",
    },
  });

  const handleSubmit = async () => {};

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-background px-7 py-5 rounded-lg shadow-lg min-w-96 max-w-6xl relative grid">
        <h2 className="text-xl font-semibold mb-4">Sukurti naują receptą</h2>
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-8 group"
        >
          <X className="w-8 h-8 transition duration-200 delay-50 group-hover:rotate-[180deg]" />
        </button>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="w-full max-w-md flex flex-col gap-5"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recepto pavadinimas</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-[8px]"
                      placeholder="Pavadinimas"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 mt-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recepto Aprašymas</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Jūsų recepto aprašymas"
                      className="resize-none rounded-[8px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 mt-2" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="border-[1px] border-black w-full bg-dark text-white rounded-xl hover:ring-offset-2 active:ring-2 active:ring-neutral-800 ring-[#4640DE] ring-opacity-15 hover:bg-black"
            >
              Sukurti
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default NewReceptWindow;
