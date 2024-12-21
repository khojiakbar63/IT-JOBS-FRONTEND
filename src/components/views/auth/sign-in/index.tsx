import { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { validateSignInSchema } from "@/validation/auth";
import ThemeMode from "@/components/constants/theme";
import AuthHeader from "../auth-header";
import AuthFooter from "../auth-footer";
import FormFieldComponent from "../../../form-field";

const SignInPageComponent: FC = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof validateSignInSchema>>({
    resolver: zodResolver(validateSignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onFormSubmit(values: z.infer<typeof validateSignInSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="grid place-content-center h-screen">
      <ThemeMode className="top-4 right-4" />

      <AuthHeader />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onFormSubmit)}
          className="space-y-4 w-[330px] sm:min-w-[500px]"
        >
          {/* ------------------------------- Email ------------------------------- */}
          <FormFieldComponent
            form={form}
            name="email"
            label="Email"
            placeholder="Email"
          />
          {/* ------------------------------- Password ------------------------------- */}
          <FormFieldComponent
            form={form}
            name="password"
            label="Password"
            placeholder="Password"
          />
          {/* ------------------------------- Submit Button ------------------------------- */}
          <Button
            type="submit"
            className="w-full bg-green-800 hover:bg-green-700 active:bg-green-800"
          >
            Submit
          </Button>
        </form>
      </Form>

      <AuthFooter />
    </div>
  );
};

export default SignInPageComponent;
